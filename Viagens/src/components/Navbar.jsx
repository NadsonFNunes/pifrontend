import { NavLink,useNavigate } from "react-router-dom";
import './Navbar.css'
export default function Navbar(props) {

    const navigate = useNavigate()
    const perfil = `perfil/${props.id}`


    function handleClick(event) {
        props.onLogout(event)
        navigate('/home')
    }



    return (
        <>
            <ul>

                <li><NavLink to='/home'> Home </NavLink></li>
                <li> <NavLink to='/passagens'> Compre sua passagem </NavLink></li>
                <li> <NavLink to='/' onClick={handleClick}>  Sair</NavLink> </li>

            </ul>


        </>
    )
}