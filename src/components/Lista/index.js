import React from 'react'
import Grid from '@mui/material/Grid';
// Components
import Mesa from "../../components/Mesa";
import { useSelector } from 'react-redux';

export default function Lista() {
    const mesas = useSelector((state) => state.mesas.value);
    const listMesas = mesas.map((mesa) => 
        <Mesa key={"mesa" + mesa.id} obj={mesa} />
    );

  return (
    <Grid container spacing={2}>
        {listMesas}
    </Grid>
  )
}
