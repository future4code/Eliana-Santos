import React from "react";
import { Box } from "@mui/material";
/* import ButtonSelect from "./components/ButtonSelect";
import Trevo from "./img/trevo.png"; */

function App() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(12, 1fr)",
        heigth: "100vh",
        width: "100%",
        m: 0,
        p: 0,
      }}
    >
      <Box
        // disableGutters={false}
        sx={{
          gridColumn: "span 12",
          //   rowGap: 1,
          //columnGap: ,
          backgroundColor: "#d3d3d3",
          width: "100%",

          m: 0,
          p: 0,
          //borderTopLeftRadius: "70%",
          //borderBottomLeftRadius: "70%",
        }}
      >
        <Box
          sx={{
            gridColumn: "span 12",
            backgroundColor: "#6BEFA3",
            width: "50%",
            height: "50vh",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            p: 0,
            m: 0,
          }}
        >
          {/*           <ButtonSelect />

          <img src={Trevo} alt="trevo" />
          <Typography>MEGA SENA</Typography>

          <Typography variant="subtitle1">Concurso</Typography>
          <Typography>4531 – 07/04/2020</Typography> */}
        </Box>
      </Box>
    </Box>
  );
}

export default App;
