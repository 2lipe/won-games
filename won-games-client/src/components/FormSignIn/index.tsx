/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import { Email, Lock } from '@styled-icons/material-outlined'

import Button from 'components/Button'
import { TextField } from 'components/TextField'
import { FormWrapper, FormLink } from 'components/Form'

import * as S from './styles'

export const FormSignIn = () => (
  <FormWrapper>
    <form>
      <TextField
        name="email"
        placeholder="Email"
        type="email"
        icon={<Email />}
      />

      <TextField
        name="password"
        placeholder="Password"
        type="password"
        icon={<Lock />}
      />

      <S.ForgotPassword href="#">Forgot your password?</S.ForgotPassword>

      <Button size="large" fullWidth>
        Sign in now
      </Button>

      <FormLink>
        <p>
          Don't have an account?{' '}
          <Link href="/sign-up">
            <a>Sign Up</a>
          </Link>
        </p>
      </FormLink>
    </form>
  </FormWrapper>
)
