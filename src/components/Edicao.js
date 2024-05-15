import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Edit } from '@mui/icons-material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <span onClick={handleOpen} style={{ cursor: 'pointer' }}><Edit /></span>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form>
              <h1>Editar usuário</h1>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <input type="text" placeholder={props.placeholderUser}/>
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <input type="text" placeholder={props.placeholderMail}/>
            </Typography>
            <button>Editar</button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}