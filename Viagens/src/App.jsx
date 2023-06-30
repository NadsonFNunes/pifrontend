import { useContext } from "react"
import { Routes, Route, BrowserRouter, } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Login from "./pages/Login"
import NewPassword from "./pages/NewPassword"
import Erro404 from "./pages/Erro404"
import NewUser from "./pages/NewUser"
import Tickets from "./pages/Tickets"
import UserContext from './contexts/UserContext'


export default function App() {
  const { logado } = useContext(UserContext)

  return (
    <BrowserRouter>
      <Routes>
        
      {logado ?
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="passagens" element={<Tickets />} />
        
          </Route>
          :<Route index element={< Login/>} />}
          <>
        <Route path="*" element={<Erro404 />} />
        <Route path='/esquecisenha' element={<NewPassword />} />
        <Route path='/novousuario' element={<NewUser />} />
        </>
      </Routes>
    </BrowserRouter>
  )
}


