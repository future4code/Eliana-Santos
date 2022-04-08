import React from "react";

import { Typography } from "@mui/material";

import pizza from "../../assets/pizza.png";
import { SplashScr } from "./styled";

const SplashScreen = () => {
  return (
    <SplashScr>
      <img src={pizza} alt="logo" />
      <Typography
        color={"#fff"}
        sx={{ mt: 2 }}
        textAlign={"center"}
        variant={"h4"}
        fontFamily={"Nunito"}
        fontWeight={"bold"}
        fontSize={"50px"}
      >
        Delivery
      </Typography>
    </SplashScr>
  );
};
export default SplashScreen;
