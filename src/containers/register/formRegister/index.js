import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import InputRegister from '../inputRegister'
import { monthsSelect, inputRegisters } from './contants'
import './style.scss'


function FormRegister() {
  const [inputValue,setInputValue] = useState({
    email: '',
    emailconfirm: '',
    password: '',
    name: '',
    days: '',
    moths: '',
    year: '',
    gender:''
  })
  const [error,setError] = useState({})
  function validate(values) {
      let error = {}
      if(!values.email){
        error.email = 'You need to enter your email.'
      }
      if(!values.emailconfirm){
        error.emailconfirm = 'You need to enter your email confirm.'
      }else if(values.email !== values.emailconfirm){
        error.emailconfirm = "The email addresses don't match."
      }
      if(!values.password){
        error.password = "You need to enter a password."
      }
      if(!values.name){
        error.name = "Enter a name for your profile."
      }
      if(!values.days){
        error.days = "Enter a valid day of the month."
      }else if(values.days > 31){
        error.days = "Enter a valid day of the month."
      }
      if(!values.moths){
        error.moths = "Select your birth month."
      }
      if(!values.year){
        error.year = "Enter a valid year."
      }else if(values.year < 1970){
        error.year = "Enter a valid year."
      }
      if(!values.gender){
        error.gender = "Select your gender."
      }
      return error
  }
  function handleInputValue (e){
      const {name,value} = e.target
      setInputValue({
        ...inputValue,
        [name]: value,
      })
      if(name.checked === true){
        setInputValue({
          ...inputValue,
          gender:value
        })
        inputValue.gender && setError({...error,gender:''})
      }
      inputValue[name] && setError({...error,[name]:''})
  }
  function handleSubmit (e) {
      e.preventDefault()
      setError(validate(inputValue))
  }
  return (
    <div className="form-resgister">
      <form onSubmit={handleSubmit}>
        {inputRegisters.map((item) => (
          <InputRegister
            key={item.id}
            label={item.label}
            placeholder={item.placeholder}
            type={item.type}
            name={item.name}
            id={item.id}
            value={inputValue[item.name]}
            handleInputValue={handleInputValue}
            error={error}
          />
        ))}
        <h3 className="form-resgister-h3"> What&apos;s your date of birth?</h3>
        <div className="form-resgister__time">
          <div className="form-resgister__date">
            <label className="form-resgister__time-label" htmlFor="dd">
              Day
            </label>
            <input
              className='form-resgister__time-input'
              type="number"
              placeholder="DD"
              id="dd"
              value ={inputValue.days}
              name='days'
              onChange={handleInputValue}
            />
          </div>
          <div className="form-resgister__month">
            <label className="form-resgister__time-label" htmlFor="mm">
              Month
            </label>
            <select
              className='form-resgister__time-input'
              name="month"
              id="mm"
              placeholder="MONTH"
              value={inputValue.moths}
              names='moths'
              onChange={handleInputValue}
            >
              {monthsSelect.map((moth, index) => (
                <option key={index.toString()} value={moth}>
                  {moth}
                </option>
              ))}
            </select>
          </div>
          <div className="form-resgister__year">
            <label className="form-resgister__time-label" htmlFor="yy">
              Year
            </label>
            <input
              name='year'
              className='form-resgister__time-input'
              type="number"
              placeholder="YYYY"
              id="yy"
              value={inputValue.year}
              onChange={handleInputValue}
            />
          </div>
        </div>
        {error.days && <p className="text-error">{error.days}</p>}
        {error.moths && <p className="text-error">{error.moths}</p>}
        {error.year && <p className="text-error">{error.year}</p>}
        <h3 className="form-resgister-h3">What&apos;s your gender?</h3>
        <div className="form-resgister__radio">
          <div className="form-resgister__radio-item">
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              onChange={handleInputValue}
            />
            <label htmlFor="male">Male</label>
          </div>
          <div className="form-resgister__radio-item">
            <input
              type="radio"
              id="female"
              name="gender"
              value="Female"
              onChange={handleInputValue}
            />
            <label htmlFor="male">Female</label>
          </div>
          <div className="form-resgister__radio-item">
            <input
              type="radio"
              id="non-binary"
              name="gender"
              value="Non-binary"
              onChange={handleInputValue}
            />
            <label className="form-resgister__radio-item-label" htmlFor="male">
              Non-binary
            </label>
          </div>
        </div>
        {error.gender && <p className="text-error">{error.gender}</p>}
        <div className="form-resgister__check">
          <input type="checkbox" />
          <span className="form-resgister__check-span">
            I would prefer not to receive marketing messages from Spotify
          </span>
        </div>
        <div className="form-resgister__check">
          <input type="checkbox" />
          <span className="form-resgister__check-span">
            Share my registration data with Spotify&apos;s content providers for
            marketing purposes.
          </span>
        </div>
        <div className="text-center">
          <div className="form-resgister__text">
            <p>
              <span className="form-resgister__desciption-span">
                By clicking on Sign up, you agree to Spotify&apos;s
                <Link className="form-resgister__desciption-link" to="/">
                  Terms and Conditions of Use.
                </Link>
              </span>
              <br />
              <br />
              <span className="form-resgister__desciption-span">
                To learn more about how Spotify collects, uses, shares and
                protects your personal data please read Spotify&apos;s
                <Link className="form-resgister__desciption-link" to="/">
                  Privacy Policy.
                </Link>
              </span>
            </p>
          </div>
          <button type="submit" className="form-resgister__btn">
            sign up
          </button>
        </div>
      </form>
    </div>
  )
}

export default FormRegister