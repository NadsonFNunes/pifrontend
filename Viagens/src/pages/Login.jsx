import { NavLink, useNavigate } from 'react-router-dom'
import './Login.css'
import Logo from "../Images/Aviao.gif"
import { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import UserContext from '../contexts/UserContext'


export default function LoginForm(props) {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const navigate = useNavigate()
    const { handleLogin } = useContext(UserContext)
    const [errorLogin, setErrorLogin] = useState("")
  
    const validaEmail = {
      required: {
        value: true,
        message: 'Email é obrigatorio',
      },
      pattern: {
        value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
        message: 'Email inválido',
      }
    }
  
    const validaSenha = {
      required: {
        value: true,
        message: 'Digite sua senha',
      },
      minLength: {
        value: 6,
        message: 'Senha deve ter no mínimo 6 caracteres',
      }
    }


    async function onSubmit(data) {
        const { email, senha } = data;
        setErrorLogin("")
        try {
          await handleLogin(email, senha)
          navigate("/login")
        } catch (error) {
          setErrorLogin(error.message)
        }
      }



    return (
        <>

            <form action="" id='login' onSubmit={handleSubmit(onSubmit)}>
                <img src={Logo} alt="Logo login" id='Img' />

                <h3>Login</h3>
                {errorLogin && <p className="erro">{errorLogin}</p>}
                <label htmlFor='email'>Email </label>
                <input className='elements' type="email" name="email"  id='email'{...register("email", validaEmail)}/>

                <label htmlFor="senha1">Senha</label>
                <input className='elements' type="password" name="senha" id='senha1' {...register("senha", validaSenha)}/>
                {errors.senha && <p className="erro">{errors.senha.message}</p>}

                <button id='enviar'>Entrar</button>

                <li><NavLink to='/esquecisenha'> Esqueci minha senha </NavLink></li>
                <li ><NavLink to='/novousuario'> Novo usuário </NavLink> </li>

            </form>
        </>
    )
}