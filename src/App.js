import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/UI/navbar/Navbar";
import AppRouter from "./components/UI/AppRouter"

const fontLink = document.createElement("link");
fontLink.href =
  "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;900&display=swap";
fontLink.rel = "stylesheet";
document.head.appendChild(fontLink);

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <AppRouter/>
    </BrowserRouter>
  )
}

export default App;
