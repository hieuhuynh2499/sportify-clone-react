import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

function Wellcome() {
  return (
    <section className="wellcome">
      <div className="wellcome__content">
        <h1 className="wellcome__heading">
          Listening is, <br /> everything
        </h1>
        <p className="wellcome__pragraph">
          Millions of songs and podcasts. No credit card needed.
        </p>
        <Link className="wellcome__link" to="/">
          GET SPOTIFY FREE
        </Link>
      </div>
    </section>
  )
}
export default Wellcome