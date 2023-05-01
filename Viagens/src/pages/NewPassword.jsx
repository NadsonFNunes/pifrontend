import { NavLink } from "react-router-dom"
import './NewPassword.css'

export default function NewPassword() {
    return (
        <>



            <form  id="senha" action="" method="post">


                <h1 >Esqueceu sua senha ? </h1>
                <p> Digite seu e-mail para recuparar sua senha: </p>

                <span>

                    <input type="email" id='campo' placeholder="Digite seu email" /> <input type="submit" />

                </span>

                <div>
                    <button><NavLink to='/'>  Voltar </NavLink></button>

                </div>
            </form>

        </>
    )
}