import React, { useEffect, useState } from "react";

import { Box, FormControl, MenuItem, Select, Typography } from "@mui/material";
import { ThemeProvider } from "@material-ui/styles";
import moment from "moment";

import theme from "./constants/theme";
import Trevo from "./assets/trevo.png";
import { DIA, LOTOF, LOTOM, MEGA, QUINA, TIME } from "./constants/color";
import {
  getConcursos,
  getConcursosById,
  getLoterias,
} from "./services/loterias";

function App() {
  const [loterias, setLoterias] = useState([]);
  const [loteria, setLoteria] = useState({ id: 0, nome: "mega-sena" });
  const [concursos, setConcursos] = useState([]);
  const [concurso, setConcurso] = useState({
    id: "2359",
    loteria: 0,
    numeros: ["31", "32", "39", "42", "43", "51"],
    data: new Date(),
  });
  const [background, setBackground] = useState(MEGA);

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
    if (e.target.value >= 0) {
      setLoteria(loterias.find((loteria) => loteria.id === e.target.value));
      changeBackgroundColor(e.target.value);
    }
  };

  const changeBackgroundColor = (number) => {
    switch (number) {
      case 0:
        setBackground(MEGA);
        break;
      case 1:
        setBackground(QUINA);
        break;
      case 2:
        setBackground(LOTOF);
        break;
      case 3:
        setBackground(LOTOM);
        break;
      case 4:
        setBackground(TIME);
        break;
      case 5:
        setBackground(DIA);
        break;
      default:
        setBackground(MEGA);
    }
  };

  const dateToString = (value) => {
    if (value) {
      return moment(value).format("DD-MM-YYYY");
    } else {
      return "";
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "column",
            md: "row",
          },
          backgroundColor: { background },
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridColumn: "span 6",
            backgroundColor: { background },
            width: "50vw",
            height: "100vh",
            m: "5px",
          }}
        >
          <FormControl sx={{ display: "flex", ml: 11, mt: 10 }}>
            <Select
              onChange={onChangeSelect}
              value={loteria.id}
              sx={{
                backgroundColor: "#fff",
                borderRadius: "15px",
                width: {
                  xs: "50%",
                  sm: "50%",
                  md: "50%",
                },
              }}
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
          <Box
            sx={{
              display: "flex",
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center",
              gap: "20px",
            }}
          >
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
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              ml: 11,
              gap: "10px",
            }}
          >
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
              {concurso.id} – {dateToString(concurso.data)}
            </Typography>
          </Box>
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
