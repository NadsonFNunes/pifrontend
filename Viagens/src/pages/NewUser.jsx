import { Link } from 'react-router-dom';
import './NewUser.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../services/firebaseConfig';
import { useState } from 'react';


export default function NewUser() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const [ createUserWithEmailAndPassword, user, loading, error ] =
        useCreateUserWithEmailAndPassword(auth);

    function handleSingnOut(e){
        e.preventDefault();
        createUserWithEmailAndPassword(email, password);

    }

    return (
        <>



            <form action="" >
                <h1>Novo Usuário</h1>
                
                <p> E-mail:<input type="email" 
                name="" id="" 
                className='elements' 
                onChange={e => setEmail(e.target.value)} /> 
                
                </p>

                <p>Senha:<input type="password" 
                name="" id="" 
                className='elements'  
                onChange={e => setPassword(e.target.value)}/> </p>

                <p>
               <Link to= "/"> <button onClick={handleSingnOut} >Criar Conta</button> </Link> 
                <Link to= "/"> <button > Voltar </button> </Link>
                </p>
            </form>
        </>
    )
}
