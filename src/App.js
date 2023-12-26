import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/UI/navbar/Navbar";
import AppRouter from "./components/UI/AppRouter"
import { AuthContext } from "./context";
import { useEffect, useState } from "react";

const fontLink = document.createElement("link");
fontLink.href =
  "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;900&display=swap";
fontLink.rel = "stylesheet";
document.head.appendChild(fontLink);

function App() {
  const [isAuth, setIsAuth] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true)
    }
    setIsLoading(false)
  }, [])

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      isLoading,
    }}>
      <BrowserRouter>
        <Navbar/>
        <AppRouter/>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App;
