import { Route, Routes } from "react-router-dom";
import Config from "./Pages/Config";
import CreateUser from "./Pages/CreateUser";
import Game from "./Pages/Game";
import Login from "./Pages/Login";

function App() {

  return (
    <>
      <Routes>
        <Route path='/' Component={ Login } />
        <Route path='/create-user' Component={ CreateUser } />
        <Route path='/config' Component={ Config } />
        <Route path='/game' Component={ Game } />
      </Routes>
    </>
  )
}

export default App
