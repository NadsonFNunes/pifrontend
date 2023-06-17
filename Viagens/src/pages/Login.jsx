import { NavLink, useNavigate } from 'react-router-dom'
import './Login.css'
import Logo from "../Images/Login1.png"
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useState } from "react";
import { auth } from '../services/firebaseConfig';



export default function Login(props) {


    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);


     
    const navigate = useNavigate();

    function handleSingnIn(e){
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
        navigate ('/home');
        
        
        
    }
    



/*     const navigate = useNavigate();


    function handleClick(event) {

        props.onLogin(event);
        navigate ('/home');
    }  */


    return (
        <>

            <form action="" id='login'>
                <img src={Logo} alt="Logo login" id='Img' />

                <h3>Olá</h3>
                <input className='elements' type="email" name="email" placeholder="Digite seu e-mail" 
                onChange={e => setEmail(e.target.value)}/>
                <input className='elements' type="password" name="senha" placeholder="Digite sua senha"  
                onChange={e => setPassword(e.target.value)}/>
                <button id='enviar' onClick={handleSingnIn} >Entrar</button>

                <li><NavLink to='/esquecisenha'> Esqueci minha senha </NavLink></li>
                <li ><NavLink to='/novousuario'> Novo usuário </NavLink> </li>


            </form>

        </>
    )
}