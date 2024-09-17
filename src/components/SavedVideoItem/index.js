import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import {Dot, ViewsInfo, Name} from '../VedioItems/styledComponents'
import {PublishedDate} from '../VideoItemDetails/styledComponents'
import {
  SavedVideoListItem,
  ThumbnailImage,
  VideoInfo,
  Title,
  ViewsInfoContainer,
} from './styledComponents'

const SavedVideoItem = props => {
  const {videoDetails} = props
  const {
    thumbnailUrl,
    channel,
    id,
    title,
    viewCount,
    publishedAt,
  } = videoDetails
  const {name} = channel

  const onGetDay = (date, isDarkTheme) => {
    const day = formatDistanceToNow(new Date(date))
    return (
      <PublishedDate darkTheme={isDarkTheme}>
        <Dot darkTheme={isDarkTheme} />
        {day} ago
      </PublishedDate>
    )
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <Link to={`/videos/${id}`}>
            <SavedVideoListItem>
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />

              <VideoInfo>
                <Title darkTheme={isDarkTheme}>{title}</Title>
                <ViewsInfoContainer>
                  <Name darkTheme={isDarkTheme}>{name}</Name>
                  <ViewsInfo>
                    <Name darkTheme={isDarkTheme}>{viewCount} views</Name>
                    {onGetDay(publishedAt, isDarkTheme)}
                  </ViewsInfo>
                </ViewsInfoContainer>
              </VideoInfo>
            </SavedVideoListItem>
          </Link>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default SavedVideoItem
