import { Link } from 'react-router-dom';
import './NewPassword.css'
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from '../services/firebaseConfig';
export default function NewPassword() {
    
    
    function recoverPassword() {
        showLoading();
        firebaseError.auth().sendPasswordResetEmail(form.email().value).then(() => {
            hideLoading();
            alert('Enviamos um email para recuperar sua senha');
        }).catch(error => {
            hideLoading();
            alert('email inválido');
        })


    }

    return (
        <>

            <form id="Novasenha" action="" >


                <h1 >Esqueceu sua senha ? </h1>

                <label htmlFor='' >Email: </label>
                <input className='elements' type="email" name="email" id='InseEmail' />
                
                <div>
                    <button onClick={recoverPassword}>Enviar</button>   
                    <Link to="/"><button> Voltar </button></Link>
                </div>

            </form>

        </>
    )
}