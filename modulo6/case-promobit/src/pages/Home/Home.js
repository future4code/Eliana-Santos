import React, { useEffect, useState } from "react";
import { AppBar, Box, Button, Typography } from "@mui/material";
import logo from "../../assets/logo.png";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { getGenres } from "../../services/filmes";

const Home = () => {
  const [genres, setGenres] = useState([]);
  const [select, setSelect] = useState("");

  const handleSelect = (event, newSelect) => {
    if (newSelect !== null) {
      setSelect(newSelect);
    }
  };

  useEffect(() => {
    getGenres().then((list) => {
      setGenres(list.genres);
    });
  }, []);

  return (
    <Box>
      <AppBar
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#5C16C5",
          width: "100%",
          height: "56px",
          m: 0,
          p: 0,
        }}
      >
        <img
          src={logo}
          alt="logo"
          style={{ width: "140px", height: "18.21px" }}
        />
      </AppBar>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#2D0C5E",
          width: "100%",
          height: "100vh",
          m: 0,
          p: 0,
        }}
      >
        <Typography
          sx={{
            color: "#fff",
            fontSize: "24px",
            fontWeight: "700",
            lineHeight: "28px",
            mr: "115px",
            ml: 2,
            mt: 13,
          }}
        >
          Milhões de filmes, séries e pessoas para descobrir. Explore já.
        </Typography>
        <Typography
          sx={{
            color: "#fff",
            fontSize: "14px",
            fontWeight: "400",
            lineHeight: "20px",
            ml: 2,
            mt: 4,
          }}
        >
          FILTRE POR:
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "10px",
            ml: 2,
          }}
        >
          {genres.map((genre) => {
            return (
              <Button
                onChange={handleSelect}
                key={genre.id}
                value={genres}
                endIcon={<HighlightOffIcon />}
                sx={{
                  backgroundColor: "#fff",
                  color: "#323232",
                  fontSize: "14px",
                  lineHeight: "20px",
                  fontWeight: "700",
                  textAlign: "center",
                }}
              >
                {genre.name}
              </Button>
            );
          })}
        </Box>
      </Box>
      <Box></Box>
    </Box>
  );
};
export default Home;
