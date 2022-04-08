import { Box, Divider, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CardP from "../components/Card/Card";
import pizza from "../assets/pizza.png";
import SplashScreen from "../components/SplashScreen/SplashScreen";
import Button from "@mui/material/Button";
const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return isLoading ? (
    <SplashScreen />
  ) : (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#9c27b0",
        width: "100%",
        height: "100vh",
        p: 0,
        m: 0,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row-reverse",
          alignItems: "center",
          alignContent: "center",
          justifyContent: "space-around",
          ml: 2,
          mt: 1,
          mb: 1,
        }}
      >
        <Typography
          color={"#fff"}
          sx={{ mr: 4 }}
          textAlign={"center"}
          variant={"h4"}
          fontFamily={"Nunito"}
          fontWeight={"bold"}
          borderRadius={"20px"}
        >
          Escolha a sua pizza!
        </Typography>
        <img
          src={pizza}
          alt="pizza"
          style={{ width: "100px", height: "100px" }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "white",
          width: "100%",
          height: "100vh",
          p: 0,
          m: 0,
          borderStartEndRadius: "30px",
          borderStartStartRadius: "30px",
        }}
      >
        <Typography
          sx={{ mt: 1, mb: 1 }}
          fontFamily={"Nunito"}
          textAlign={"center"}
          variant={"h4"}
        >
          MENU
        </Typography>
        <Divider />
        <CardP />
        <CardP />
        <CardP />
        <CardP />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#9c27b0",
          width: "100%",
          height: "49px",
          p: 0,
          m: 0,
          boxSizing: 'border-box',
          position: 'fixed',
          bottom: 0,
        
        }}
      >
        <Button variant={'text'} sx={{width:'50%'}}>Ver Pedidos</Button>
      </Box>
    </Box>
  );
};
export default Home;
