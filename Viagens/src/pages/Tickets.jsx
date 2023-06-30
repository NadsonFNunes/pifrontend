import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import TiketContext from '../contexts/TiketContext'
import "./Tickets.css"
export default function Tickets() {

    
    const { inserePassagem } = useContext(TiketContext)
    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()

    async function onSubmit(data) {
        try {
            await inserePassagem(data)
            navigate('/')
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <>
            <main>

                <div id="form">
                    <form action="" id="passagem" onSubmit={handleSubmit(onSubmit)}>
                        <h3 id="mensagem">Passagens</h3>

                        <p> Ida <input type="date" name="" id="data" className='elements'  {...register("ida")} /> </p>

                        <p> Volta <input type="date" name="" id="data" className='elements'  {...register("volta")} /> </p>


                        <p> Locais disponiveis :
                            <select name="PLACE" id="" className='elements' {...register("locais")}>
                                <option value="DF"> Distrito Federal</option>
                                <option value="RJ"> Rio de Janeiro</option>
                                <option value="SP"> São Paulo</option>
                                <option value="GO"> Goiás</option>
                            </select>
                        </p>
                        <button className='elements' id="enviar"> Comprar </button>
                    </form>
                </div>
            </main>
        </>
    )
}