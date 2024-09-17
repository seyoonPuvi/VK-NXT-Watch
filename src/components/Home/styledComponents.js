import styled from 'styled-components'
import {IoMdClose} from 'react-icons/io'
import {FaSearch} from 'react-icons/fa'
import {LogoutButton} from '../Navbar/styledComponents'

export const Container = styled.div`
  min-height: 100vh;
  background-color: ${props => (props.darkTheme ? '#181818' : '#f9f9f9')};
  display: flex;
`

export const LeftContainer = styled.div`
  max-width: 230px;
  width: 30%;
  color: white;
  background-color: ${props => (props.darkTheme ? '#212121' : 'white')};
  flex-shrink: 0;
  padding: 2rem 0;
  min-height: 100vh;

  @media (max-width: 700px) {
    display: none;
  }
`

export const RightContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${props => (props.darkTheme ? '#181818' : '#f9f9f9')};
`

export const BannerContainer = styled.div`
  height: 250px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem 2rem;
  row-gap: 2rem;

  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  background-position: center;
`

export const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const TitleImage = styled.img`
  height: 6rem;
  width: 12rem;
  object-fit: contain;
  object-position: center;
`
export const CloseIcon = styled(IoMdClose)`
  font-size: 3rem;
  color: black;
`

export const SubHeading = styled.p`
  width: 20%;
  font-size: 2rem;
  font-weight: bold;
  color: #424242;
  font-family: Roboto;

  @media (max-width: 1100px) {
    width: 80%;
  }
`

export const GetNowButton = styled(LogoutButton)`
  border: 1px solid #424242;
  color: #424242;
  width: 180px;
  padding: 1rem 2rem;
  font-weight: bold;
`
// vedioContainer section

export const VedioContainer = styled.div`
  color: white;
  min-height: 100vh;
  padding: 3rem 3rem;
  scroll-y: visible;

  @media (max-width: 500px) {
    padding: 3rem 1rem;
  }
`

export const SearchContainer = styled.div`
  width: 50%;
  background-color: ${props => (props.darkTheme ? '#181818' : '#f9f9f9')};
  display: flex;
  align-items: center;

  border: 1px solid #606060;

  @media (min-width: 500px) and (max-width: 1100px) {
    width: 90%;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`

export const Input = styled.input`
  background-color: ${props => (props.darkTheme ? '#181818' : '#f9f9f9')};
  flex-grow: 1;
  border: none;
  outline: none;
  font-size: 2rem;
  color: ${props => (props.darkTheme ? 'white' : 'black')};
  padding: 0 2rem;

  @media (max-width: 500px) {
    padding-left: 1rem;
    padding-right: 0;
  }
`

export const SearchIcon = styled(FaSearch)`
  font-size: 3rem;
  padding: 0.5rem;
`
export const Button = styled.button`
  outline: none;
  border-left: 1px solid #606060;
  width: 60px;
  color: black;

  background-color: ${props => (props.darkTheme ? '#606060' : '#cccccc')};
  transition: all 0.35s ease-out;
  &:hover {
    background-color: black;
    color: white;
  }
`

// video list container

export const VedioList = styled.ul`
  padding-inline-start: 0;
  display: flex;
  gap: 2rem 2rem;
  flex-wrap: wrap;
`

// Failure data styling

export const FailureViewContainer = styled.div`
  height: 50rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 1.5rem;
`
export const Heading = styled.h1`
  color: ${props => (props.darkTheme ? 'white' : 'black')};
  font-weight: bold;
  font-size: 2rem;
`

export const FailureViewImage = styled.img`
  height: 30rem;
  object-fit: cover;
  object-position: center;
`

export const RetryButton = styled.button`
  padding: 1rem 2rem;
  color: white;
  background-color: #4f46e5;
  border: none;
  outline: none;
  border-radius: 5px;
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30rem;
  width: 100%;
`
