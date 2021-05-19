import ButtonSubmit from "../../../../components/buttons/buttonSubmit";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.scss";

function FormLogin() {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({});
  function handleInputValue(e) {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
    if(inputValue.email){
      setError({...error,[name]:''})
    }
    if(inputValue.password){
      setError({...error,[name]:''})
    }
  }
  function validateInfo (values) {
    let error = {};
    //email
    if(!values.email){
        error.email = "email is required"
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
        error.email ="email address is  invalid"
    }
    //password
    if(!values.password){
        error.password = "password is required"
    }
    return error;
  }
  function handleSubmit (e) {
    e.preventDefault();
    setError(validateInfo(inputValue))
  }
  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <div className="login-form__control">
          <label className="login-form__label" htmlFor="email">
            Email address or username
          </label>
          <input
            className="login-form__input"
            placeholder="Email address or username"
            type="email"
            value={inputValue.email}
            onChange={handleInputValue}
            name="email"
          />
          {error.email && <p className="text-error">{error.email}</p>}
        </div>
        <div className="login-form__control">
          <label className="login-form__label" htmlFor="password">
            Enter your password
          </label>
          <input
            className="login-form__input"
            placeholder="Enter your password"
            type="password"
            value={inputValue.password}
            onChange={handleInputValue}
            name="password"
          />
          {error.password && <p className="text-error">{error.password}</p>}
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
  );
}

export default FormLogin;
