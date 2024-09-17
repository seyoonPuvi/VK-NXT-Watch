import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {FaMoon} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'
import {BsBrightnessHigh} from 'react-icons/bs'
import {IoMdClose} from 'react-icons/io'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${props => (props.darkTheme ? '#212121' : 'white ')};
  position: relative;
`
export const PopUpLink = styled(Link)`
  width: 100%;
`

export const PopUpContent = styled.ul`
  padding-inline-start: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 2rem;
  height: 100vh;
  width: 100vw;
`

export const PopUpListItem = styled.li`
  list-style-type: none;

  background-color: ${props => {
    if (props.activeFilter && props.darkTheme) {
      return '#424242'
    }
    if (props.activeFilter && props.darkTheme !== true) {
      return '#94a3b8'
    }

    return null
  }};
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 4rem;
`

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 2rem;
  margin: auto;
  width: 135px;
`

export const PopUpButton = styled.button`
  border: none;
  outline: none;
  background: transparent;
`

export const CloseIcon = styled(IoMdClose)`
  position: absolute;
  top: 2rem;
  right: 5rem;
  font-size: 3rem;
  color: ${props => (props.darkTheme ? 'white' : 'black ')}; ;
`

export const LargeNavbarContainer = styled.div`
  width: 100%;
  padding: 1rem 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 700px) {
    display: none;
  }
`

export const MobileNavbarContainer = styled.div`
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 700px) {
    display: none;
  }
`

export const LeftContainer = styled.div`
  text-align: center;
`

export const RightContainer = styled.ul`
  padding-inline-start: 0;
  display: flex;
  column-gap: 1.5rem;
  align-items: center;
  flex-basis: 20%;

  @media (min-width: 700px) {
    column-gap: 2.5rem;
  }
`
export const ListItem = styled.li`
  list-style-type: none;
`
export const StyledSunIcon = styled(BsBrightnessHigh)`
  color: white;
  font-size: 30px;

  &:hover {
    color: #f39c12;
    transform: scale(1.2);
    transition: transform 0.3s ease, color 0.3s ease;
  }
`

export const StyledMoonIcon = styled(FaMoon)`
  color: black;
  font-size: 24px;

  &:hover {
    color: #f39c12;
    transform: scale(1.2);
    transition: transform 0.3s ease, color 0.3s ease;
  }
`

export const HamburgerMenu = styled(GiHamburgerMenu)`
  color: ${props => (props.darkTheme ? 'white' : 'black')};
  font-size: 24px;

  &:hover {
    color: #f39c12;
    transform: scale(1.2);
    transition: transform 0.3s ease, color 0.3s ease;
  }
`

export const ProfileImage = styled.img`
  height: 3rem;
  width: 3rem;
  object-fit: contain;
  object-position: center;
`

export const LogoutIcon = styled(FiLogOut)`
  color: ${props => (props.darkTheme ? 'white' : 'black')};
  font-size: 24px;

  &:hover {
    color: #f39c12;
    transform: scale(1.2);
    transition: transform 0.3s ease, color 0.3s ease;
  }
`

export const LogoutButton = styled.button`
  border: none;
  outline: none;
  padding: 1rem 2rem;
  border-radius: 5px;
  background-color: ${props => (props.darkTheme ? 'black' : 'white')};
  border: 1px solid ${props => (props.darkTheme ? 'white' : '#3b82f6')};
  color: ${props => (props.darkTheme ? 'white' : '#3b82f6')};
  width: 100px;
  transition: all 0.5s ease-out;

  &:hover {
    cursor: pointer;
    background-color: ${props => (props.darkTheme ? 'white' : '#3b82f6')};
    border: 1px solid white;
    color: ${props => (props.darkTheme ? 'black' : 'white')};
    transform: scale(1.1);
  }
`

// logoutPopup menu

export const LogoutPopUpContainer = styled.div``

export const LogoutPopUpContent = styled.div`
  background-color: #212121;
  padding: 2rem 4rem;
  border-radius: 1.2rem;
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
  align-items: center;
  justify-content: center;
  height: 15rem;

  @media (max-width: 500px) {
    padding: 2rem 1rem;
  }
`

export const Heading = styled.p`
  color: white;
  font-size: 2rem;
  text-align: center;
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1.5rem;
`

export const CancelButton = styled.button`
  padding: 1rem 2rem;
  border: 1px solid darkblue;
  background-color: white;
  color: darkblue;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  outline: none;

  transition: all 0.3s ease-out;

  &:hover {
    background-color: darkblue;
    border: 1px solid white;
    color: white;
  }
`

export const ConfirmButton = styled(CancelButton)`
  color: white;
  background-color: darkblue;

  &:hover {
    background-color: white;
    color: darkblue;
  }
`
