import React, { useEffect, useState } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import Trevo from "./assets/trevo.png";
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
      </Box>
    </Box>
  );
}

export default App;
