import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const VideoLink = styled(Link)`
  width: 250px;
  flex-grow: 1;
  max-width: 500px;
`

export const VedioListItem = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  padding: 2rem 0rem;
  height: 100%;
  width: 100%;
`

export const ThumbnailImage = styled.img`
  height: auto;
  width: 100%;
  object-fit: cover;
  object-position: center;
`

export const VedioInfoContainer = styled.div`
  display: flex;
  column-gap: 2rem;
`

export const ProfileLogo = styled.img`
  height: 3rem;
  width: 3rem;
  border-radius: 45%;
`

export const VedioInfoContent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`

export const Title = styled.p`
  color: ${props => (props.darkTheme ? '#cccccc' : '#475569')};
  font-size: 1.4rem;
  font-weight: bold;
`
export const ViewsInfo = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1.5rem;
`

export const Name = styled.p`
  color: #475569;
  font-size: 1.2rem;
  font-weight: 500;
`
export const PublishedDay = styled(Name)`
  display: flex;
  align-items: center;
  column-gap: 5px;
`
export const Dot = styled.span`
  height: 0.5rem;
  width: 0.5rem;
  border-radius: 45%;
  background-color: #475569;
  font-weight: 500;
`
