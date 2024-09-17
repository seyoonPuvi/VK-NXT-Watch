import ThemeContext from '../../context/ThemeContext'

import {
  GamingListItem,
  ThumbnailImage,
  Title,
  ViewCount,
  GameLink,
} from './styledComponents'

const GamingItemDetails = props => {
  const {gamingDetails} = props
  const {id, title, thumbnailUrl, viewCount} = gamingDetails

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <GameLink to={`/videos/${id}`}>
            <GamingListItem>
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <Title darkTheme={isDarkTheme}>{title}</Title>
              <ViewCount darkTheme={isDarkTheme}>
                {viewCount} Watching Worldwide
              </ViewCount>
            </GamingListItem>
          </GameLink>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default GamingItemDetails
