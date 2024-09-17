import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import FailureApiView from '../FailureApiView'
import Navbar from '../Navbar'
import CategoryFilterSection from '../CategoryFilterSection'
import SectionVideoItem from '../SectionVideoItem'
import ThemeContext from '../../context/ThemeContext'
import {LeftContainer} from '../VideoItemDetails/styledComponents'
import {LoaderContainer} from '../Home/styledComponents'
import {
  Container,
  SectionContainer,
  IconContainer,
  TrendingIcon,
  SectionHeading,
  SectionVideoListContainer,
  RightContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Trending extends Component {
  state = {trendingList: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    const {updateCategory} = this.context
    updateCategory('trending')
    this.fetchTrendingData()
  }

  onSuccessFetchData = videosData => {
    const formattedvediosDataList = videosData.map(each => ({
      id: each.id,
      title: each.title,
      thumbnailUrl: each.thumbnail_url,
      channel: {
        name: each.channel.name,
        profileImageUrl: each.channel.profile_image_url,
      },
      viewCount: each.view_count,
      publishedAt: each.published_at,
    }))

    this.setState({
      apiStatus: apiStatusConstants.success,
      trendingList: formattedvediosDataList,
    })
  }

  fetchTrendingData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const option = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const apiUrl = 'https://apis.ccbp.in/videos/trending'

    const response = await fetch(apiUrl, option)
    const data = await response.json()

    if (response.ok) {
      this.onSuccessFetchData(data.videos)
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onRenderSectionContainer = isDarkTheme => (
    <SectionContainer darkTheme={isDarkTheme} data-testid="banner">
      <IconContainer darkTheme={isDarkTheme}>
        <TrendingIcon />
      </IconContainer>

      <SectionHeading darkTheme={isDarkTheme}>Trending</SectionHeading>
    </SectionContainer>
  )

  onRenderSectionVideoContainer = () => {
    const {trendingList} = this.state

    return (
      <SectionVideoListContainer>
        {trendingList.map(each => (
          <SectionVideoItem videoDetails={each} key={each.id} />
        ))}
      </SectionVideoListContainer>
    )
  }

  onRenderLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="green" height="100" width="100" />
    </LoaderContainer>
  )

  onRenderSuccessApiView = isDarkTheme => (
    <RightContainer darkTheme={isDarkTheme}>
      {this.onRenderSectionContainer(isDarkTheme)}
      {this.onRenderSectionVideoContainer()}
    </RightContainer>
  )

  onRenderApiViews = isDarkTheme => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.onRenderLoader()

      case apiStatusConstants.success:
        return this.onRenderSuccessApiView(isDarkTheme)

      case apiStatusConstants.failure:
        return <FailureApiView fetchData={this.fetchTrendingData} />
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <>
              <Navbar />
              <Container darkTheme={isDarkTheme} data-testid="trending">
                <LeftContainer darkTheme={isDarkTheme}>
                  <CategoryFilterSection />
                </LeftContainer>
                {this.onRenderApiViews(isDarkTheme)}
              </Container>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

Trending.contextType = ThemeContext

export default Trending
