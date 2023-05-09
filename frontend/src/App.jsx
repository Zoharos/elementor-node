import { useState } from "react";
import LoginAndRegistration from "@/Components/Pages/LoginAndRegistration/LoginAndRegistration.jsx";
import ActiveUsers from "@/Components/Pages/ActiveUsers/ActiveUsers.jsx";
import './App.scss'

function App() {
  const [authenticated, setAuthenticated] = useState(false);

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
      else
        setAuthenticated(true);
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
      if(status < 300)
        setAuthenticated(true);
      else
        throw Error(statusText);
    } catch(e) {
      console.log(e);
    }
  }

  function logout() {
    setAuthenticated(false);
  }

  return (
    <>
      {!authenticated && <LoginAndRegistration authenticate={authenticate} />}
      {authenticated && <ActiveUsers logout={logout} />}
    </>
  )
}

export default App
