import React, { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Button,
  FormControl,
  Pagination,
  Typography,
} from "@mui/material";
import logo from "../../assets/logo.png";
import CancelSharpIcon from "@mui/icons-material/CancelSharp";
import { getGenres, getMovie } from "../../services/Movies";
import { formatDate } from "../../util/formatDate";
import { useNavigate } from "react-router-dom";
import { goToDetailsPage } from "../../routes/coordinator";
import { BASE_POSTER } from "../../constants/url";

const Home = () => {
  const history = useNavigate();
  const [genres, setGenres] = useState([]);
  const [select, setSelect] = useState([]);
  const [movies, setMovies] = useState([]);

  const handleSelect = (event, newSelect) => {
    setSelect(event.target.value, newSelect);
  };

  const onSubmit = () => {};

  const handleClickDetails = (id) => {
    if (id) goToDetailsPage(history, id);
  };

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
          alignItems: {
            lg: "flex-start",
            md: "flex-start",
            xs: "center",
            sm: "center",
          },
          backgroundColor: "#5C16C5",
          width: "100%",
          height: "56px",
          pl: {
            lg: 15,
            md: 15,
          },
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
            fontSize: {
              lg: "48px",
              md: "48px",
              xs: "24px",
              sm: "24px",
            },
            fontWeight: "700",
            lineHeight: {
              lg: "56px",
              md: "56px",
              xs: "28px",
              sm: "28px",
            },
            mr: "115px",
            ml: 2,
            mt: {
              lg: 15,
              md: 15,
              xs: 13,
              sm: 13,
            },
          }}
        >
          Milh??es de filmes, s??ries e pessoas para descobrir. Explore j??.
        </Typography>
        <Typography
          sx={{
            color: "#fff",
            fontSize: "14px",
            fontWeight: 700,
            fontStyle: "normal",
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
            justifyContent: { md: "center", lg: "center" },
            rowGap: { xs: 1, sm: 1, md: 2, lg: 2 },
            columnGap: 1,
            mt: 2,
            ml: 2,
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
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-start",
          columnGap: 1,
          rowGap: 2,
          mt: 4,
          ml: 4,
        }}
      >
        {movies.map((movie) => {
          return (
            <>
              <Box key={movie.id} onClick={() => handleClickDetails(movie.id)}>
                <img
                  src={`${BASE_POSTER}${movie.poster_path}`}
                  alt="movie"
                  style={{ borderRadius: "4px" }}
                />

                <Box sx={{}}>
                  <Typography
                    sx={{
                      width: "175px",
                      fontSize: {
                        lg: "16px",
                        md: "16px",
                        xs: "14px",
                        sm: "14px",
                      },
                      lineWeight: {
                        lg: "24px",
                        md: "24px",
                        xs: "20px",
                        sm: "20px",
                      },
                      fontWeight: 700,
                      fontStyle: "normal",
                    }}
                  >
                    {movie.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#646464",
                      fontSize: {
                        lg: "14px",
                        md: "14px",
                        xs: "12px",
                        sm: "12px",
                      },
                      lineWeight: {
                        lg: "24px",
                        md: "24px",
                        xs: "18px",
                        sm: "18px",
                      },
                      fontWeight: 700,
                      fontStyle: "normal",
                    }}
                  >
                    {formatDate(movie.release_date)}
                  </Typography>
                </Box>
              </Box>
            </>
          );
        })}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mb: 8,
          mt: 2,
          color: "#2D0C5E",
          fontSize: "16px",
          fontWeight: 700,
          lineHeight: "24px",
        }}
      >
        <Pagination />
      </Box>
    </Box>
  );
};
export default Home;
