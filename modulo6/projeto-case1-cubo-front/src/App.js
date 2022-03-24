import React from "react";

import { useForm } from "react-hook-form";
import { ThemeProvider } from "styled-components";
import { AppBar, Box, Button, Container, Typography } from "@mui/material";

import { Grafic } from "./components/Grafic/Grafic";
import InputRHF from "./components/RHF/InputRHF";
import DenseTable from "./components/Table/DenseTable";
import { theme } from "./constants/theme";

function App() {
  const form = useForm();
  const { control, handleSubmit, reset } = form;
  const onSubmitForm = (event) => {
    event.preventDefault();
    reset()
  }
  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth={"lg"}
        disableGutters={false}
      /*        sx={{
               display: "grid",
               gridTemplateColumns: "repeat(12, 1fr)",
             }} */
      >
        <AppBar
          onSubmit={handleSubmit(onSubmitForm)}
          component={'form'}
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            rowGap: 1,
            columnGap: 2,
            //mt: 2,
            //flexDirection: 'row',
            backgroundColor: '#00b8e2',
            justifyContent: 'center',
            alignItems: 'stretch',
            width: '100%',
            mb: 10
          }}>

          <InputRHF
            sx={{
              gridColumn: {
                md: 'span 3',
                sm: 'span 3',
                xs: 'span 6'
              },
              width: '100%',
              //mt: 3,
              //mb: 4
              backgroundColor: '#fff',
              borderRadius: '5px',
              color: '#000'
            }}
            label="First name"
            name='firstName'
            control={control}>
          </InputRHF>
          <InputRHF
            sx={{
              gridColumn: {
                md: 'span 3',
                sm: 'span 3',
                xs: 'span 6'
              },
              width: '100%',
              backgroundColor: '#fff',
              borderRadius: '5px',
              color: '#000'
            }}
            label="Last name"
            name='lastName'
            control={control}>
          </InputRHF>
          <InputRHF
            sx={{
              gridColumn: {
                md: 'span 3',
                sm: 'span 3',
                xs: 'span 6'
              },
              width: '100%',
              backgroundColor: '#fff',
              borderRadius: '5px',
              color: '#000'
            }}
            label="Participation"
            name='participation'
            control={control}>
          </InputRHF>

          <Button variant="outlined"
            sx={{
              gridColumn: 'span 3',
              width: '50%',
              height: '50px',
              fontWeight: 'bold',
              fontSize: '16px',
              borderColor: '#fff',
              color: '#fff',
              ':hover': {
                backgroundColor: '#fff',
                color: '#000000',
                borderColor: '#000000',
              }
            }}>
            SEND
          </Button>
        </AppBar>

        <Typography
          variant="h2"
          textAlign={"center"}>
          Data
        </Typography>
        <Typography
          variant="subtitle1"
          textAlign={"center"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>

        <Box sx={{
          width: '100%',

        }}>
          <Box>
            <DenseTable />
          </Box>

          <Box>
            <Grafic
              /*            labels={result.graficoValores.labels}
                         dataSetComAporte={result.graficoValores.dataSetComAporte}
                         dataSetSemAporte={result.graficoValores.dataSetSemAporte} */
              sx={{
                gridColumn: 'span 6',
              }} />
          </Box>
        </Box>

      </Container>

    </ThemeProvider>
  );
}

export default App;
