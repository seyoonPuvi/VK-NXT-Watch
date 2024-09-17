import styled from 'styled-components'
import {FaFire} from 'react-icons/fa'

export const Container = styled.div`
  display: flex;
  background-color: ${props => (props.darkTheme ? '#0f0f0f' : '#f9f9f9')};
  min-height: 100vh;
`

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const SectionContainer = styled.div`
  background-color: ${props => (props.darkTheme ? '#181818' : '#e2e8f0')};
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
  font-size: 4rem;
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
