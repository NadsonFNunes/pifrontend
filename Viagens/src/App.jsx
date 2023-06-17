import { useState } from "react"
import { Routes, Route, BrowserRouter, NavLink } from "react-router-dom"

import Home from "./pages/Home"
import Login from "./pages/Login"
import NewPassword from "./pages/NewPassword"
import Erro404 from "./pages/Erro404"
import NewUser from "./pages/NewUser"
import Tickets from "./pages/Tickets"



export default function App() {

  const [logado, setLogado] = useState(false);
  const [userID, setUserID] = useState();

  function handleLogin(event) {
    setLogado(true);
    setUserID(100);
  }
  function handleLogout(event) {
    setLogado(false);
    setUserID(null);

  }


  return (
    <BrowserRouter>
      <Routes>
        {logado ?                                    
          <>
            <Route path="/home" element={<Home id={userID} onLogout={handleLogout} />} />
            <Route path='/passagens' element={<Tickets />} />
            

          </>


          :                                        
          <Route path='/' element={<Login onLogin={handleLogin} />} />
          

        }
      
        <Route path='*' element={<Erro404 />} />
        <Route path='/esquecisenha' element={<NewPassword />} />
        <Route path='/novousuario' element={<NewUser />} />
      </Routes>
    </BrowserRouter>
  )
}












/* 

<BrowserRouter>
<Routes>

  <Route path='/' element={<Login />} />

  <Route path='/home' element={<Home />} />
  <Route path="/passagens" element={<Tickets />} />

  <Route path='/esquecisenha' element={<NewPassword />} />
  <Route path='/novousuario' element={<NewUser />} />
  <Route path='*' element={<Erro404 />} />


</Routes>

</BrowserRouter>


</>
)
} */