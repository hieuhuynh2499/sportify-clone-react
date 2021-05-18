import React from 'react'
import './style.scss'
import logo from '../../images/logoSpotify-black.svg'
import { Link } from 'react-router-dom'
import ButtonLink from '../../components/buttons/buttonLink'
import FormRegister from './formRegister'

function Register() {
  return (
    <section className="register">
      <div className="register__logo">
        <img src={logo} alt="" className="register__logo-images" />
      </div>
      <h3 className="register__title">Sign up for free to start listening.</h3>
      <ButtonLink theme="face-register" text="sign up with facebook" />
      <div className="register__desciption">
        <p>
          <span className="register__desciption-span">
            By clicking on sign-up, you agree to Spotify&apos;s
            <Link className="register__desciption-link" to="/">
              Terms and Conditions of Use.
            </Link>
          </span>
          <br /> <br />
          <span className="register__desciption-span">
            To learn more about how Spotify collects, uses, shares and protects
            your personal data, please see
            <Link className="register__desciption-link" to="/">
              Spotify&apos;s Privacy Policy.
            </Link>
          </span>
        </p>
      </div>
      <div className="register__or">
        <div className="linethrough-or">
          <span className="linethrough-or__text" />
        </div>
      </div>
      <FormRegister />
      <h3 className="text-center">
        Have an account?{' '}
        <Link to="/" className="text--green text--underline">
          Log in.
        </Link>
      </h3>
    </section>
  )
}

export default Register