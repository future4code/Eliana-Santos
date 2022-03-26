import React, { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { ThemeProvider } from "styled-components";
import { AppBar, Box, Button, Container, Typography } from "@mui/material";

import { Grafic } from "./components/Grafic/Grafic";
import InputRHF from "./components/RHF/InputRHF";
import DenseTable from "./components/Table/DenseTable";
import { theme } from "./constants/theme";
import InputPercentageRHF from "./components/RHF/InputPercentageRHF";
import formSchemaValidation from "./util/formSchemaValidation";
import { create, getAll } from "./services/user";

function App() {
  const form = useForm(formSchemaValidation);
  const { control, handleSubmit, reset } = form;
  const [users, setUsers] = useState([]);

  const loadUsers = () => {
    getAll().then((list) => {
      setUsers(list)
    })
  }

  useEffect(() => {
    loadUsers();
  }, [])

  const onSubmitForm = () => {
    create(form.getValues()).then(() => {
      loadUsers();
      reset();
    })
      .catch((err) => {
        console.log(err);
        alert(err.message)
      });
  }

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth={"lg"}
        disableGutters={false}
      >
        <AppBar
          onSubmit={handleSubmit(onSubmitForm)}
          component={'form'}
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            rowGap: 1,
            columnGap: 2,
            alignItems: 'center',
            backgroundColor: '#00b8e2',
            justifyItems: 'center',
            width: '100%',
            p: 6,
            paddingLeft: 85
          }}>

          <InputRHF
            sx={{
              gridColumn: {
                lg: 'span 2',
                md: 'span 2',
                sm: 'span 3',
                xs: 'span 6'
              },
              width: '100%',
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
                lg: 'span 2',
                md: 'span 2',
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

          <InputPercentageRHF
            sx={{
              gridColumn: {
                lg: 'span 2',
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
          </InputPercentageRHF>

          <Button
            type='submit'
            variant="outlined"
            sx={{
              gridColumn: {
                lg: 'span 2',
                md: 'span 3',
                sm: 'span 3',
                xs: 'span 6'
              },
              width: '100%',
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

        <Box sx={{
          display: "grid",
          //gridTemplateColumns: "repeat(12, 1fr)",
          rowGap: 1,
          columnGap: 2,
          alignItems: 'center',
          justifyItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          pt: '18%'

        }}>
          <Typography
            variant="h2"
            textAlign={"center"}
            sx={{
              gridColumn: 'span 6',
              fontWeight: 'bold',
              fontSize: '40px',
              color: 'hsl(193deg 17% 26%)'
            }}>
            DATA
          </Typography>
          <Typography
            variant="subtitle1"
            textAlign={"center"}
            sx={{
              gridColumn: 'span 6',
              gap: 2,
              color: 'hsl(193deg 17% 26%)',
              fontSize: '20px'
            }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Typography>
          <Box
            sx={{
              gridColumn: {
                lg: 'span 2',
                md: 'span 3',
                sm: 'span 3',
                xs: 'span 6'
              },
              width: '100%',
              p: 6,
              rowGap: 8
            }}>
            <DenseTable data={users} />
          </Box>

          <Box
            sx={{
              gridColumn: {
                lg: 'span 2',
                md: 'span 3',
                sm: 'span 3',
                xs: 'span 6'
              },
              rowGap: 8,
              columnGap: 6
            }}>
            <Grafic
              users={users}
            /*            labels={result.graficoValores.labels}
                       dataSetComAporte={result.graficoValores.dataSetComAporte}
                       dataSetSemAporte={result.graficoValores.dataSetSemAporte} */
            />
          </Box>
        </Box>

      </Container>

    </ThemeProvider>
  );
}

export default App;
