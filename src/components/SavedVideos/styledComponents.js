import styled from 'styled-components'
import {RiPlayListAddFill} from 'react-icons/ri'

export const SavedIcon = styled(RiPlayListAddFill)`
  font-size: 2rem;
  color: red;
`

export const NoVideoContainer = styled.div`
  height: 50rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 2rem;

  @media (max-width: 500px) {
    width: 80%;
    margin: auto;
  }
`

export const Image = styled.img`
  height: 30rem;
  width: 100%;
  object-fit: contain;
  object-position: center;

  @media (max-width: 500px) {
    height: 20rem;
  }
`

export const Heading = styled.h1`
  color: ${props => (props.darkTheme ? 'white' : '#00306e')};
  font-size: 2rem;
  text-align: center;
`

export const Description = styled.p`
  color: ${props => (props.darkTheme ? 'white' : '#1e293b')};
  font-size: 1.8rem;
  text-align: center;

  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
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
