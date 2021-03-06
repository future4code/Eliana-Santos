import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import { InputsContainer, SignUpFormContainer } from './styled'
import { useHistory } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import { signUp } from "../../services/user"
import CircularProgress from '@mui/material/CircularProgress'

const SignUpForm = ({ setRightButtonText }) => {
  const history = useHistory()
  const [form, onChange, clear] = useForm({ username: "", email: "", password: ""})
  const [isLoading, setIsLoading] = useState(false)

  const onSubmitForm = (event) => {
    event.preventDefault()
    signUp(form, clear, history, setRightButtonText, setIsLoading)
  }


  return (
    <form onSubmit={onSubmitForm}>
      <SignUpFormContainer>
        <InputsContainer>
          <TextField
            value={form.username}
            name={'username'}
            onChange={onChange}
            label={'Nome'}
            variant={'outlined'}
            fullWidth
            required
            autoFocus
            margin={'normal'}
          />
          <TextField
            value={form.email}
            name={'email'}
            onChange={onChange}
            label={'E-mail'}
            variant={'outlined'}
            type={'email'}
            fullWidth
            required
            margin={'normal'}
          />
          <TextField
            value={form.password}
            name={'password'}
            onChange={onChange}
            label={'Senha'}
            variant={'outlined'}
            type={'password'}
            fullWidth
            required
            margin={'normal'}
            pattern="^.{8,}"
            max={10}
            title="O nome deve ter no mínimo 10 caracteres"
          />
        </InputsContainer>
        <Button
          color={'primary'}
          variant={'contained'}
          type={'submit'}
          fullWidth
        >
          {isLoading ? <CircularProgress color={"inherit"} size={24} /> : <>Fazer Cadastro</>}
        </Button>
      </SignUpFormContainer>
    </form>
  )
}

export default SignUpForm