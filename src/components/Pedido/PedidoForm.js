import React from 'react'
import Form from "../../layouts/Form";
import {Grid } from '@material-ui/core';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import jsonData from '../../assets/json/catalogo.json';
//Icones
import IconButton from '@mui/material/IconButton';
import {AddCircle} from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { addProduto } from '../Mesa/mesaReducer';




export default function PedidoForm(props) {
    const dispatch = useDispatch();
    const initialStateValue = {id: 0, price: 0};
    const initialStateForm = {
      error: false,
      helperText: "",
    };
    // controle dos campos
    const [qtdeField, setQtdeField] = React.useState(initialStateForm);
    const [produtoField, setProdutoField] = React.useState(initialStateForm);
    // valores dos campos
    const [value, setValue] = React.useState(initialStateValue);
    const [quantidade, setQuantidade] = React.useState(0);
    const produtos = jsonData;
    const produtosMap = produtos.map((option) => {
        const optionsWithCat = option.items.map((item) => {
            return {
               category: option.name, catImage: option.image_url, ...item
            }
        });
        return {
            optionsWithCat, ...option
        };
    });
    var produtosArray = [];
    for (let index = 0; index < produtosMap.length; index++) {
        const element = produtosMap[index].optionsWithCat;
        produtosArray = produtosArray.concat(element);
    }

    const handleSendForm = () => {
        // Escolha uma opção válida
        if(!(value.id > 0)){
          setProdutoField({
            error: true,
            helperText: "Escolha uma opção válida*",
          });
          return false;
        }
        if(!(quantidade > 0)){
          setQtdeField({
            error: true,
            helperText: "Obrigatório*",
          });
          return false;
        }
        const payload = {
          quantidade: quantidade,
          produto: value,
          mesaID: props.id,
        };
        dispatch(addProduto(payload));
    };


    return (
        <Form>
            <Grid container>
                <Grid item xs={12} sm={12} md={12}>
                    <Autocomplete
                        id="produtoID"
                        options={produtosArray.sort((a, b) => -b.category.localeCompare(a.category))}
                        groupBy={(option) => option.category}
                        getOptionLabel={(option) => option.name}
                        autoHighlight
                        fullWidth
                        onChange={(event, newValue) => {
                          if(newValue !== null){
                            setValue(newValue);
                            setProdutoField(initialStateForm);
                          }else{
                            setValue(initialStateValue);
                          }
                        }}
                        isOptionEqualToValue={(option, value) => option.id === value.id}
                        renderOption={(props, option) => (
                            <Box component="li" sx={{ '& > img': { mr: 4, flexShrink: 0 } }} {...props}>
                              <img
                                  loading="lazy"
                                  width="20"
                                  src={option.image_url}
                                  srcSet={option.image_url}
                                  alt=""
                              />
                              {option.name}
                            </Box>
                        )}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                error={produtoField.error}
                                helperText={produtoField.helperText}
                                label="Escolha um produto"
                                inputProps={{
                                    ...params.inputProps,
                                    autoComplete: 'new-password', // disable autocomplete and autofill
                                }}
                            />
                        )}
                    />
                </Grid>
            </Grid>
           
            <Grid container>
              <Grid item xs={6} sm={6} md={4}>
                <TextField
                  id="quantidadeProduto"
                  label="Quantidade"
                  type="number"
                  error={qtdeField.error}
                  helperText={qtdeField.helperText}
                  InputProps={{ inputProps: { min: 1 } }}
                  onChange={(event) => {
                    setQuantidade(event.target.value);
                    if(event.target.value > 0){
                      setQtdeField(initialStateForm);
                    }
                    
                  }}
                />
              </Grid>
              <Grid item xs={6} sm={6} md={4}>
                <FormControl fullWidth sx={{ m: 1 }}>
                  <InputLabel htmlFor="outlined-adornment-amount">Valor</InputLabel>
                  <OutlinedInput
                    id="valorProduto"
                    value={(quantidade * value.price).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
                    startAdornment={<InputAdornment position="start"></InputAdornment>}
                    label="Valor"
                    inputProps={{
                      readOnly: true,
                    }}
                  />
                </FormControl>
              </Grid>
              
            </Grid>
            <Grid container>
              <Grid item xs={6} sm={6} md={2}>
                  <IconButton onClick={handleSendForm} color="success">
                      <AddCircle sx={{ height: 38, width: 38 }} />
                  </IconButton>
              </Grid>
            </Grid>
        </Form> 
        
    )
}
