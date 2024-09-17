import ThemeContext from '../../context/ThemeContext'
import {
  FailureViewContainer,
  FailureViewImage,
  Heading,
  Text,
  RetryButton,
} from './styledComponents'

const FailureApiView = props => {
  const {fetchData} = props
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        const imageUrl = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        return (
          <FailureViewContainer darkTheme={isDarkTheme}>
            <FailureViewImage src={imageUrl} alt="failure view" />
            <Heading darkTheme={isDarkTheme}>
              Oops! Something Went Wrong
            </Heading>
            <Text darkTheme={isDarkTheme}>
              We are having some trouble to complete your request.Please try
              again.
            </Text>
            <RetryButton
              type="button"
              onClick={() => fetchData()}
              darkTheme={isDarkTheme}
            >
              Retry
            </RetryButton>
          </FailureViewContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default FailureApiView
