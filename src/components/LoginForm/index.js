import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {
  Container,
  MainContainer,
  FormContainer,
  Input,
  InputContainer,
  Label,
  LoginButton,
  CheckboxContainer,
  Checkbox,
  TitleImage,
  ErrorText,
} from './styledComponents'

import ThemeContext from '../../context/ThemeContext'

class LoginForm extends Component {
  state = {
    usernameValue: '',
    passwordValue: '',
    showError: false,
    errorMsg: '',
    showPassword: false,
  }

  onChangeUsername = event => {
    this.setState({usernameValue: event.target.value})
  }

  onChangePassword = event => {
    this.setState({passwordValue: event.target.value})
  }

  onLoginSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitButton = async event => {
    event.preventDefault()
    const {usernameValue, passwordValue} = this.state
    const userDetails = {
      username: usernameValue,
      password: passwordValue,
    }

    const option = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const loginApiUrl = 'https://apis.ccbp.in/login'

    const response = await fetch(loginApiUrl, option)
    const data = await response.json()

    if (response.ok) {
      const jwtToken = data.jwt_token
      this.onLoginSuccess(jwtToken)
    } else {
      this.setState({errorMsg: data.error_msg, showError: true})
    }
  }

  onChangeShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onRenderUsernameField = darkTheme => {
    const {usernameValue} = this.state

    return (
      <InputContainer>
        <Label htmlFor="username" darkTheme={darkTheme}>
          USERNAME
        </Label>
        <Input
          id="username"
          onChange={this.onChangeUsername}
          value={usernameValue}
          darkTheme={darkTheme}
        />
      </InputContainer>
    )
  }

  onRenderPasswordField = darkTheme => {
    const {passwordValue, showPassword} = this.state

    return (
      <InputContainer>
        <Label htmlFor="password" darkTheme={darkTheme}>
          PASSWORD
        </Label>
        <Input
          type={showPassword ? 'text' : 'password'}
          id="password"
          onChange={this.onChangePassword}
          value={passwordValue}
          darkTheme={darkTheme}
        />
      </InputContainer>
    )
  }

  onRenderCheckBoxField = darkTheme => {
    const {showPassword} = this.state

    return (
      <CheckboxContainer>
        <Checkbox
          type="Checkbox"
          checked={showPassword}
          id="checkbox"
          onChange={this.onChangeShowPassword}
          darkTheme={darkTheme}
        />
        <Label htmlFor="checkbox" darkTheme={darkTheme}>
          Show Password
        </Label>
      </CheckboxContainer>
    )
  }

  render() {
    const {errorMsg, showError} = this.state
    const token = Cookies.get('jwt_token')

    if (token !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const themeImageUrl = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          return (
            <Container theme={isDarkTheme ? 'black' : 'white'}>
              <MainContainer>
                <TitleImage src={themeImageUrl} alt="website logo" />
                <FormContainer onSubmit={this.onSubmitButton}>
                  {this.onRenderUsernameField(isDarkTheme)}
                  {this.onRenderPasswordField(isDarkTheme)}
                  {this.onRenderCheckBoxField(isDarkTheme)}
                  <LoginButton type="submit">Login</LoginButton>
                  {showError && <ErrorText>*{errorMsg}</ErrorText>}
                </FormContainer>
              </MainContainer>
            </Container>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default LoginForm
