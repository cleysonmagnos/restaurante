import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { setSnackbar } from "./SnackbarReducer";

const CustomizedSnackbars = () => {
  const dispatch = useDispatch();
  const snackbarOpen = useSelector(state => state.snackbar.snackbarOpen);
  const snackbarType = useSelector(state => state.snackbar.snackbarType);
  const snackbarMessage = useSelector(state => state.snackbar.snackbarMessage);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(setSnackbar(false, snackbarType, snackbarMessage));
  };

  return (
    
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleClose}
          color={snackbarType}
        >
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
  );
};

export default CustomizedSnackbars;
