import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import {
  Container,
  CategoryList,
  CategoryText,
  ListItem,
  ContactUsContainer,
  SocialMediaList,
  SocialMedialListItem,
  ImageItem,
  Heading,
  Text,
  HomeIcon,
  TrendIcon,
  GamingIcon,
  SavedIcon,
} from './styledComponents'

const CategoryFilterSection = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, activeCategoryFilter, updateCategory} = value

      const onRenderCategoryList = () => (
        <CategoryList>
          <Link to="/">
            <ListItem
              activeFilter={activeCategoryFilter === 'home'}
              darkTheme={isDarkTheme}
              onClick={() => updateCategory('home')}
            >
              <HomeIcon
                darkTheme={isDarkTheme}
                activeFilter={activeCategoryFilter === 'home'}
              />
              <CategoryText darkTheme={isDarkTheme}>Home</CategoryText>
            </ListItem>
          </Link>

          <Link to="/trending">
            <ListItem
              activeFilter={activeCategoryFilter === 'trending'}
              darkTheme={isDarkTheme}
              onClick={() => updateCategory('trending')}
            >
              <TrendIcon
                darkTheme={isDarkTheme}
                activeFilter={activeCategoryFilter === 'trending'}
              />
              <CategoryText darkTheme={isDarkTheme}>Trending</CategoryText>
            </ListItem>
          </Link>

          <Link to="/gaming">
            <ListItem
              activeFilter={activeCategoryFilter === 'gaming'}
              darkTheme={isDarkTheme}
              onClick={() => updateCategory('gaming')}
            >
              <GamingIcon
                darkTheme={isDarkTheme}
                activeFilter={activeCategoryFilter === 'gaming'}
              />
              <CategoryText darkTheme={isDarkTheme}>Gaming</CategoryText>
            </ListItem>
          </Link>

          <Link to="/saved-videos">
            <ListItem
              activeFilter={activeCategoryFilter === 'saved'}
              darkTheme={isDarkTheme}
              onClick={() => updateCategory('saved')}
            >
              <SavedIcon
                darkTheme={isDarkTheme}
                activeFilter={activeCategoryFilter === 'saved'}
              />
              <CategoryText darkTheme={isDarkTheme}>Saved videos</CategoryText>
            </ListItem>
          </Link>
        </CategoryList>
      )

      const onRenderContactUsContainer = () => (
        <ContactUsContainer>
          <Heading darkTheme={isDarkTheme}>CONTACT US</Heading>
          <SocialMediaList>
            <SocialMedialListItem>
              <ImageItem
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
            </SocialMedialListItem>
            <SocialMedialListItem>
              <ImageItem
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
            </SocialMedialListItem>
            <SocialMedialListItem>
              <ImageItem
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </SocialMedialListItem>
          </SocialMediaList>
          <Text darkTheme={isDarkTheme}>
            Enjoy! Now to see your channels and recommendations!
          </Text>
        </ContactUsContainer>
      )

      return (
        <Container>
          {onRenderCategoryList()}
          {onRenderContactUsContainer()}
        </Container>
      )
    }}
  </ThemeContext.Consumer>
)

export default CategoryFilterSection
