import React from 'react'
// Mui
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
// Componentes
import PedidoForm from '../components/Pedido/PedidoForm';
import PedidoLista from '../components/Pedido/PedidoLista';
// reducer
import { formMesa } from '../components/Mesa/mesaReducer';
import { useDispatch } from 'react-redux';

export default function Form(props) {
    const dispatch = useDispatch();
    
    const handleClose = () => {
        dispatch(formMesa({id: props.id, form: false}));
    };

  return (
    <Dialog
        open={props.open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
    >
        <DialogTitle id="alert-dialog-title">
            {"Adicionar Produtos"}
        </DialogTitle>
        <DialogContent>
            <PedidoForm id={props.id}/>
            <PedidoLista id={props.id} produtos={props.produtos}/>
            
        </DialogContent>
        <DialogActions>
            <Button onClick={() => {
                handleClose();
            }}>
                Fechar
            </Button>
           
        </DialogActions>
    </Dialog>
  )
}
