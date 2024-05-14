import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import EditIcon from '@mui/icons-material/Edit';
import { Home, Logout, PersonOutline } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { consultarLS, excluirLS } from '../utils/functions';
import userFunctions from '../utils/users';

const actions = [
  { icon: <Home />, name: 'Página inicial', link: 'inicio' },
  { icon: <PersonOutline />, name: 'Página de usuários', link: 'usuarios' },
  { icon: <Logout />, name: 'Logout', link: 'login' }
];

export default function Menu() {

    const { logout } = userFunctions()

    const navigate = useNavigate()

    const iconeClicado = async (icone) => {
        if (icone === 'login') {
            excluirLS('token')
            excluirLS('perfil')
            const token = consultarLS('token')
            logout(token)
        }
        navigate(`/${icone}`)
    }

  return (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial openIcon example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon openIcon={<EditIcon />} />}
      >
        {actions.map((action) => (
            
                <SpeedDialAction
                    key={action.name}
                    icon={action.icon}
                    tooltipTitle={action.name}
                    onClick={() => iconeClicado(action.link)}
                />
        ))}
      </SpeedDial>
    </Box>
  );
}