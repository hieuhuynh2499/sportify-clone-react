import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'

function InputRegister(props) {
  const { label, placeholder, idInput } = props
  return (
    <div className="input-form-register">
      <label className="input-form-register__label" htmlFor={idInput}>
        {label}
      </label>
      <input
        className='input-form-register__input'
        type={idInput}
        placeholder={placeholder}
        id={idInput}
      />
    </div>
  )
}

InputRegister.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  idInput: PropTypes.string,
}

InputRegister.defaultProps = {
  label: '',
  placeholder: '',
  idInput: '',
}

export default InputRegister