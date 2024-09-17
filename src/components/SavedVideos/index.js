import {Component} from 'react'
import Navbar from '../Navbar'
import CategoryFilterSection from '../CategoryFilterSection'
import ThemeContext from '../../context/ThemeContext'
import SavedContext from '../../context/SavedContext'
import SavedVideoItem from '../SavedVideoItem'
import {LeftContainer} from '../VideoItemDetails/styledComponents'

import {
  Container,
  SectionContainer,
  IconContainer,
  SectionHeading,
  RightContainer,
} from '../Trending/styledComponents'

import {
  SavedIcon,
  NoVideoContainer,
  Image,
  Heading,
  Description,
  SectionVideoListContainer,
} from './styledComponents'

class SavedVideos extends Component {
  componentDidMount() {
    const {updateCategory} = this.context
    updateCategory('saved')
  }

  onRenderNoSavedVideo = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <NoVideoContainer>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
            />
            <Heading darkTheme={isDarkTheme}>No saved videos found</Heading>
            <Description darkTheme={isDarkTheme}>
              You can save your videos while watching them
            </Description>
          </NoVideoContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  onRenderSavedVideo = () => (
    <SavedContext.Consumer>
      {value => {
        const {savedVideos} = value

        if (savedVideos.length === 0) {
          return this.onRenderNoSavedVideo()
        }

        return (
          <SectionVideoListContainer>
            {savedVideos.map(each => (
              <SavedVideoItem videoDetails={each} key={each.id} />
            ))}
          </SectionVideoListContainer>
        )
      }}
    </SavedContext.Consumer>
  )

  render() {
    const {isDarkTheme} = this.context

    return (
      <>
        <Navbar />
        <Container darkTheme={isDarkTheme} data-testid="savedVideos">
          <LeftContainer darkTheme={isDarkTheme}>
            <CategoryFilterSection />
          </LeftContainer>
          <RightContainer darkTheme={isDarkTheme}>
            <SectionContainer darkTheme={isDarkTheme} data-testid="banner">
              <IconContainer darkTheme={isDarkTheme}>
                <SavedIcon />
              </IconContainer>
              <SectionHeading darkTheme={isDarkTheme}>
                Saved Videos
              </SectionHeading>
            </SectionContainer>
            {this.onRenderSavedVideo()}
          </RightContainer>
        </Container>
      </>
    )
  }
}

SavedVideos.contextType = ThemeContext

export default SavedVideos
