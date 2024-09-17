import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import CategoryFilterSection from '../CategoryFilterSection'
import VedioItems from '../VedioItems'
import FailureApiView from '../FailureApiView'
import {Text} from '../CategoryFilterSection/styledComponents'

import {
  Container,
  LeftContainer,
  RightContainer,
  VedioContainer,
  BannerContainer,
  LogoContainer,
  CloseIcon,
  SubHeading,
  GetNowButton,
  TitleImage,
  SearchContainer,
  Input,
  SearchIcon,
  VedioList,
  FailureViewContainer,
  Heading,
  FailureViewImage,
  RetryButton,
  LoaderContainer,
  Button,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videosDataList: [],
    searchInput: '',
    showBanner: true,
  }

  componentDidMount() {
    const {updateCategory} = this.context
    updateCategory('home')

    this.fetchData()
  }

  onWindowScroll = () => {
    window.scrollTo(0, 0)
  }

  onSuccessDataFetch = videosData => {
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

    this.setState(
      {
        videosDataList: formattedvediosDataList,
        apiStatus: apiStatusConstants.success,
      },
      this.onWindowScroll(),
    )
  }

  fetchData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const option = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const vedioApiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`

    const response = await fetch(vedioApiUrl, option)
    const data = await response.json()

    if (response.ok) {
      this.onSuccessDataFetch(data.videos)
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSearch = () => {
    this.fetchData()
  }

  onPressEnterSearch = event => {
    if (event.key === 'Enter') {
      this.fetchData()
    }
  }

  onClickBannerCloseIcon = () => {
    this.setState({showBanner: false})
  }

  onRenderBannerContainer = () => {
    const {showBanner} = this.state

    if (showBanner) {
      return (
        <BannerContainer data-testid="banner">
          <LogoContainer>
            <TitleImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="nxt watch logo"
            />

            <button
              type="button"
              data-testid="close"
              onClick={this.onClickBannerCloseIcon}
            >
              <CloseIcon />
            </button>
          </LogoContainer>
          <SubHeading>Buy Nxt Watch Premium prepaid plans with UPI</SubHeading>
          <GetNowButton>GET IT NOW</GetNowButton>
        </BannerContainer>
      )
    }

    return null
  }

  onRenderSearchContainer = darkTheme => {
    const {searchInput} = this.state
    return (
      <SearchContainer darkTheme={darkTheme}>
        <Input
          type="search"
          placeholder="Search"
          onChange={this.onChangeSearchInput}
          onKeyDown={this.onPressEnterSearch}
          value={searchInput}
          darkTheme={darkTheme}
        />
        <Button
          type="button"
          data-testid="searchButton"
          onClick={this.onClickSearch}
        >
          <SearchIcon darkTheme={darkTheme} />
        </Button>
      </SearchContainer>
    )
  }

  onRenderVedioList = () => {
    const {videosDataList} = this.state

    return (
      <VedioList>
        {videosDataList.map(each => (
          <VedioItems key={each.id} vedioDetails={each} />
        ))}
      </VedioList>
    )
  }

  onRenderVedioContainer = darkTheme => {
    const {videosDataList} = this.state
    const isDataEmpty = videosDataList.length === 0

    return (
      <VedioContainer>
        {this.onRenderSearchContainer(darkTheme)}
        {isDataEmpty
          ? this.onRenderNoSearchedDataView(darkTheme)
          : this.onRenderVedioList()}
      </VedioContainer>
    )
  }

  onRenderLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="green" height="100" width="100" />
    </LoaderContainer>
  )

  onRenderNoSearchedDataView = darkTheme => (
    <FailureViewContainer darkTheme={darkTheme}>
      <FailureViewImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
      />
      <Heading darkTheme={darkTheme}>No Search results found</Heading>
      <Text darkTheme={darkTheme}>
        Try different key words or remove search filter
      </Text>
      <RetryButton type="button" onClick={this.fetchData} darkTheme={darkTheme}>
        Retry
      </RetryButton>
    </FailureViewContainer>
  )

  onRenderApiView = darkTheme => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.onRenderLoader()
      case apiStatusConstants.success:
        return this.onRenderVedioContainer(darkTheme)
      case apiStatusConstants.failure:
        return <FailureApiView fetchData={this.fetchData} />
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
              <Container darkTheme={isDarkTheme} data-testid="home">
                <LeftContainer darkTheme={isDarkTheme}>
                  <CategoryFilterSection />
                </LeftContainer>
                <RightContainer darkTheme={isDarkTheme}>
                  {this.onRenderBannerContainer(isDarkTheme)}
                  {this.onRenderApiView(isDarkTheme)}
                </RightContainer>
              </Container>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

Home.contextType = ThemeContext

export default Home
