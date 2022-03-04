import React from 'react'
// Mui
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
// reducer
import { statusMesa, dialogMesa } from '../components/Mesa/mesaReducer';
import { useDispatch } from 'react-redux';
// Redux do Alerta
import {setSnackbar} from './SnackbarReducer';

export default function Confirmacao(props) {
    const dispatch = useDispatch();
    
    const handleClose = () => {
        dispatch(dialogMesa({id: props.id, dialog: false}));
    };
    
    const alterarStatusMesa = (status) => {
        handleClose();
        dispatch(statusMesa({id: props.id, status: status}));
        dispatch(
            setSnackbar(
              true,
              "success",
              "Status da mesa alterado com sucesso!"
            )
        );
    }
  return (
    <Dialog
        open={props.open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
    >
        <DialogTitle id="alert-dialog-title">
            {"Status da Mesa"}
        </DialogTitle>
        <DialogContent>
            <DialogContentText id="alert-dialog-description">
                {props.message}
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={() => {
                handleClose();
            }}>
                Cancelar
            </Button>
            <Button onClick={() => {
                alterarStatusMesa(props.status);
            }}>
                Concordo
            </Button>
        </DialogActions>
    </Dialog>
  )
}
