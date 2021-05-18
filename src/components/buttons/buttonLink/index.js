import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './style.scss'

function ButtonLink(props) {
  const { text, Icon, theme } = props

  return (
    <Link to="/" className={`btn-link btn-link--${theme}`}>
      {Icon && <Icon className="btn-link__icon" />}
      {text}
    </Link>
  )
}

ButtonLink.propTypes = {
  text: PropTypes.string,
  theme: PropTypes.string,
  Icon: PropTypes.oneOfType([PropTypes.any]),
}

ButtonLink.defaultProps = {
  text: '',
  theme: '',
  Icon: null,
}

export default ButtonLink
