import Popup from 'reactjs-popup'
import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import ThemeContext from '../../context/ThemeContext'
import {TitleImage} from '../LoginForm/styledComponents'

import {
  Container,
  LargeNavbarContainer,
  MobileNavbarContainer,
  LeftContainer,
  RightContainer,
  ProfileImage,
  LogoutButton,
  LogoutIcon,
  HamburgerMenu,
  StyledMoonIcon,
  StyledSunIcon,
  ListItem,
  PopUpContent,
  FilterContainer,
  PopUpListItem,
  PopUpButton,
  CloseIcon,
  PopUpLink,
  LogoutPopUpContent,
  Heading,
  ButtonContainer,
  CancelButton,
  ConfirmButton,
  LogoutPopUpContainer,
} from './styledComponents'

import {
  CategoryText,
  HomeIcon,
  TrendIcon,
  GamingIcon,
  SavedIcon,
} from '../CategoryFilterSection/styledComponents'

const Navbar = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {
          isDarkTheme,
          toggleTheme,
          activeCategoryFilter,
          updateCategory,
        } = value
        const themeImageUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

        const overlayStyles = {
          backgroundColor: `${isDarkTheme ? '#212121' : 'white '}`,
        }

        const onRenderPopUpMenu = () => (
          <Popup
            modal
            trigger={
              <PopUpButton type="button" aria-label="trigger">
                <HamburgerMenu darkTheme={isDarkTheme} />
              </PopUpButton>
            }
            overlayStyle={overlayStyles}
          >
            {close => (
              <>
                <PopUpContent>
                  <PopUpButton
                    type="button"
                    aria-label="trigger"
                    onClick={() => close()}
                  >
                    <CloseIcon darkTheme={isDarkTheme} />
                  </PopUpButton>

                  <PopUpLink to="/">
                    <PopUpListItem
                      activeFilter={activeCategoryFilter === 'home'}
                      darkTheme={isDarkTheme}
                      onClick={() => updateCategory('home')}
                    >
                      <FilterContainer>
                        <HomeIcon
                          darkTheme={isDarkTheme}
                          activeFilter={activeCategoryFilter === 'home'}
                        />
                        <CategoryText darkTheme={isDarkTheme}>
                          Home
                        </CategoryText>
                      </FilterContainer>
                    </PopUpListItem>
                  </PopUpLink>

                  <PopUpLink to="/trending">
                    <PopUpListItem
                      activeFilter={activeCategoryFilter === 'trending'}
                      darkTheme={isDarkTheme}
                      onClick={() => updateCategory('trending')}
                    >
                      <FilterContainer>
                        <TrendIcon
                          darkTheme={isDarkTheme}
                          activeFilter={activeCategoryFilter === 'trending'}
                        />
                        <CategoryText darkTheme={isDarkTheme}>
                          Trending
                        </CategoryText>
                      </FilterContainer>
                    </PopUpListItem>
                  </PopUpLink>

                  <PopUpLink to="/gaming">
                    <PopUpListItem
                      activeFilter={activeCategoryFilter === 'gaming'}
                      darkTheme={isDarkTheme}
                      onClick={() => updateCategory('gaming')}
                    >
                      <FilterContainer>
                        <GamingIcon
                          darkTheme={isDarkTheme}
                          activeFilter={activeCategoryFilter === 'gaming'}
                        />
                        <CategoryText darkTheme={isDarkTheme}>
                          Gaming
                        </CategoryText>
                      </FilterContainer>
                    </PopUpListItem>
                  </PopUpLink>

                  <PopUpLink to="/saved-videos">
                    <PopUpListItem
                      activeFilter={activeCategoryFilter === 'saved'}
                      darkTheme={isDarkTheme}
                      onClick={() => updateCategory('saved')}
                    >
                      <FilterContainer>
                        <SavedIcon
                          darkTheme={isDarkTheme}
                          activeFilter={activeCategoryFilter === 'saved'}
                        />
                        <CategoryText darkTheme={isDarkTheme}>
                          Saved videos
                        </CategoryText>
                      </FilterContainer>
                    </PopUpListItem>
                  </PopUpLink>
                </PopUpContent>
              </>
            )}
          </Popup>
        )

        const onRenderLogoutPopUp = () => {
          const LogoutoverlayStyles = {
            backdropFilter: 'blur(10px)', // Apply blur effect to the overlay
          }

          return (
            <Popup
              modal
              closeOnDocumentClick={false}
              trigger={
                <LogoutButton type="button" darkTheme={isDarkTheme}>
                  Logout
                </LogoutButton>
              }
              overlayStyle={LogoutoverlayStyles}
            >
              {close => (
                <>
                  <LogoutPopUpContainer>
                    <LogoutPopUpContent>
                      <Heading>Are you sure, you want to logout?</Heading>
                      <ButtonContainer>
                        <CancelButton type="button" onClick={() => close()}>
                          Cancel
                        </CancelButton>
                        <ConfirmButton type="button" onClick={onClickLogout}>
                          Confirm
                        </ConfirmButton>
                      </ButtonContainer>
                    </LogoutPopUpContent>
                  </LogoutPopUpContainer>
                </>
              )}
            </Popup>
          )
        }

        const onRenderMobileLogoutPopUp = () => {
          const LogoutoverlayStyles = {
            backdropFilter: 'blur(10px)', // Apply blur effect to the overlay
          }

          return (
            <Popup
              modal
              closeOnDocumentClick={false}
              trigger={
                <PopUpButton type="button">
                  <LogoutIcon darkTheme={isDarkTheme} />
                </PopUpButton>
              }
              overlayStyle={LogoutoverlayStyles}
            >
              {close => (
                <>
                  <LogoutPopUpContainer>
                    <LogoutPopUpContent>
                      <Heading>Are you sure, you want to logout?</Heading>
                      <ButtonContainer>
                        <CancelButton type="button" onClick={() => close()}>
                          Cancel
                        </CancelButton>
                        <ConfirmButton type="button" onClick={onClickLogout}>
                          Confirm
                        </ConfirmButton>
                      </ButtonContainer>
                    </LogoutPopUpContent>
                  </LogoutPopUpContainer>
                </>
              )}
            </Popup>
          )
        }

        const onRenderMobileNavbar = () => (
          <MobileNavbarContainer>
            <LeftContainer>
              <Link to="/">
                <TitleImage src={themeImageUrl} alt="website logo" />
              </Link>
            </LeftContainer>
            <RightContainer>
              <ListItem>
                {isDarkTheme ? (
                  <button
                    type="button"
                    data-testid="theme"
                    onClick={() => toggleTheme()}
                  >
                    <StyledSunIcon />
                  </button>
                ) : (
                  <button
                    type="button"
                    data-testid="theme"
                    onClick={() => toggleTheme()}
                  >
                    <StyledMoonIcon />
                  </button>
                )}
              </ListItem>
              <ListItem>{onRenderPopUpMenu()}</ListItem>

              <ListItem>{onRenderMobileLogoutPopUp()}</ListItem>
            </RightContainer>
          </MobileNavbarContainer>
        )

        const onRenderLargeNavbar = () => (
          <LargeNavbarContainer>
            <LeftContainer>
              <Link to="/">
                <TitleImage src={themeImageUrl} alt="website logo" />
              </Link>
            </LeftContainer>
            <RightContainer>
              <ListItem>
                {isDarkTheme ? (
                  <button
                    type="button"
                    data-testid="theme"
                    onClick={() => toggleTheme()}
                  >
                    <StyledSunIcon />
                  </button>
                ) : (
                  <button
                    type="button"
                    data-testid="theme"
                    onClick={() => toggleTheme()}
                  >
                    <StyledMoonIcon />
                  </button>
                )}
              </ListItem>
              <ListItem>
                <ProfileImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
              </ListItem>
              <ListItem>{onRenderLogoutPopUp()}</ListItem>
            </RightContainer>
          </LargeNavbarContainer>
        )

        return (
          <Container darkTheme={isDarkTheme}>
            {onRenderLargeNavbar()}
            {onRenderMobileNavbar()}
          </Container>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default withRouter(Navbar)
