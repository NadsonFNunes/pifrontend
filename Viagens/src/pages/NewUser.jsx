import { Link } from 'react-router-dom';
import './NewUser.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../services/firebaseConfig';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'


export default function NewUser() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    
    const [ createUserWithEmailAndPassword, user, loading, error ] =
        useCreateUserWithEmailAndPassword(auth);

    function handleSingnIn(e){
        e.preventDefault();
        createUserWithEmailAndPasswor(email, password);
        history.push('/');

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
               <Link> <button onClick={handleSingnIn} >Criar Conta</button> </Link> 
                <Link to= "/"> <button > Voltar </button> </Link>
                </p>
            </form>
        </>
    )
}
