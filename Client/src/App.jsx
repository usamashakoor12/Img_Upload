import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header"
import Home from "./Components/Home"
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from "./Components/Register";

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={ <Home/> }/>
      <Route path="/register" element={ <Register/> }/>
    </Routes>

    </>
  )
}

export default App
