import { useParams } from "react-router"
import Layout from "../components/Layout"
import "./Tickets.css"
export default function Tickets() {
    const { id } = useParams()
    return (
        <>
            <Layout />


            <div>
                <form action="" id="passagem">
                    <h3 id="mensagem">Passagens</h3>

                    <p> Ida <input type="date" name="" id="data" className='elements' /> </p>

                    <p> Volta <input type="date" name="" id="data" className='elements' /> </p>


                    <p> Locais disponiveis :
                        <select name="PLACE" id="" className='elements'>
                            <option value="DF"> Distrito Federal</option>
                            <option value="RJ"> Rio de Janeiro</option>
                            <option value="SP"> São Paulo</option>
                            <option value="GO"> Goiás</option>
                        </select>
                    </p>
                    <button className='elements' id="enviar"> Comprar </button>
                </form>
            </div>

        </>
    )
}