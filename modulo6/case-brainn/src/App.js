import React, { useEffect, useState } from "react";
import { Box, FormControl, MenuItem, Select, Typography } from "@mui/material";
import Trevo from "./assets/trevo.png";
import {
  getConcursos,
  getConcursosById,
  getLoterias,
} from "./services/loterias";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./constants/theme";

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
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          backgroundColor: "#6BEFA3",
        }}
      >
        <Box
          sx={{
             display:'grid',
            gridColumn: "span 6",
            backgroundColor: "#6BEFA3",
            width: "50vw",
            height: "100vh",
            m:'5px'
          }}
        >
          
          <FormControl>
            <Select
              onChange={onChangeSelect}
              value={loteria.id}
              sx={{ backgroundColor: "#fff", borderRadius:'15px'}}
            >
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

          <Typography
            sx={{
              fontFamily: "Open Sans",
              fontSize: "30px",
              color: "#fff",
              fontStyle: "normal",
              lineHeight: "37px",
              fontWeight: 700,
            }}
          >
            {loteria.nome.toUpperCase()}
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{
              fontFamily: "Open Sans",
              color: "#fff",
              fontStyle: "normal",
              lineHeight: "17px",
              fontWeight: 500,
              fontSize: "14px",
            }}
          >
            CONCURSO
          </Typography>
          <Typography
            sx={{
              fontFamily: "Open Sans",
              color: "#fff",
              fontStyle: "normal",
              lineHeight: "24px",
              fontWeight: 700,
              fontSize: "20px",
            }}
          >
            {concurso.id} – {concurso.data}
          </Typography>
        </Box>
        <Box
          sx={{
            //gridColumn: "span 12",
            //columnGap: ,
            backgroundColor: "#d3d3d3",
            width: "100vw",
            borderTopLeftRadius: "40%",
            borderBottomLeftRadius: "50%",
            boxShadow: "2px 0px 2px 2px rgba(0, 0, 0, 0.25)",
            display: "flex",
            flexDirection: "row",
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
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "27px",
                  fontWeight: 700,
                  width: "5rem",
                  height: "5rem",
                  fontFamily: "Open Sans",
                  fontStyle: "normal",
                  lineHeight: "33px",
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
