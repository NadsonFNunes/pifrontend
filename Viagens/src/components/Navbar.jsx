import { NavLink,useNavigate } from "react-router-dom";
import './Navbar.css'
export default function Navbar(props) {
    const { userId, handleLogout } = useContext(UserContext)
    const navigate = useNavigate()



    async function handleClick() {
        await handleLogout()
        navigate('/home')
    }



    return (
        <>
            <ul>

                <li><NavLink to='/home'> Home </NavLink></li>
                <li> <NavLink to='/passagens'> Compre sua passagem </NavLink></li>
                <li><NavLink to={`perfil/${props.id}`}></NavLink></li>
                <li> <NavLink to='/' onClick={handleClick}>  Sair</NavLink> </li>

            </ul>


        </>
    )
}