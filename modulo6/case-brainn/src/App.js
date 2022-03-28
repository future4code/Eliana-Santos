import React from 'react'
import { Box, Typography } from '@mui/material';
import ButtonSelect from './components/ButtonSelect';
import Trevo from './img/trevo.png'

function App() {
  return (
    <Box

      disableGutters={false}
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(12, 1fr)",
        //   rowGap: 1,
        columnGap: 4,
        backgroundColor: '#6BEFA3',
        width: '100%',
        m: 0,
        p: 0,
        borderTopLeftRadius: '70%',
        borderBottomLeftRadius: '70%',
      }}>

      <Box sx={{
       // gridColumn: 'span 4',
        backgroundColor: '#6BEFA3',
        // width: '100%',
        height: '90vh',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      

      }}>
        <ButtonSelect />

        <img src={Trevo} alt='trevo' />
        <Typography>
          MEGA SENA
        </Typography>

        <Typography variant='subtitle1'>
          Concurso
        </Typography>
        <Typography>
          4531 – 07/04/2020
        </Typography>

      </Box>

    </Box >
  );
}

export default App;
