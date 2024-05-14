import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { armazenarLS } from '../utils/functions';
import { UserContext } from '../contexts/usercontext';
import { useNavigate } from 'react-router-dom';

export default function PerfilSwitch() {

    const navigate = useNavigate()

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
    armazenarLS('perfil', event.target.value)
    navigate('/inicio')
  };

  const { perfil } = React.useContext(UserContext)

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{perfil}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={'Admin'}>Admin</MenuItem>
          <MenuItem value={'Padrão'}>Padrão</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}