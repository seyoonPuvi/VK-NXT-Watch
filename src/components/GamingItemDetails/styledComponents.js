import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const GameLink = styled(Link)`
  width: 200px;
  flex-grow: 1;
  @media (max-width: 500px) {
    width: 150px;
  }
`
export const GamingListItem = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`

export const ThumbnailImage = styled.img`
  width: 100%;
  border-radius: 1rem;
`
export const Title = styled.p`
  color: ${props => (props.darkTheme ? 'white' : 'red')};
  font-size: 1.8rem;
  letter-spacing: 2px;

  @media (max-width: 500px) {
    font-size: 1.4rem;
  }
`

export const ViewCount = styled.p`
  color: ${props => (props.darkTheme ? '#475569;' : 'green')};
  font-size: 1.4rem;
  @media (max-width: 500px) {
    font-size: 1.2rem;
  }
`
