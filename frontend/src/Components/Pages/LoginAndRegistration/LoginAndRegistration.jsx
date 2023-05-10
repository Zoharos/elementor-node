import React, { useState } from 'react';
import './LoginAndRegistration.scss';

function LoginAndRegistrationPage({ authenticate, error }) {

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [errorMessage, setErrorMessage] = useState(error);
  
  function handleSubmit(event) {
    if(email && password)
      authenticate(email, password);
    else
      setErrorMessage('email or password should not be empty');
  };

  return (
    <div className="login-page">
      <h1>Login / Registration</h1>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="button" name='login' onClick={handleSubmit} >Login</button>
      </form>
      {errorMessage && (
          <div className="error-message">{errorMessage}</div>
        )}
    </div>
  );
}

export default LoginAndRegistrationPage;
