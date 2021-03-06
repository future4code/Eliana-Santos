import React, { useContext, useEffect, useState } from "react";
import { Box, Divider, Typography } from "@mui/material";
import CardP from "../components/Card/CardP";
import pizza from "../assets/pizza.png";
import SplashScreen from "../components/SplashScreen/SplashScreen";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { goToRequest } from "../routes/coordinator";
import { getMenu } from "../services/Menu";
import { GlobalContext } from "../contexts/GlobalContext";
const Home = () => {
  const history = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [menu, setMenu] = useState([]);
  const { states, setters } = useContext(GlobalContext);
  
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    getMenu().then((list) => {
      setMenu(list);
    });
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
          color="#fff"
          sx={{ mr: 4 }}
          textAlign="center"
          variant="h4"
          fontFamily="Nunito"
          fontWeight="bold"
          borderRadius="20px"
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
          fontFamily="Nunito"
          textAlign="center"
          variant="h4"
        >
          MENU
        </Typography>
        <Divider />

        {menu.map((itemMenu) => {
          return (
            <CardP key={itemMenu.id} value={itemMenu.id} itemMenu={itemMenu} />
          );
        })}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#9c27b0",
          width: "100%",
          height: "75px",
          position: "fixed",
          bottom: 0,
        }}
      >
        <Button
          onClick={() => goToRequest(history)}
          type="submit"
          variant="text"
          sx={{
            width: "50%",
            color: "#ffff",
            fontSize: " 22px",
            fontFamily: "Nunito",
            fontWeight: "bold",
          }}
        >
          Ver Pedidos
        </Button>
      </Box>
    </Box>
  );
};
export default Home;
