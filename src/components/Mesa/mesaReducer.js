import {createSlice} from "@reduxjs/toolkit";

export const mesaSlice = createSlice({
  name: 'mesas',
  initialState: {value: [
    {id: 1, name: 'Mesa', status: 'Livre', produtos: [], pagamento: [], dialog: false, form: false, conta: false},
    {id: 2, name: 'Mesa', status: 'Livre', produtos: [], pagamento: [], dialog: false, form: false, conta: false},
    {id: 3, name: 'Mesa', status: 'Livre', produtos: [], pagamento: [], dialog: false, form: false, conta: false},
    {id: 4, name: 'Mesa', status: 'Livre', produtos: [], pagamento: [], dialog: false, form: false, conta: false},
    {id: 5, name: 'Mesa', status: 'Livre', produtos: [], pagamento: [], dialog: false, form: false, conta: false},
    {id: 6, name: 'Mesa', status: 'Livre', produtos: [], pagamento: [], dialog: false, form: false, conta: false},
  ]},
  reducers: {
    addMesa: (state, action) =>{
      // Adicionando uma mesa
    },
    statusMesa: (state, action) =>{
      // alterando status
      state.value.forEach((mesa) => {
        if(mesa.id === action.payload.id){
            mesa.status = action.payload.status;
            if(action.payload.status === 'Livre'){
              mesa.produtos = [];
              mesa.pagamento = [];
            }
        }
      });
    },
    dialogMesa: (state, action) =>{
      // alterando status
      state.value.forEach((mesa) => {
        if(mesa.id === action.payload.id){
            mesa.dialog = action.payload.dialog;
        }
      });
    },
    formMesa: (state, action) =>{
      // alterando status
      state.value.forEach((mesa) => {
        if(mesa.id === action.payload.id){
            mesa.form = action.payload.form;
        }
      });
    },
    contaMesa: (state, action) =>{
      // alterando status
      state.value.forEach((mesa) => {
        if(mesa.id === action.payload.id){
            mesa.conta = action.payload.conta;
        }
      });
    },
    addProduto: (state, action) =>{
      // Adicionando um produto, father
      state.value.forEach((mesa) => {
        if(mesa.id === action.payload.mesaID){
            mesa.produtos.push(action.payload);
        }
      });
      
    },
    addPagamento: (state, action) =>{
      // Adicionando um produto, father
      state.value.forEach((mesa) => {
        if(mesa.id === action.payload.mesaID){
            mesa.pagamento.push(action.payload);
            mesa.conta = false;
            mesa.status = 'Fechada';
        }
      });
      
    },
    deleteProduto: (state, action) => {
      state.value.forEach((mesa) => {
        if(mesa.id === action.payload.mesaID){
            mesa.produtos.splice(action.payload.key, 1);
            // console.log(mesa.id, action.payload.key);
        }
      });
    }
  }

});

export const {statusMesa, addPagamento, addMesa, contaMesa, addProduto, deleteProduto, dialogMesa, formMesa} = mesaSlice.actions;
export default mesaSlice.reducer;