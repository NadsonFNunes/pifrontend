import { Outlet } from 'react-router'
import './Layout.css'
import Navbar from './Navbar'

export default function Layout(props) {
    return (
        <>
            <header>

                <h1>DF Viagens</h1>
                <Navbar />

            </header>
            <main>
                <Outlet />
            </main>

            <footer>
                <p>Nadson Ferreira 2023</p>
            </footer>
        </>
    )
}