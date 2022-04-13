import React, { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Card,
  FormControl,
  Pagination,
  Typography,
} from "@mui/material";
import logo from "../../assets/logo.png";
import CancelSharpIcon from "@mui/icons-material/CancelSharp";
import { getGenres, getMovie } from "../../services/Movies";

const Home = () => {
  const [genres, setGenres] = useState([]);
  const [select, setSelect] = useState([]);
  const [movies, setMovies] = useState([]);

  const handleSelect = (event, newSelect) => {
    setSelect(event.target.value, newSelect);
  };
  const onSubmit = () => {};

  useEffect(() => {
    getGenres().then((list) => {
      setGenres(list.genres);
    });
    getMovie().then((list) => {
      console.log(list);
      setMovies(list.results);
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
          height: "92vh",
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
            mt: 5,
          }}
        >
          FILTRE POR:
        </Typography>

        <FormControl
          onSubmit={onSubmit}
          value={select}
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "10px",
            ml: 2,
            mt: 1,
          }}
        >
          {genres.map((genre) => {
            return (
              <Button
                onChange={handleSelect}
                onClick={handleSelect}
                type="submit"
                key={genre.id}
                value={select}
                sx={{
                  backgroundColor: "#fff",
                  color: "#323232",
                  fontSize: "14px",
                  lineHeight: "20px",
                  fontWeight: "700",
                  textAlign: "center",
                  p: 1,
                  pl: 3,
                  pr: 3,
                }}
              >
                {genre.name}
                {select === genre.name && <CancelSharpIcon />}
              </Button>
            );
          })}
        </FormControl>
      </Box>
      <Box>
        {movies.map((movie) => {
          return  <><Card>
            <img src={movie.poster_path} alt="movie" />
          </Card>
          <Typography>{movie.title}</Typography>
          <Typography>{movie.release_date}</Typography>
       </>
        })}
       
      </Box>
    </Box>
  );
};
export default Home;
