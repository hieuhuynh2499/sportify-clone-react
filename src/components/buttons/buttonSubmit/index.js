import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'

function ButtonSubmit(props) {
  const { text, theme } = props
  return (
    <button type="submit" className={`btn-submit btn-submit--${theme}`}>
      {text}
    </button>
  )
}
ButtonSubmit.propTypes = {
  text: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
}
export default ButtonSubmit