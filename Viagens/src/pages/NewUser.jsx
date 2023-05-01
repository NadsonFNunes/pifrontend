import { NavLink } from 'react-router-dom'
import './NewUser.css'
import Login from './Login'

export default function NewUser() {
    return (
        <>



            <form action="" >
                <h1>Novo Usuário</h1>
                
                <p> Nome Completo:<input type="text" name="" id=""  className='elements'/> </p>
                <p> E-mail:<input type="email" name="" id="" className='elements'/> </p>
                <p>Endereço:<input type="text" name="" id="" className='elements'/> </p>
                <p>Telefone:<input type="tell" name="" id="" className='elements'/> </p>
                <p>Data de nascimento:<input type="date" name="" id="" className='elements'/> </p>
                <p>Senha:<input type="password" name="" id="" className='elements'/> </p>
                <p>
                <button>Criar Conta</button> 
                <button><NavLink to='/'> Voltar </NavLink></button>
                </p>
            </form>
        </>
    )
}