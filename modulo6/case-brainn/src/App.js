import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import ButtonSelect from "./components/ButtonSelect/ButtonSelect";
import Trevo from "./assets/trevo.png";
import { getConcursos, getLoterias } from "./services/loterias";

function App() {
  const [title, setTitle] = useState("");
  const [concurso, setConcurso] = useState([]);

  useEffect(() => {
/*     getLoterias().then((list) => {
      setTitle(list);
    });
    getConcursos().then((list) => {
      setConcurso(list);
    }); */
  }, []);

  const onChangeSelect = (e) => {
    setTitle(e.target.value);
  };

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
            width: "100%",
            height: "100vh",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            p: 0,
            m: 0,
          }}
        >
          <ButtonSelect onChange={onChangeSelect} />

          <img src={Trevo} alt="trevo" />
          {titles.map((title) => {
            return (
              <Typography key={title.id} value={title.id} variant="h5">
                {title.nome.toUpperCase()}
              </Typography>
            );
          })}

          <Typography variant="subtitle1">CONCURSO</Typography>
          <Typography>4531 – 07/04/2020</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
