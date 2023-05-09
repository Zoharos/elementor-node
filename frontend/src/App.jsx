import { useState, useEffect } from "react";
import LoginAndRegistration from "@/Components/Pages/LoginAndRegistration/LoginAndRegistration.jsx";
import ActiveUsers from "@/Components/Pages/ActiveUsers/ActiveUsers.jsx";
import './App.scss'

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [activeUsers, setActiveUsers] = useState([]);

  useEffect(() => {
    if(authenticated) {
      getActiveUsers();
    }
  }, [authenticated])

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
      await fetch(`${import.meta.env.VITE_BACKEND_ENDPOINT}/authentication/logout`, {
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

  async function getActiveUsers() {
    try {
      const ans = await fetch(`${import.meta.env.VITE_BACKEND_ENDPOINT}/users/active`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      })
      const data = await ans.json()
      if(data) {
        console.log(data);
        setActiveUsers(data)
      }
      else
        throw Error("Something went wrong");
    } catch(e) {
      console.log(e);
    }
  }
  
  return (
    <>
      {!authenticated && <LoginAndRegistration authenticate={authenticate} />}
      {authenticated && <ActiveUsers logout={logout} userEmail={userEmail} activeUsers={activeUsers} />}
    </>
  )
}

export default App
