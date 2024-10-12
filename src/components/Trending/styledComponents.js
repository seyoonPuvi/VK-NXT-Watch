import styled from 'styled-components'
import {FaFire} from 'react-icons/fa'

export const Container = styled.div`
  min-height: 100vh;
  background-color: ${props => (props.darkTheme ? '#181818' : '#f9f9f9')};
  display: flex;
  overflow: hidden; /* Prevent scrolling of the main container */
`

export const RightContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  width: calc(100% - 230px); /* Adjust width to avoid overlap */
  margin-left: 230px; /* Offset the left container */
  background-color: ${props => (props.darkTheme ? '#181818' : '#f9f9f9')};
  overflow-y: auto; /* Allow scrolling only on the right container */
  margin-top: 7rem;

  @media (max-width: 700px) {
    width: 100%;
    margin-left: 0;
  }
`

export const SectionContainer = styled.div`
  background-color: ${props => (props.darkTheme ? '#212121' : '#e2e8f0')};
  padding: 2rem 2rem;
  display: flex;
  column-gap: 1.5rem;
  align-items: center;
`

export const IconContainer = styled.div`
  background-color: ${props => (props.darkTheme ? 'black' : '#cbd5e1')};
  border-radius: 45%;
  height: 5rem;
  width: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const TrendingIcon = styled(FaFire)`
  color: red;
  font-size: 3rem;
`

export const SectionHeading = styled.h1`
  color: ${props => (props.darkTheme ? 'white' : '#1e293b')};
  font-size: 3rem;
  font-weight: bold;
`

export const SectionVideoListContainer = styled.ul`
  padding-inline-start: 0;
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
  padding: 4rem 4rem;

  @media (max-width: 500px) {
    padding: 2rem 1rem;
  }
`
