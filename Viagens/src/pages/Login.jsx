import react from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './Login.css'
import Logo from "../Images/Login1.png"

export default function Login(props) {

    const navigate = useNavigate();

    function handleClick(event) {
        props.onLogin(event);
        navigate ('/home');

    }
    return (
        <>

            <form action="" id='login'>
                <img src={Logo} alt="Logo login" id='Img' />

                <h3>Olá</h3>
                <input className='elements' type="text" name="email" placeholder="Digite seu e-mail" />
                <input className='elements' type="password" name="senha" placeholder="Digite sua senha" />
                <button id='enviar' onClick={handleClick} >Entrar</button>

                <li><NavLink to='/esquecisenha'> Esqueci minha senha </NavLink></li>
                <li ><NavLink to='/novousuario'> Novo usuário </NavLink> </li>


            </form>

        </>
    )
}