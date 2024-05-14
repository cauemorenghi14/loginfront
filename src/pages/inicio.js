import { useEffect, useState } from "react";
import { consultarLS } from "../utils/functions";
import { buscaToken } from "../services/analytics";
import Menu from "../components/Menu";

const Inicio = () => {

    const [mensagem, setmensagem] = useState("");

    const fetchMensagem = async () => {
        try {
            const token = consultarLS('token')
            const response = await buscaToken(token)
            setmensagem(response.data)
        } catch (error) {
            console.log('erro ao validar token')
        }
    }

    useEffect(() => {
        fetchMensagem()
    }, []);

    return ( 
        <div>
            <h1>{mensagem}</h1>
            <Menu />
        </div>
     );
}
 
export default Inicio;