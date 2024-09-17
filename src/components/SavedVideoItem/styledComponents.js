import styled from 'styled-components'

export const SavedVideoListItem = styled.li`
  list-style-type: none;
  display: flex;
  column-gap: 2rem;
  @media (max-width: 576px) {
    flex-direction: column;
    row-gap: 2rem;
  }
`

export const ThumbnailImage = styled.img`
  width: 350px;
  height: 200px;
  flex-shrink: 0;

  @media (min-width: 576px) and (max-width: 900px) {
    width: 250px;
    height: 120px;
  }

  @media (min-width: 400px) and (max-width: 576px) {
    width: 100%;
    height: 250px;
  }

  @media (max-width: 400px) {
    width: 100%;
    height: 200px;
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
  font-size: 1.8rem;

  @media (min-width: 700px) and (max-width: 900px) {
    font-size: 1.4rem;
  }

  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
`

export const ViewsInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  @media (max-width: 700px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 1.5rem;
  }
`
