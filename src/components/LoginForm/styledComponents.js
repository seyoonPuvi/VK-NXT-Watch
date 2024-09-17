import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  background-color: #212121;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const MainContainer = styled.div`
  background-color: #0f0f0f;
  min-height: 300px;
  min-width: 320px;
  display: flex;
  flex-direction: column;
  row-gap: 3rem;
  padding: 4rem 4rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  @media (min-width: 700px) {
    width: 500px;
  }
`

export const TitleImage = styled.img`
  height: 5rem;
  width: 10rem;
  object-fit: contain;
  margin: auto;
  object-position: center;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`
export const Input = styled.input`
  width: 100%;
  border: 1px solid ${props => (props.darkTheme ? 'white' : 'grey')};
  background-color: ${props => (props.darkTheme ? 'black' : 'white')};
  outline: none;
  border-radius: 5px;
  color: ${props => (props.darkTheme ? 'white' : 'black')};
  padding: 1rem 2rem;
`

export const Label = styled.label`
  color: ${props => (props.darkTheme ? 'white' : 'grey')};
  font-size: 1.5rem;
`

export const CheckboxContainer = styled.div`
  display: flex;
  column-gap: 1rem;
  align-items: center;
`

export const Checkbox = styled.input`
  height: 2rem;
  width: 2rem;
`

export const LoginButton = styled.button`
  border: none;
  outline: none;
  border-radius: 0.5rem;
  padding: 1rem 2rem;
  background-color: #3b82f6;
  color: #ffffff;
  width: 100%;
`

export const ErrorText = styled.p`
  color: red;
  font-size: 15px;
  margin-top: 0;
`
