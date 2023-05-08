import './App.scss'
import LoginAndRegistration from "@/Components/Pages/LoginAndRegistration/LoginAndRegistration.jsx";

function App() {

  function authenticate(email, password) {
    console.log(email);
    console.log(password);
  }

  return (
    <>
      <LoginAndRegistration authenticate={authenticate} />
    </>
  )
}

export default App
