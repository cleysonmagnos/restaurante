import React from 'react'
import Form from "../../layouts/Form";
import {Grid } from '@material-ui/core';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
//Icones
import IconButton from '@mui/material/IconButton';
import {AddCircle} from '@mui/icons-material';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import PaidIcon from '@mui/icons-material/Paid';
// Reducers
import { useDispatch } from 'react-redux';
import {setSnackbar} from './../../utils/SnackbarReducer';
import { addPagamento } from '../Mesa/mesaReducer';

export default function PagamentoForm(props) {
    const dispatch = useDispatch();
   
    const initialStateForm = {
      error: false,
      helperText: "",
    };
    // controle dos campos
    const [pagamentoControl, setPagamentoControl] = React.useState(initialStateForm);
    // valores dos campos
    const [pagamento, setPagamento] = React.useState('');
    const handleChange = (event) => {
        setPagamento(event.target.value);
    };
    var valorTotal = 0;
    props.produtos.forEach(element => {
      // console.log(element.produto.price);
      valorTotal = valorTotal + (element.produto.price * element.quantidade);
    });
    // console.log(valorTotal);
    const handleSendForm = () => {
        // Escolha uma opção válida
        if(!(pagamento !== '')){
          setPagamentoControl({
            error: true,
            helperText: "Obrigatório*",
          });
          return false;
        }
        const payload = {
            pagamento: pagamento,
            mesaID: props.id,
        };
        // console.log(pagamento);
        dispatch(addPagamento(payload));
        dispatch(
          setSnackbar(
            true,
            "success",
            "Pagamento efetuado com sucesso!"
          )
      );
        
    };


    return (
        <>
          <List sx={{ width: '100%', minWidth: 360, bgcolor: 'background.paper' }}>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <PaidIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Total A Pagar" secondary={valorTotal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} />
            </ListItem>
            
          </List>
          <Form>
              <Grid container>
                <Grid item xs={6} sm={6} md={12}>
                  <Box sx={{ minWidth: 400 }}>
                      <FormControl fullWidth>
                          <InputLabel id="pagamentoLabel">Pagamento</InputLabel>
                          <Select
                          labelId="pagamentoLabel"
                          id="pagamentoLabel"
                          error={pagamentoControl.error}
                          helpertext={pagamentoControl.helperText}
                          value={pagamento}
                          label="Pagamento"
                          onChange={handleChange}
                          >
                            <MenuItem value={''}>Selecione</MenuItem>
                            <MenuItem value={'Dinheiro'}>Dinheiro</MenuItem>
                            <MenuItem value={'Cartão de Crédito'}>Cartão de Crédito</MenuItem>
                            <MenuItem value={'Cartão de Débito'}>Cartão de Débito</MenuItem>
                          </Select>
                      </FormControl>
                  </Box>
                </Grid>
                
              </Grid>
              <Grid container>
                <Grid item xs={6} sm={6} md={2}>
                    <IconButton onClick={handleSendForm} color="success">
                        <CreditScoreIcon sx={{ height: 38, width: 38 }} />
                    </IconButton>
                </Grid>
              </Grid>
          </Form> 
        </>
        
    )
}
