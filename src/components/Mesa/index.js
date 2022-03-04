import React from 'react'
// Mui
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

//Icones
import IconButton from '@mui/material/IconButton';
import {AddCircleOutline, Cancel, AddShoppingCart, Receipt} from '@mui/icons-material';
import PaymentIcon from '@mui/icons-material/Payment';
// Imagens
import mesaimg from '../../assets/image/mesa.png';
// reducer
import { useDispatch } from 'react-redux';
import { dialogMesa, formMesa, contaMesa } from './mesaReducer';
// Caixa de Confirmação
import Confirmacao from '../../utils/Confirmacao';
import Form from '../../utils/Form';
import Pagamento from '../Pagamento/';

export default function Mesa(props) {
    const dispatch = useDispatch();
    const [dialog, setDialog] = React.useState({
        message: '',
        status: '',
    });
    return (
        <Grid item xs={6} sm={6} md={3}>
            <Card sx={{ maxWidth: 'xl' }}>
                <CardMedia
                    component="img"
                    alt="Mesa de Restaurante"
                    height="140"
                    image={mesaimg}
                />
                
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.obj.name} {props.obj.id}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.obj.status}
                </Typography>
                </CardContent>
                    {props.obj.status === 'Livre' &&
                        <CardActions>
                            <IconButton color="primary" onClick={() => {
                                setDialog({
                                    message: 'Você deseja mudar o status para "Aberta"?',
                                    status: 'Aberta'
                                });
                                dispatch(dialogMesa({id: props.obj.id, dialog: true}));
                            }}
                            >
                                <AddCircleOutline sx={{ height: 38, width: 38 }} />
                            </IconButton>
                        </CardActions>
                    }
                    {props.obj.status === 'Fechada' &&
                        <CardActions>
                            
                            <IconButton color="error" onClick={() => {
                                setDialog({
                                    message: 'Você deseja mudar o status para "Livre"?',
                                    status: 'Livre'
                                });
                                dispatch(dialogMesa({id: props.obj.id, dialog: true}));
                            }}>
                                <Cancel sx={{ height: 38, width: 38 }} />
                            </IconButton>
                            
                        </CardActions>
                    }
                    {props.obj.status === 'Aberta' &&
                        <CardActions>
                            <IconButton color="info" onClick={() => {
                                dispatch(formMesa({id: props.obj.id, form: true}));
                            }}>
                                <AddShoppingCart sx={{ height: 38, width: 38 }} />
                            </IconButton>
                            
                            <IconButton color="secondary" onClick={() => {
                                setDialog({
                                    message: 'Você deseja pedir a conta?',
                                    status: 'Pediu A Conta'
                                });
                                dispatch(dialogMesa({id: props.obj.id, dialog: true}));
                            }}>
                                <Receipt sx={{ height: 38, width: 38 }} />
                            </IconButton>
                            <IconButton color="error" onClick={() => {
                                setDialog({
                                    message: 'Você deseja mudar o status para "Livre"?',
                                    status: 'Livre'
                                });
                                dispatch(dialogMesa({id: props.obj.id, dialog: true}));
                            }}>
                                <Cancel sx={{ height: 38, width: 38 }} />
                            </IconButton>
                        </CardActions>
                    }
                    {props.obj.status === 'Pediu A Conta' &&
                        <CardActions>
                            <IconButton color="info" onClick={() => {
                                dispatch(formMesa({id: props.obj.id, form: true}));
                            }}>
                                <AddShoppingCart sx={{ height: 38, width: 38 }} />
                            </IconButton>
                            <IconButton color="success" onClick={() => {
                                dispatch(contaMesa({id: props.obj.id, conta: true}));
                                // console.log(props.obj);
                            }}>
                                <PaymentIcon sx={{ height: 38, width: 38 }} />
                            </IconButton>
                            <IconButton color="error" onClick={() => {
                                setDialog({
                                    message: 'Você deseja mudar o status para "Livre"?',
                                    status: 'Livre'
                                });
                                dispatch(dialogMesa({id: props.obj.id, dialog: true}));
                            }}>
                                <Cancel sx={{ height: 38, width: 38 }} />
                            </IconButton>
                            
                            
                        </CardActions>
                    }
               
            </Card>
            <Confirmacao id={props.obj.id} message={dialog.message} status={dialog.status} open={props.obj.dialog}/>
            <Form id={props.obj.id} open={props.obj.form} produtos={props.obj.produtos}/>
            <Pagamento id={props.obj.id} open={props.obj.conta} produtos={props.obj.produtos}/>
        </Grid>
        
    )
}
