import React, { useEffect, useState } from "react";
import { Box, FormControl, MenuItem, Select, Typography } from "@mui/material";
import Trevo from "./assets/trevo.png";
import {
  getConcursos,
  getConcursosById,
  getLoterias,
} from "./services/loterias";
import { ThemeProvider } from "@material-ui/styles";

function App() {
  const [loterias, setLoterias] = useState([]);
  const [loteria, setLoteria] = useState({ id: 0, nome: "mega-sena" });
  const [concursos, setConcursos] = useState([]);
  const [concurso, setConcurso] = useState({
    id: "2359",
    loteria: 0,
    numeros: ["31", "32", "39", "42", "43", "51"],
    data: "27/03/2022",
  });

  useEffect(() => {
    getLoterias().then((list) => {
      setLoterias(list);
    });

    getConcursos().then((list) => {
      setConcursos(list);
    });
  }, []);

  useEffect(() => {
    if (loteria.id >= 0 && concursos.length > 0) {
      getConcursosById(
        concursos.find((concurso) => concurso.loteriaId === loteria.id)
          .concursoId
      ).then((concurso) => {
        setConcurso(concurso);
      });
    }
  }, [loteria]);

  const onChangeSelect = (e) => {
    console.log(e.target.value);
    if (e.target.value >= 0) {
      setLoteria(loterias.find((loteria) => loteria.id === e.target.value));
    }
  };

  return (
    <ThemeProvider>
      <Box
        sx={{
          display: "flex",
          minHeight: "100vh",
          //gridTemplateColumns: "repeat(12, 1fr)",
          //heigth: "100vh",
          //width: "100%",
          m: 0,
          p: 0,
          backgroundColor: "#6BEFA3",
          // boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          //zIndex: 2,
        }}
      >
        <Box
          sx={{
            //gridColumn: "span 12",
            backgroundColor: "#6BEFA3",
            width: "50vw",
            height: "100vh",
            // boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            p: 0,
            m: 0,
            //  zIndex: 2
          }}
        >
          <FormControl>
            <Select onChange={onChangeSelect} value={loteria.id}>
              {loterias.map((lot) => {
                return (
                  <MenuItem key={lot.id} value={lot.id}>
                    {lot.nome.toUpperCase()}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>

          <img src={Trevo} alt="trevo" />

          <Typography variant="h5">{loteria.nome.toUpperCase()}</Typography>

          <Typography variant="subtitle1">CONCURSO</Typography>
          <Typography>
            {concurso.id} – {concurso.data}
          </Typography>
          <p>{concurso.numeros}</p>
        </Box>
        <Box
          // disableGutters={false}
          sx={{
            //gridColumn: "span 12",
            //   rowGap: 1,
            //columnGap: ,
            backgroundColor: "#d3d3d3",
            width: "100vw",
            m: 0,
            p: 0,
            borderTopLeftRadius: "40%",
            borderBottomLeftRadius: "50%",
            //zIndex: 9,
            //border:'solid',
            boxShadow: "2px 0px 2px 2px rgba(0, 0, 0, 0.25)",
            display: "flex",
            flexDirection: "row",
            //justifyContent: "center",
            // alignItems: "stretch",
            //alingContent: "space-around",
            alignContent: "center",
            flexWrap: "wrap",
            pl: "10%",
            gap: "15px",
            justifyContent: "center",
          }}
        >
          {concurso.numeros.map((numero) => {
            return (
              <Box
                sx={{
                  borderRadius: "50%",
                  backgroundColor: "#fff",
                  // textAlign: "center",
                  //boxShadow: "2px 2px 2px 2px rgba( 0,0,0, 0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "22px",
                  fontWeight: "bold",
                  width: "5rem",
                  height: "5rem",
                }}
              >
                {numero}
              </Box>
            );
          })}
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
