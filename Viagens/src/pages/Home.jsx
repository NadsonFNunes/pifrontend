
import { useParams } from 'react-router'
import Layout from '../components/Layout'
import './Home.css'
import Viagens from '../Images/Viagens.jpg'

export default function Home() {
    const { id } = useParams()
    return (
        <>

            <Layout/>
            <h1>asd</h1>
            <main className='container'>



                <h1>Seja bem-vindo à DF Viagens</h1>

                <p> Nós somos melhor opção para quem deseja explorar o mundo de forma confortável e segura.
                    Com uma ampla variedade de destinos, roteiros personalizados e um atendimento excepcional,
                    estamos prontos para transformar suas viagens em experiências inesquecíveis.</p>

                <img id='mala' src={Viagens} alt="Imagem de viagem" />
                
            </main>

        </>
    )
}