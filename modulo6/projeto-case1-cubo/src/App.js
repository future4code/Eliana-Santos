import { AppBar, Box, Button, Container } from "@mui/material";
import React from "react";
import InputRHF from "./components/RHF/InputRHF";

function App() {
  const { control, handleSubmit, reset } = form;
  const onSubmitForm = (event) => {
    event.preventDefault();
    reset()
}
  return (
    <Container sx={{
      display: 'grid',
      width: '100%',
      backgroundColor: '#000'
    }} >
      <AppBar 
      onSubmit={handleSubmit(onSubmitForm)}>
      component={'form'} 
      sx={{
        backgroundColor: '#00b8e2'
      }}>
        <Button>OI</Button>
        <InputRHF
          label="First name"
          name='name'
          control={control}>
        </InputRHF>
        <InputRHF
          label="Last name"
          name='name'
          control={control}>
        </InputRHF>
        <InputRHF
          label="Participation"
          name='name'
          control={control}>
        </InputRHF>
        <Button variant="outlined">SEND</Button>
      </AppBar>

      <Box sx={{
        width: '100%',
        backgroundColor: '#00b8e2'
      }}>
        <Box component={'form'}>

        </Box>
        <Box>

        </Box>
      </Box>

    </Container>
  );
}

export default App;
