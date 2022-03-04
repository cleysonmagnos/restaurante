import React from 'react'
import {Grid } from '@material-ui/core';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

// Componentes 
//Icones
import IconButton from '@mui/material/IconButton';
import {Delete} from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { deleteProduto } from '../Mesa/mesaReducer';

export default function PedidoLista(props) {
    const dispatch = useDispatch();
    const produtos = props.produtos;
    // console.log(produtos);
    const listaProdutos = produtos.map((produtoObj, key) => 
      <Grid item xs={12} sm={12} md={12} key={'mesa' + props.id + 'key' + key}>
        <Card sx={{ display: 'flex', height: 200}}>
          <CardMedia
            component="img"
            sx={{ maxWidth: 100 }}
            image={ produtoObj.produto.image_url !== null ? produtoObj.produto.image_url : 'https://pbs.twimg.com/profile_images/1099002964184846338/tp1XAwyF_400x400.png'}
            alt={produtoObj.produto.description}
          />
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography component="div" variant="h5">
                {produtoObj.produto.name}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                Qtde: {produtoObj.quantidade}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                Total: {(produtoObj.quantidade * produtoObj.produto.price).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
              </Typography>
            </CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
              <IconButton onClick={() =>{
                dispatch(deleteProduto({mesaID: props.id, key: key}));
              }} 
              color="error" aria-label="excluirProduto">
                <Delete /> 
              </IconButton>
            </Box>
          </Box>
          
        </Card>
      </Grid>
    );
    return (
      <>
        <Grid container spacing={2}>
          {listaProdutos}
        </Grid>
      </>
        
    )
}
