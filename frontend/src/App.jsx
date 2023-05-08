import { useState } from "react";
import LoginAndRegistration from "@/Components/Pages/LoginAndRegistration/LoginAndRegistration.jsx";
import ActiveUsers from "@/Components/Pages/ActiveUsers/ActiveUsers.jsx";
import './App.scss'

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  function authenticate(email, password) {
    setAuthenticated(true);
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
