import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import FailureApiView from '../FailureApiView'
import ThemeContext from '../../context/ThemeContext'
import SavedContext from '../../context/SavedContext'
import Navbar from '../Navbar'
import CategoryFilterSection from '../CategoryFilterSection'
import {LoaderContainer} from '../Home/styledComponents'
import {
  Dot,
  ViewsInfo,
  Title,
  ProfileLogo,
} from '../VedioItems/styledComponents'

import {
  Container,
  VideoPlayerContainer,
  VideoDetailsContainer,
  LeftContainer,
  List,
  ListContainer,
  LikeIcon,
  DisLikeIcon,
  SaveIcon,
  Description,
  ChannelInfoContainer,
  ChannelName,
  SubTitle,
  VideoInfoContainer,
  ViewsAndLikeContainer,
  PublishedDate,
  ResponsiveReactPlayer,
  Name,
  NameText,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {
    isLiked: false,
    isDisLiked: false,
    apiStatus: apiStatusConstants.initial,
    videoDetails: {},
  }

  componentDidMount() {
    this.fetchVideoDetailsData()
  }

  onWindowScroll = () => {
    window.scrollTo(0, 0)
  }

  getIsSavedData = () => {
    const {savedVideos} = this.context
    const {videoDetails} = this.state

    if (savedVideos.length !== 0) {
      const videoData = savedVideos.find(each => each.id === videoDetails.id)
      if (videoData) {
        this.setState({videoDetails: {...videoData}})
      } else {
        this.setState(prevState => ({
          ...prevState.videoDetails,
        }))
      }
    }
  }

  onSuccessDataFetch = data => {
    const formattedData = {
      id: data.id,
      title: data.title,
      thumbnailUrl: data.thumbnail_url,
      videoUrl: data.video_url,
      channel: {
        name: data.channel.name,
        profileImageUrl: data.channel.profile_image_url,
        subscriberCount: data.channel.subscriber_count,
      },
      viewCount: data.view_count,
      publishedAt: data.published_at,
      description: data.description,
    }
    this.setState(
      {
        videoDetails: formattedData,
        apiStatus: apiStatusConstants.success,
      },
      this.getIsSavedData,
      this.onWindowScroll(),
    )
  }

  fetchVideoDetailsData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params

    const option = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const apiUrl = `https://apis.ccbp.in/videos/${id}`

    const response = await fetch(apiUrl, option)
    const data = await response.json()

    if (response.ok) {
      this.onSuccessDataFetch(data.video_details)
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onClickLike = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisLiked: false,
    }))
  }

  onClickDisLike = () => {
    this.setState(prevState => ({
      isLiked: false,
      isDisLiked: !prevState.isDisLiked,
    }))
  }

  onClickSave = () => {
    const {videoDetails} = this.state
    const {addVideos} = this.context

    this.setState(prevState => ({
      videoDetails: {
        ...prevState.videoDetails,
        isSaved: !prevState.videoDetails.isSaved,
      },
    }))
    addVideos(videoDetails)
  }

  onRenderVideoPlayer = videoUrl => (
    <VideoPlayerContainer>
      <ResponsiveReactPlayer
        url={videoUrl}
        controls
        height="100%"
        width="100%"
      />
    </VideoPlayerContainer>
  )

  onGetDay = date => {
    const day = formatDistanceToNow(new Date(date))
    return (
      <PublishedDate>
        <Dot />
        {day} ago
      </PublishedDate>
    )
  }

  onRenderLikesContainer = isDarkTheme => {
    const {isDisLiked, isLiked, videoDetails} = this.state

    return (
      <ListContainer>
        <List>
          <Name
            darkTheme={isDarkTheme}
            active={isLiked}
            onClick={this.onClickLike}
          >
            <LikeIcon darkTheme={isDarkTheme} active={isLiked} /> Like
          </Name>
        </List>
        <List>
          <Name
            darkTheme={isDarkTheme}
            active={isDisLiked}
            onClick={this.onClickDisLike}
          >
            <DisLikeIcon darkTheme={isDarkTheme} active={isDisLiked} /> Dislike
          </Name>
        </List>
        <List>
          <Name
            darkTheme={isDarkTheme}
            active={videoDetails.isSaved}
            onClick={this.onClickSave}
          >
            <SaveIcon darkTheme={isDarkTheme} active={videoDetails.isSaved} />{' '}
            {videoDetails.isSaved ? 'Saved' : 'Save'}
          </Name>
        </List>
      </ListContainer>
    )
  }

  onRenderVideoInfoContainer = isDarkTheme => {
    const {videoDetails} = this.state
    const {title, viewCount, publishedAt, channel, description} = videoDetails
    const {name, subscriberCount, profileImageUrl} = channel

    return (
      <VideoInfoContainer>
        <Title darkTheme={isDarkTheme}>{title}</Title>
        <ViewsAndLikeContainer>
          <ViewsInfo>
            <NameText darkTheme={isDarkTheme}>{viewCount} views</NameText>
            {this.onGetDay(publishedAt)}
          </ViewsInfo>
          {this.onRenderLikesContainer(isDarkTheme)}
        </ViewsAndLikeContainer>
        <ChannelInfoContainer>
          <ProfileLogo src={profileImageUrl} alt="channel logo" />
          <ChannelName>
            <Title darkTheme={isDarkTheme}>{name}</Title>
            <SubTitle darkTheme={isDarkTheme}>
              {subscriberCount} subscribers
            </SubTitle>
            <Description darkTheme={isDarkTheme}>{description}</Description>
          </ChannelName>
        </ChannelInfoContainer>
      </VideoInfoContainer>
    )
  }

  onRenderVideoDetails = isDarkTheme => {
    const {videoDetails} = this.state

    return (
      <VideoDetailsContainer darkTheme={isDarkTheme}>
        {this.onRenderVideoPlayer(videoDetails.videoUrl)}
        {this.onRenderVideoInfoContainer(isDarkTheme)}
      </VideoDetailsContainer>
    )
  }

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
        return this.onRenderVideoDetails(isDarkTheme)

      case apiStatusConstants.failure:
        return <FailureApiView fetchData={this.fetchVideoDetailsData} />
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
              <Container darkTheme={isDarkTheme} data-testid="videoItemDetails">
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

VideoItemDetails.contextType = SavedContext
export default VideoItemDetails
