import styled from 'styled-components'
import {IoMdHome} from 'react-icons/io'
import {FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {RiPlayListAddFill} from 'react-icons/ri'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 1rem;
`

export const CategoryList = styled.ul`
  padding-inline-start: 0;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
`

export const ListItem = styled.li`
  list-style-type: none;
  display: flex;
  column-gap: 2rem;
  align-items: center;
  width: 100%;

  background-color: ${props => {
    if (props.activeFilter && props.darkTheme) {
      return '#424242'
    }
    if (props.activeFilter && props.darkTheme !== true) {
      return '#94a3b8'
    }

    return null
  }};
  padding: 1rem 2rem;
`

export const HomeIcon = styled(IoMdHome)`
    font-size:2rem;
     color:${props => {
       if (props.activeFilter) {
         return '#ff0b37'
       }
       if (props.darkTheme) {
         return 'white'
       }
       return 'grey'
     }}};

`

export const TrendIcon = styled(FaFire)`
    font-size:2rem;
     color:${props => {
       if (props.activeFilter) {
         return '#ff0b37'
       }
       if (props.darkTheme) {
         return 'white'
       }
       return 'grey'
     }}};

`
export const GamingIcon = styled(SiYoutubegaming)`
    font-size:2rem;
     color:${props => {
       if (props.activeFilter) {
         return '#ff0b37'
       }
       if (props.darkTheme) {
         return 'white'
       }
       return 'grey'
     }}};

`

export const SavedIcon = styled(RiPlayListAddFill)`
    font-size:2rem;
    color:${props => {
      if (props.activeFilter) {
        return '#ff0b37'
      }
      if (props.darkTheme) {
        return 'white'
      }
      return 'grey'
    }}};

`

export const CategoryText = styled.p`
  color: ${props => (props.darkTheme ? 'white' : 'black')};
  font-size: 1.6rem;
  font-weight: 400;
`

// contact us container

export const ContactUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  padding-left: 2rem;
`

export const Heading = styled.p`
  color: ${props => (props.darkTheme ? 'white' : 'black')};
  font-weight: bold;
  font-size: 2rem;
`

export const SocialMediaList = styled.ul`
  padding-inline-start: 0;
  display: flex;
  column-gap: 1rem;
  align-items: center;
`

export const SocialMedialListItem = styled.li`
  list-style-type: none;
  height: 3rem;
  width: 3rem;
  border-radius: 45%;
`
export const ImageItem = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`

export const Text = styled.p`
  color: ${props => (props.darkTheme ? 'white' : 'black')};
  font-size: 1.4rem;
`
