import { useContext, useEffect, useState } from "react";
import Menu from "../components/Menu";
import { getUsers } from "../services/analytics";
import { consultarLS } from "../utils/functions";
import { UserContext } from "../contexts/usercontext";
import { Edit } from "@mui/icons-material";
import BasicModal from "../components/Edicao";

const Usuarios = () => {
    
    const perfilLS = consultarLS('perfil')

    const { perfil, setperfil } = useContext(UserContext)


    const [users, setusers] = useState([]);

    const usuarios = async () => {
        const response = await getUsers()
        setusers(response.data)
        setperfil(perfilLS)
        console.log(users)
    }

    useEffect(() => {
        usuarios()
    }, []);

    return ( 
        <div>
            <div>
                <span style={{ color: 'red', fontWeight: 'bold'}}>Perfil selecionado: {perfil}</span>
                <h1>Usuários</h1>
                {users.map(user => (
                    <div key={user.id}>
                        {perfil === 'Admin' 
                            ?
                                <div style={{ display: 'flex', gap: '.3em', alignItems: 'center'}}>
                                    <p>{user.username}</p>
                                    <BasicModal />
                                </div>
                            :
                                <div>
                                    <p>{user.username}</p>
                                </div>
                        }
                    </div>
                ))}
            </div>
            <Menu />
        </div>
     );
}
 
export default Usuarios;