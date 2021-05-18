import React from 'react'
import './style.scss'
import logo from '../../images/logoSpotify-black.svg'
import { RiFacebookCircleFill } from 'react-icons/ri'
import { AiFillApple } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import ButtonLink from '../../components/buttons/buttonLink'
import FormLogin from './components/formLogin'

function Login() {
  return (
    <section className="login">
      <div className="login__logo">
        <img className="login__logo-image" src={logo} alt="" />
      </div>
      <div className="login__center">
        <div className="login__network">
          <h2 className="login__network-title">
            To continue, log in to Spotify.
          </h2>
          <ButtonLink
            text="Continue with Facebook"
            Icon={RiFacebookCircleFill}
            theme="face"
          />
          <ButtonLink
            text="continue with apple"
            Icon={AiFillApple}
            theme="apple"
          />
          <ButtonLink text="continue with google" Icon={FcGoogle} />
          <ButtonLink text="continue with phone number" />
        </div>
        <div className="login__or">
          <div className="linethrough-or">
            <span className="linethrough-or__text" />
          </div>
        </div>
        <FormLogin />
        <h3 className="login__title"> Don&apos;t have an account?</h3>
        <ButtonLink text="continue with phone number" />
      </div>
    </section>
  )
}

export default Login