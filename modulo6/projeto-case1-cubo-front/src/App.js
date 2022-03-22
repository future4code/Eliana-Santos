import { AppBar, Box, Button, Container } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import InputRHF from "./components/RHF/InputRHF";

function App() {
  const form = useForm();
  const { control, handleSubmit, reset } = form;
  const onSubmitForm = (event) => {
    event.preventDefault();
    reset()
  }
  return (
    <Container
      maxWidth={"lg"}
      disableGutters={false}

    >
      <AppBar
        onSubmit={handleSubmit(onSubmitForm)}
        component={'form'}
        sx={{
          display: "flex",
          flexDirection: 'row',
          backgroundColor: '#00b8e2',
          justifyContent: 'center',
          alignItems: 'stretch',
          width:'100%',
          heigh:10,
          gap: 3,
     
        }}>

        <InputRHF
          sx={{
            color:'#fff',
            backgroundColor: '#fff'
          }}
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
