import React, { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import ReactPlayer from "react-player";

import logo from "../../assets/logo.png";
import { BASE_IMG, BASE_POSTER, BASE_VIDEO } from "../../constants/url";
import {
  getCredits,
  getMovieById,
  getRecommendations,
  getVideos,
} from "../../services/Movies";
import { formatDate, formatDateMovie } from "../../util/formatDate";
import { useParams } from "react-router-dom";
import { CircularProgressWithLabel } from "../../components/CircularProgress/CircularProgressWithLabel";

const DetailsPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [urlImage, setUrlImage] = useState("");
  const [width, setWidth] = useState(window.innerWidth);
  const [casts, setCasts] = useState([]);
  // const [crews, setCrews] = useState([]);
  const [recommends, setRecommends] = useState([]);
  const [videos, setVideos] = useState([]);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    if (id) {
      getMovieById(id).then((movie) => {
        setMovie(movie);
        setUrlImage(`${BASE_IMG}w342${movie.poster_path}`);
      });
    }
    if (id) {
      getCredits(id).then((list) => {
        setCasts(list.cast);
        // setCrews(list.crew);
      });
    }
    if (id) {
      getRecommendations(id).then((list) => {
        setRecommends(list.results);
      });
    }
    if (id) {
      getVideos(id).then((list) => {
        setVideos(list.results);
      });
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [width]);

  useEffect(() => {
    switch (width) {
      case 780:
        if (movie.poster_path) {
          setUrlImage(`${BASE_IMG}w780${movie.poster_path}`);
        }
        break;

      case 500:
        if (movie.poster_path) {
          setUrlImage(`${BASE_IMG}w500${movie.poster_path}`);
        }
        break;

      case 342:
        if (movie.poster_path) {
          setUrlImage(`${BASE_IMG}w342${movie.poster_path}`);
        }
        break;

      case 185:
        if (movie.poster_path) {
          setUrlImage(`${BASE_IMG}w185${movie.poster_path}`);
        }
        break;
      case 154:
        if (movie.poster_path) {
          setUrlImage(`${BASE_IMG}w154${movie.poster_path}`);
        }
        break;

      case 92:
        if (movie.poster_path) {
          setUrlImage(`${BASE_IMG}w92${movie.poster_path}`);
        }
        break;

      default:
        break;
    }
  }, [width]);

  return (
    <Box sx={{ m: 0, p: 0 }}>
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
          flexDirection: {
            xs: "column",
            sm: "column",
            md: "row",
            lg: "row",
          },
          alignItems: {
            xs: "center",
            sm: "center",
            md: "center",
            lg: "center",
          },
          backgroundColor: "#2D0C5E",
          width: "100%",
          height: {
            xs: "1658.66px",
            sm: "1658.66px",
            md: "600px",
            lg: "600px",
          },
          m: 0,
          p: 0,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: {
              xs: "center",
              sm: "center",
              md: "flex-start",
              lg: "flex-start",
            },
            ml: { md: 5, lg: 5 },
            mt: { md: 10, lg: 10 },
          }}
        >
          <CardMedia
            component="img"
            src={urlImage}
            sx={{
              borderRadius: "8px",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              mt: 15,
              width: { xs: "186px", sm: "186px", md: "383px", lg: "383px" },
              height: { xs: "279px", sm: "279px", md: "574px", lg: "574px" },
            }}
          />
        </Box>
        <Box sx={{ ml: 1 }}>
          <Typography
            sx={{
              color: "#fff",
              fontSize: "32px",
              fontWeight: 700,
              lineHeight: "38px",
              mr: 2,
              ml: 2,
              mt: {
                lg: 4,
                md: 4,
                xs: 4,
                sm: 4,
              },
            }}
          >
            {movie.original_title}
          </Typography>
          <Typography
            sx={{
              color: "#fff",
              fontSize: "18px",
              fontWeight: 400,
              fontStyle: "normal",
              lineHeight: "24px",
              ml: 2,
              mt: 1,
            }}
          >
            {movie.adult ? "18" : "16"} anos
          </Typography>
          <Typography
            sx={{
              color: "#fff",
              fontSize: "18px",
              fontWeight: 400,
              fontStyle: "normal",
              lineHeight: "24px",
              ml: 2,
            }}
          >
            {`${formatDateMovie(movie.release_date)} (BR)`}
          </Typography>

          <Typography
            sx={{
              color: "#fff",
              fontSize: "18px",
              fontWeight: 400,
              fontStyle: "normal",
              lineHeight: "24px",
              ml: 2,
              mb: 5,
            }}
          >
            {movie.genres?.map((genre) => {
              return `${genre.name}, `;
            })}
          </Typography>
          {/* 
        <Typography
          sx={{
            color: "#fff",
            fontSize: "18px",
            fontWeight: 400,
            fontStyle: "normal",
            lineHeight: "24px",
            ml: 2,
            mt: 2,
          }}
        >
          {movie.runtime}
        </Typography> */}

          <Box sx={{ display: "flex", alignItems: "center", ml: 2 }}>
            <CircularProgressWithLabel value={movie.vote_average} />
            <Typography
              sx={{
                width: "102px",
                color: "#fff",
                fontSize: "16px",
                fontWeight: 400,
                fontStyle: "normal",
                lineHeight: "20px",
                ml: 2,
                mt: 2,
              }}
            >
              Avaliação dos Usuários
            </Typography>
          </Box>

          <Typography
            sx={{
              color: "#fff",
              fontSize: "20px",
              fontWeight: 700,
              fontStyle: "normal",
              lineHeight: "24px",
              ml: 2,
              mt: 6,
            }}
          >
            Sinopse
          </Typography>
          <Typography
            textAlign={"left"}
            sx={{
              color: "#fff",
              fontSize: "16px",
              fontWeight: 400,
              fontStyle: "normal",
              lineHeight: "24px",
              ml: 2,
              mt: 2,
              mr: 2,
            }}
          >
            {movie.overview}
          </Typography>
          {/*        {crews.map((crew) => {
          return (
            <>
              <Typography>{crew.name}</Typography>
              <Typography>{crew.known_for_department}</Typography>
            </>
          );
        })}  */}
        </Box>
      </Box>
      <Box
        sx={{ backgroundColor: "#E5E5E5", pt: { xs: 4, sm: 4, md: 15, lg: 15 } }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: "28px",
              fontWeight: 700,
              fontStyle: "normal",
              lineHeight: "32px",
              ml: { xs: 2, sm: 2, md: 5, lg: 5 },
              //  mt: { xs: 5, sm: 5, md: 14, lg: 14 },
            }}
          >
            Elenco original
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              overflow: "auto",
              overflowX: "scroll",
              columnGap: "50px",
              ml: { xs: 2, sm: 2, md: 3, lg: 3 },
              mr: { sx: 2, sm: 2, md: 3, lg: 3 },
            }}
          >
            {casts?.map((cast) => {
              return (
                <Box
                  sx={{
                    p: 0,
                    m: 0,
                    mb: 2,
                    mt: 2,
                    display: "flex",
                    flexDirection: "row",
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    borderRadius: "4px",
                  }}
                >
                  <Card
                    key={cast.id}
                    sx={{
                      width: "191px",
                      height: "336px",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <CardContent
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <CardMedia
                        component={"img"}
                        src={`${BASE_POSTER}${cast.profile_path}`}
                      />
                      <Typography
                        sx={{
                          fontSize: "18px",
                          fontWeight: 700,
                          fontStyle: "normal",
                          lineHeight: "30px",
                          ml: 2,
                        }}
                      >
                        {cast.original_name}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "16px",
                          fontWeight: 400,
                          fontStyle: "normal",
                          lineHeight: "24px",
                          ml: 2,
                        }}
                      >
                        {cast.character}
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              );
            })}
          </Box>
        </Box>

        <Box>
          <Typography
            sx={{
              fontSize: "28px",
              fontWeight: 700,
              fontStyle: "normal",
              lineHeight: "32px",
              ml: 2,
              mt: 5,
            }}
          >
            Trailer
          </Typography>
          <Box sx={{ ml: 2 }}>
            {videos?.map((video) => {
              return (
                <ReactPlayer
                  width="360px"
                  height="200px"
                  url={`${BASE_VIDEO}${video.key}`}
                />
              );
            })}
          </Box>
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: "28px",
              fontWeight: 700,
              fontStyle: "normal",
              lineHeight: "32px",
              ml: 2,
              mt: 5,
            }}
          >
            Recomendações
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "flex-start",
              columnGap: 4,
              rowGap: 2,
              mt: 4,
              ml: 3,
            }}
          >
            {recommends?.map((recommend) => {
              return (
                <>
                  <Box key={recommend.id}>
                    <img
                      src={`${BASE_POSTER}${recommend.poster_path}`}
                      alt="movie"
                      style={{ borderRadius: "4px" }}
                    />

                    <Box sx={{}}>
                      <Typography
                        sx={{
                          width: "150px",
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
                        {recommend.title}
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
                        {formatDate(recommend.release_date)}
                      </Typography>
                    </Box>
                  </Box>
                </>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default DetailsPage;
