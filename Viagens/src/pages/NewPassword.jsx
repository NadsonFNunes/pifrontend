import { NavLink } from "react-router-dom"
import './NewPassword.css' 

export default function NewPassword() {
    return (
        <>

            

            <form id="senha" action="">
            <h1>Esqueceu sua senha ? </h1>
                <h3> Digite seu e-mail para recuparar sua senha: </h3>
                    <input type="email" />
                    <input type="submit" name="Rec" id="Rec" />
                    <button><NavLink to='/'> Voltar </NavLink></button>
                
            </form>

        </>
    )
}