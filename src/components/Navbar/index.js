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
  StyledMoonIcon,
  StyledSunIcon,
  ListItem,
  PopUpButton,
  LogoutPopUpContent,
  Heading,
  ButtonContainer,
  CancelButton,
  ConfirmButton,
  LogoutPopUpContainer,
  BottomNavbarContainer,
  BottomNavItems,
  BottomHomeIcon,
  BottomTrendingIcon,
  BottomGamingIcon,
  BottomSavedIcon,
} from './styledComponents'

const Navbar = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme, toggleTheme} = value
        const themeImageUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

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
              <ListItem>
                <ProfileImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
              </ListItem>

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

        const onRenderCategorySelectionNavbar = () => (
          <BottomNavbarContainer darkTheme={isDarkTheme}>
            <Link to="/">
              <BottomNavItems>
                <BottomHomeIcon />
              </BottomNavItems>
            </Link>
            <Link to="/trending">
              <BottomNavItems>
                <BottomTrendingIcon />
              </BottomNavItems>
            </Link>

            <Link to="/gaming">
              <BottomNavItems>
                <BottomGamingIcon />
              </BottomNavItems>
            </Link>
            <Link to="/saved-videos">
              <BottomNavItems>
                <BottomSavedIcon />
              </BottomNavItems>
            </Link>
          </BottomNavbarContainer>
        )

        return (
          <Container darkTheme={isDarkTheme}>
            {onRenderLargeNavbar()}
            {onRenderMobileNavbar()}
            {onRenderCategorySelectionNavbar()}
          </Container>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default withRouter(Navbar)
