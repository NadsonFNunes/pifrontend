
import { useParams } from 'react-router'
import Layout from '../components/Layout'
import './Home.css'
import Viagens from '../Images/Viagens.jpg'

export default function Home() {
    const { id } = useParams()
    return (
        <>

            <Layout />

            <main className='container'>



                <h1 id='titulo'>Seja bem-vindo à DF Viagens</h1>

                <p id='text'> Nós somos melhor opção para quem deseja explorar o mundo de forma confortável e segura.
                    Com uma ampla variedade de destinos, roteiros personalizados e um atendimento excepcional,
                    estamos prontos para transformar suas viagens em experiências inesquecíveis.</p>

                <div>
                    <img src={Viagens} id='malas' alt="Imagem de viagem" />
                </div>

                <p>Não perca mais tempo sonhando com as suas próximas férias! 
                    Entre em contato conosco agora mesmo e descubra como podemos transformar suas viagens em momentos inesquecíveis. 
                    Mal podemos esperar para ajudá-lo a explorar o mundo!</p>

            </main>


        </>
    )
}