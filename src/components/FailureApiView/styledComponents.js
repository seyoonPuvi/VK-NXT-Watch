import styled from 'styled-components'

export const FailureViewContainer = styled.div`
  height: 50rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 1.5rem;
  width: 100%;
  padding: 2rem 3rem;
`

export const FailureViewImage = styled.img`
  height: 30rem;
  object-fit: cover;
  object-position: center;
  @media (max-width: 700px) {
    height: 20rem;
  }
`

export const RetryButton = styled.button`
  padding: 1rem 2rem;
  color: white;
  background-color: #4f46e5;
  border: none;
  outline: none;
  border-radius: 5px;
`
export const Heading = styled.h1`
  color: ${props => (props.darkTheme ? 'white' : '#00306e')};
  font-weight: bold;
  font-size: 2rem;
  text-align: center;

  @media (min-width: 700px) {
    font-size: 3rem;
  }
`
export const Text = styled.p`
  color: ${props => (props.darkTheme ? 'white' : '#00306e')};
  font-size: 1.8rem;
  text-align: center;
  @media (min-width: 700px) {
    font-size: 2rem;
  }

  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
`
