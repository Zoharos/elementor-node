import { useState } from "react";
import LoginAndRegistration from "@/Components/Pages/LoginAndRegistration/LoginAndRegistration.jsx";
import ActiveUsers from "@/Components/Pages/ActiveUsers/ActiveUsers.jsx";
import './App.scss'

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  async function authenticate(email, password) {
    try {
      const { status, statusText } = await fetch(`${import.meta.env.VITE_BACKEND_ENDPOINT}/authentication/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })
      if(status === 404)
        register(email, password);
      else if(status > 299)
        throw Error(statusText);
      else {
        setAuthenticated(true);
        setUserEmail(email);
      }
    } catch(e) {
      console.log(e);
    }
  }

  async function logout() {
    try {
      const { status, statusText } = await fetch(`${import.meta.env.VITE_BACKEND_ENDPOINT}/authentication/logout`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: userEmail })
      })
      setAuthenticated(false);
    } catch(e) {
      console.log(e);
    }
  }

  async function register(email, password) {
    try {
      const { status, statusText } = await fetch(`${import.meta.env.VITE_BACKEND_ENDPOINT}/authentication/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })
      if(status < 300) {
        setAuthenticated(true);
        setUserEmail(email);
      }
      else
        throw Error(statusText);
    } catch(e) {
      console.log(e);
    }
  }
  
  return (
    <>
      {!authenticated && <LoginAndRegistration authenticate={authenticate} />}
      {authenticated && <ActiveUsers logout={logout} userEmail={userEmail} />}
    </>
  )
}

export default App
