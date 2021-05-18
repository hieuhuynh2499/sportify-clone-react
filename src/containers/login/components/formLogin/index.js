import ButtonSubmit from '../../../../components/buttons/buttonSubmit'
import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

function FormLogin() {

  return (
    <div className="login-form">
      <form>
        <div className="login-form__control">
          <label className="login-form__label" htmlFor="email">
            Email address or username
          </label>
          <input
            className='login-form__input'
            placeholder="Email address or username"
          />
        </div>
        <div className="login-form__control">
          <label className="login-form__label" htmlFor="password">
            Enter your password
          </label>
          <input
            className='login-form__input'
            placeholder="Enter your password"
            type="password"
          />
        </div>
        <Link to="/" className="login-form__forgot">
          Forgot your password?
        </Link>
        <div className="login-form__submit">
          <div className="login-form__checkbox">
            <input
              className="login-form__checkbox-input"
              type="checkbox"
              id="remember"
            />
            <label htmlFor="remember" className="login-form__checkbox-label">
              Remember me
            </label>
          </div>
          <ButtonSubmit text="login" theme="green" />
        </div>
      </form>
    </div>
  )
}

export default FormLogin