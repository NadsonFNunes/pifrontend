import { Outlet } from 'react-router'
import './Layout.css'
import Navbar from './Navbar'

export default function Layout(props) {
    return (
        <>
            <header>

                <h1>DF Viagens</h1>
                <Navbar id={props.id} onLogout={props.onLogout}/>
                
            </header>
        </>
    )
}