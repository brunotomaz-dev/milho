import { Route, Routes } from "react-router-dom";
import './App.css';
import Login from "./Pages/Login";

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' Component={ Login } />
      </Routes>
    </div>
  )
}

export default App
