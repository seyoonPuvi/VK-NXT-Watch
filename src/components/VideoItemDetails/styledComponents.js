import ReactPlayer from 'react-player'
import styled from 'styled-components'
import {BiLike, BiDislike} from 'react-icons/bi'
import {RiPlayListAddFill} from 'react-icons/ri'

export const Container = styled.div`
  min-height: 100vh;
  background-color: ${props => (props.darkTheme ? '#181818' : '#f9f9f9')};
  display: flex;
`

export const LeftContainer = styled.div`
  max-width: 230px;
  width: 30%;
  color: white;
  background-color: ${props => (props.darkTheme ? '#212121' : 'white ')};
  flex-shrink: 0;
  padding: 2rem 0;
  min-height: 100vh;

  @media (max-width: 700px) {
    display: none;
  }
`
export const VideoDetailsContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  padding: 2rem 3rem;
  background-color: ${props => (props.darkTheme ? '#181818' : '#f9f9f9')};

  @media (max-width: 700px) {
    padding: 2rem 1.5rem;
  }
`

export const VideoPlayerContainer = styled.div`
  background-color: ${props => (props.darkTheme ? '#181818' : '#f9f9f9')};
  position: relative;
  padding-top: 45%; /* Aspect Ratio */
  width: 100%; /* Full width */
  height: 0;
  overflow: hidden;

  @media (max-width: 700px) {
    padding-top: 56.25%;
  }
`

export const ResponsiveReactPlayer = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
`

export const VideoInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
`

export const ViewsAndLikeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #cccccc;
  padding-bottom: 3rem;

  @media (max-width: 700px) {
    flex-direction: column;
    justify-content: flex-start;
    row-gap: 1.5rem;
    align-items: flex-start;
  }
`

export const ListContainer = styled.ul`
  padding-inline-start: 0;
  display: flex;
  align-items: center;
  column-gap: 1.5rem;
`

export const List = styled.li`
  display: flex;
  column-gap: 1rem;
  align-items: center;
`

export const Name = styled.button`
  color:${props => {
    if (props.active) {
      return '#2563eb'
    }
    if (props.darkTheme) {
      return '#64748b'
    }
    return '#64748b'
  }}};
  font-size:1.4rem;
  font-weight:bold;

  display:flex;
  align-items:center;
  column-gap:1rem;

`

export const NameText = styled.p`
   color:${props => {
     if (props.active) {
       return '#2563eb'
     }
     if (props.darkTheme) {
       return '#64748b'
     }
     return '#475569'
   }}};
    font-size:1.4rem;
    font-weight:bold;

`

export const LikeIcon = styled(BiLike)`
     color:${props => {
       if (props.active) {
         return '#2563eb'
       }
       return '#64748b'
     }}};
    font-size:2rem;
`

export const DisLikeIcon = styled(BiDislike)`
   color:${props => {
     if (props.active) {
       return '#2563eb'
     }
     return '#64748b'
   }}};
    font-size:2rem;
`

export const SaveIcon = styled(RiPlayListAddFill)`
     color:${props => {
       if (props.active) {
         return '#2563eb'
       }
       return '#64748b'
     }}};
    font-size:2rem;
`
export const ChannelInfoContainer = styled.div`
  display: flex;
  column-gap: 1.5rem;
`

export const ChannelName = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
  row-gap: 1rem;
`

export const SubTitle = styled(NameText)`
  font-size: 1.2rem;
`
export const Description = styled.p`
  font-size: 2rem;
  color: ${props => (props.darkTheme ? '#cccccc' : '#475569')};
  margin-top: 2rem;

  @media (max-width: 500px) {
    font-size: 1.4rem;
  }
`

export const PublishedDate = styled.p`
  display: flex;
  align-items: center;
  column-gap: 5px;
  color: #475569;
  font-size: 1.4rem;
  font-weight: 500;
`
