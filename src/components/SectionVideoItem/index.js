import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'
import {Dot, ViewsInfo, Name} from '../VedioItems/styledComponents'
import {PublishedDate} from '../VideoItemDetails/styledComponents'
import ThemeContext from '../../context/ThemeContext'

import {
  SectionVideoListItem,
  ThumbnailImage,
  VideoInfo,
  Title,
  ViewsInfoContainer,
  ImageContainer,
} from './styledComponents'

const SectionVideoItem = props => {
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
            <SectionVideoListItem>
              <ImageContainer>
                <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              </ImageContainer>

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
            </SectionVideoListItem>
          </Link>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default SectionVideoItem
