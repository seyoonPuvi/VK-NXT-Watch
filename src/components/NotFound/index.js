import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import CategoryFilterSection from '../CategoryFilterSection'
import {LeftContainer} from '../VideoItemDetails/styledComponents'
import {Container, RightContainer} from '../Trending/styledComponents'
import {
  NoVideoContainer,
  Image,
  Heading,
  Description,
} from '../SavedVideos/styledComponents'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const imageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      return (
        <>
          <Navbar />
          <Container darkTheme={isDarkTheme}>
            <LeftContainer darkTheme={isDarkTheme}>
              <CategoryFilterSection />
            </LeftContainer>
            <RightContainer darkTheme={isDarkTheme}>
              <NoVideoContainer>
                <Image src={imageUrl} alt="not found" />
                <Heading darkTheme={isDarkTheme}>Page Not Found</Heading>
                <Description darkTheme={isDarkTheme}>
                  We are sorry, the page you requested could not be found.
                </Description>
              </NoVideoContainer>
            </RightContainer>
          </Container>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
