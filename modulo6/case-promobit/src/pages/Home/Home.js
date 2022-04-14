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
import { formatDate } from "../../util/formatDate";
import { BASE_IMG } from "../../constants/url";

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
          alignItems: {
            md: "center",
            lg: "center",
          },
          backgroundColor: "#2D0C5E",
          width: "100%",
          height: {
            xs: "759.92px",
            sm: "759.92px",
            md: "449px",
            lg: "449px",
          },
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
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            rowGap: 1,
            columnGap: 2,
            // gap: "10px",
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
                  gridColumn: {
                    xs: "span 2",
                    sm: "span 3",
                    md: "span 3",
                    lg: "span 1",
                  },
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
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          rowGap: 1,
          justifyItems: "center",
          alignItems: "center",
          mt: 4,
        }}
      >
        {movies.map((movie) => {
          return (
            <>
              <Box
                sx={{
                  gridColumn: {
                    xs: "span 6",
                    sm: "span 4",
                    md: "span 3",
                    lg: "span 2",
                  },
                }}
              >
                <img src={`${BASE_IMG}${movie.poster_path}`} alt="movie" />

                <Box sx={{}}>
                  <Typography
                    sx={{
                      gridColumn: "span 8",
                      width: "185px",
                    }}
                  >
                    {movie.title}
                  </Typography>
                  <Typography sx={{ gridColumn: "span 8" }}>
                    {formatDate(movie.release_date)}
                  </Typography>
                </Box>
              </Box>
            </>
          );
        })}
      </Box>
    </Box>
  );
};
export default Home;
