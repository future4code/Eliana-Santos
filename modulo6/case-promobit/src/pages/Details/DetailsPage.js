import React, { useEffect, useState } from "react";
import { AppBar, Box, Card, Typography } from "@mui/material";
import logo from "../../assets/logo.png";
import { BASE_IMG } from "../../constants/url";
import { getMovieById } from "../../services/Movies";
import { formatDate } from "../../util/formatDate";

const DetailsPage = () => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    getMovieById().then((list) => {
      setDetails(list);
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
        {details.map((detail) => {
          return (
            <>
              <img
                src={`${BASE_IMG}${detail.backdrop_path}`}
                alt="movie"
                style={{ borderRadius: "4px" }}
              />
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: "32px",
                  fontWeight: "700",
                  lineHeight: "38px",
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
                {detail.original_title}
              </Typography>
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: "18px",
                  fontWeight: 400,
                  fontStyle: "normal",
                  lineHeight: "24px",
                  ml: 2,
                  mt: 5,
                }}
              >
                {detail.release_date}-{detail.genres.name}-{detail.runtime}
              </Typography>
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: "16px",
                  fontWeight: 400,
                  fontStyle: "normal",
                  lineHeight: "20px",
                  ml: 2,
                  mt: 5,
                }}
              >
                Avaliação dos Usuários {}
              </Typography>
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: "20px",
                  fontWeight: 700,
                  fontStyle: "normal",
                  lineHeight: "24px",
                  ml: 2,
                  mt: 5,
                }}
              >
                Sinopse
              </Typography>
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: "16px",
                  fontWeight: 400,
                  fontStyle: "normal",
                  lineHeight: "24px",
                  ml: 2,
                  mt: 5,
                }}
              >
                {detail.overview}
              </Typography>
            </>
          );
        })}
      </Box>

      <Box>
        <Box>
          <Typography
            sx={{
              color: "#fff",
              fontSize: "28px",
              fontWeight: 700,
              fontStyle: "normal",
              lineHeight: "32px",
              ml: 2,
              mt: 5,
            }}
          >
            Elenco original
          </Typography>
          <Card>
            <img
              src={`${BASE_IMG}`}
              alt="movie"
              style={{ borderRadius: "4px" }}
            />
            <Typography
              sx={{
                color: "#fff",
                fontSize: "18px",
                fontWeight: 700,
                fontStyle: "normal",
                lineHeight: "30px",
                ml: 2,
                mt: 5,
              }}
            >
              Nome{}
            </Typography>
            <Typography
              sx={{
                color: "#fff",
                fontSize: "16px",
                fontWeight: 400,
                fontStyle: "normal",
                lineHeight: "24px",
                ml: 2,
                mt: 5,
              }}
            >
              atriz(o){}
            </Typography>
          </Card>

          <Box>
            <Typography
              sx={{
                color: "#fff",
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
            <video url={""} />
          </Box>
        </Box>
      </Box>
      <Box>
        <Typography
          sx={{
            color: "#fff",
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
            gridColumn: {
              xs: "span 6",
              sm: "span 4",
              md: "span 3",
              lg: "span 2",
            },
          }}
        >
          <img
            src={`${BASE_IMG}`}
            alt="movie"
            style={{ borderRadius: "4px" }}
          />

          <Box sx={{}}>
            <Typography
              sx={{
                gridColumn: "span 8",
                width: "185px",
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
              {}
            </Typography>
            <Typography
              sx={{
                gridColumn: "span 8",
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
              {formatDate()}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default DetailsPage;
