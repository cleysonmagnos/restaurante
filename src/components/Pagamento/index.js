import React from 'react'
// Mui
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
// Componentes
import PedidoLista from '../Pedido/PedidoLista';
import PagamentoForm from './PagamentoForm';
// reducer
import { contaMesa } from '../Mesa/mesaReducer';
import { useDispatch } from 'react-redux';

export default function Pagamento(props) {
    const dispatch = useDispatch();
    
    const handleClose = () => {
        dispatch(contaMesa({id: props.id, conta: false}));
    };

  return (
    <Dialog
        open={props.open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
    >
        <DialogTitle id="alert-dialog-title">
            {"Pagamento"}
        </DialogTitle>
        <DialogContent>
            <PagamentoForm id={props.id} produtos={props.produtos}/>
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
