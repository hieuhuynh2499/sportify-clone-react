import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'

function InputRegister(props) {
  const {name, label, placeholder, type, error, id, value,handleInputValue} = props
  return (
    <div className="input-form-register">
      <label className="input-form-register__label" htmlFor={name}>
        {label}
      </label>
      <input
        name={name}
        className='input-form-register__input'
        type={type}
        placeholder={placeholder}
        id={id}
        value={value}
        onChange={handleInputValue}
      />
      {error[name] && <p className="text-error">{error[name]}</p>}
    </div>
  )
}

InputRegister.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  error: PropTypes.object,
  type: PropTypes.string,
  id: PropTypes.number,
  value: PropTypes.string,
  handleInputValue: PropTypes.func
}

InputRegister.defaultProps = {
  label: '',
  placeholder: '',
  id: '',
  type: '',
  name: '',
  value: '',
  error: {},
  handleInputValue: () => {},
}

export default InputRegister