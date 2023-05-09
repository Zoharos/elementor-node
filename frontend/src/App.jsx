import { useState } from "react";
import LoginAndRegistration from "@/Components/Pages/LoginAndRegistration/LoginAndRegistration.jsx";
import ActiveUsers from "@/Components/Pages/ActiveUsers/ActiveUsers.jsx";
import './App.scss'

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  async function authenticate(email, password) {
    const login = await fetch(`${import.meta.env.VITE_BACKEND_ENDPOINT}/authentication/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })
    .then(() => setAuthenticated(true))
    .catch(error => console.error(error));
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
