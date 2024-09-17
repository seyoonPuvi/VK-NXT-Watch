import {formatDistanceToNow} from 'date-fns'

import ThemeContext from '../../context/ThemeContext'
import {
  VedioListItem,
  ThumbnailImage,
  VedioInfoContainer,
  ProfileLogo,
  VedioInfoContent,
  Title,
  Name,
  ViewsInfo,
  PublishedDay,
  Dot,
  VideoLink,
} from './styledComponents'

const VedioItems = props => {
  const {vedioDetails} = props
  const {
    thumbnailUrl,
    channel,
    id,
    title,
    viewCount,
    publishedAt,
  } = vedioDetails
  const {name, profileImageUrl} = channel

  const publishedDay = () => {
    const day = formatDistanceToNow(new Date(publishedAt))
    return (
      <PublishedDay>
        <Dot />
        {day} ago
      </PublishedDay>
    )
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <VideoLink to={`/videos/${id}`}>
            <VedioListItem>
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <VedioInfoContainer>
                <ProfileLogo src={profileImageUrl} alt="channel logo" />
                <VedioInfoContent>
                  <Title darkTheme={isDarkTheme}>{title}</Title>
                  <Name>{name}</Name>
                  <ViewsInfo>
                    <Name>{viewCount} views</Name>
                    {publishedDay()}
                  </ViewsInfo>
                </VedioInfoContent>
              </VedioInfoContainer>
            </VedioListItem>
          </VideoLink>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default VedioItems
