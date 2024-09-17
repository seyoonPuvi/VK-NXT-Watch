import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Navbar from '../Navbar'
import CategoryFilterSection from '../CategoryFilterSection'
import FailureApiView from '../FailureApiView'
import ThemeContext from '../../context/ThemeContext'
import GamingItemDetails from '../GamingItemDetails'
import {LeftContainer} from '../VideoItemDetails/styledComponents'
import {LoaderContainer} from '../Home/styledComponents'
import {
  Container,
  SectionContainer,
  IconContainer,
  SectionHeading,
  RightContainer,
} from '../Trending/styledComponents'

import {GamingListContainer, GamingIcon} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {gamingData: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    const {updateCategory} = this.context
    updateCategory('gaming')
    this.fetchGamingData()
  }

  onSuccessFetchData = data => {
    const formattedData = data.map(each => ({
      id: each.id,
      title: each.title,
      thumbnailUrl: each.thumbnail_url,
      viewCount: each.view_count,
    }))

    this.setState({
      gamingData: formattedData,
      apiStatus: apiStatusConstants.success,
    })
  }

  fetchGamingData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const option = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const apiUrl = 'https://apis.ccbp.in/videos/gaming'

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
        <GamingIcon />
      </IconContainer>

      <SectionHeading darkTheme={isDarkTheme}>Gaming</SectionHeading>
    </SectionContainer>
  )

  onRenderGamingListContainer = () => {
    const {gamingData} = this.state

    return (
      <GamingListContainer>
        {gamingData.map(each => (
          <GamingItemDetails gamingDetails={each} key={each.id} />
        ))}
      </GamingListContainer>
    )
  }

  onRenderSuccessApiView = isDarkTheme => (
    <>
      {this.onRenderSectionContainer(isDarkTheme)}
      {this.onRenderGamingListContainer()}
    </>
  )

  onRenderLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="green" height="100" width="100" />
    </LoaderContainer>
  )

  onRenderApiViews = isDarkTheme => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.onRenderLoader()

      case apiStatusConstants.success:
        return this.onRenderSuccessApiView(isDarkTheme)

      case apiStatusConstants.failure:
        return <FailureApiView fetchData={this.fetchGamingData} />
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
              <Container darkTheme={isDarkTheme} data-testid="gaming">
                <LeftContainer darkTheme={isDarkTheme}>
                  <CategoryFilterSection />
                </LeftContainer>
                <RightContainer darkTheme={isDarkTheme}>
                  {this.onRenderApiViews(isDarkTheme)}
                </RightContainer>
              </Container>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

Gaming.contextType = ThemeContext

export default Gaming
