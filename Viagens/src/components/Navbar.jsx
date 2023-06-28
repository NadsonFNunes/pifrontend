import { useContext } from 'react'
import { NavLink,useNavigate } from "react-router-dom";
import UserContext from '../contexts/UserContext'
import './Navbar.css'
export default function Navbar(props) {

    const { userId, handleLogout } = useContext(UserContext)
    const navigate = useNavigate()



    async function handleClick() {
        await handleLogout()
        navigate('/')
    }



    return (
        <>
            <ul>

                <li><NavLink to='/'> Home </NavLink></li>
                <li> <NavLink to='/passagens'> Compre sua passagem </NavLink></li>
                <li><NavLink to={`perfil/${props.id}`}></NavLink></li>
                <li> <NavLink to='/' onClick={handleClick}>  Sair</NavLink> </li>

            </ul>


        </>
    )
}