import styled from 'styled-components'

export const SectionVideoListItem = styled.li`
  list-style-type: none;
  display: flex;
  column-gap: 2rem;
  @media (max-width: 576px) {
    flex-direction: column;
    row-gap: 2rem;
  }
`
export const ImageContainer = styled.div``

export const ThumbnailImage = styled.img`
  width: 300px;
  object-fit: cover;
  object-position: center;
  @media (min-width: 576px) and (max-width: 800px) {
    width: 200px;
  }

  @media (max-width: 576px) {
    width: 100%;
  }
`

export const VideoInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`

export const Title = styled.p`
  color: ${props => (props.darkTheme ? 'white' : '#1e293b')};
  font-weight: bold;
  font-size: 2rem;

  @media (min-width: 576px) and (max-width: 800px) {
    font-size: 1.6rem;
  }

  @media (max-width: 576px) {
    font-size: 1.5rem;
  }
`

export const ViewsInfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  row-gap: 1.5rem;

  @media (max-width: 576px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 1.5rem;
  }
`
