import React from "react";
import { Box, Button, Divider, Typography } from "@mui/material";
import Cart from "../components/Cart/Cart";
import { useNavigate } from "react-router-dom";
import { goToHome } from "../routes/coordinator";
const CartPage = () => {
  const history = useNavigate();
  return (
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
          mb: 1,
        }}
      >
    {/*     <Typography
          color={"#fff"}
          sx={{ mr: 4 }}
          textAlign={"center"}
          variant={"h4"}
          fontFamily={"Nunito"}
          fontWeight={"bold"}
          borderRadius={"20px"}
        >
          Resumo do Pedido
        </Typography>
        <img
          src={pizza}
          alt="pizza"
          style={{ width: "100px", height: "100px" }}
        /> */}
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
          Pedidos
        </Typography>
        <Divider />
        <Cart />
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
          p: 0,
          m: 0,
          boxSizing: "border-box",
          position: "fixed",
          bottom: 0,
        }}
      >
        <Button
          onClick={() => goToHome(history)}
          type="submit"
          variant="text"
          sx={{
            width: "50%",
            color: "#ffff",
            fontSize: " 22px",
            fontFamily: "Nunito",
            fontWeight: "15%",
          }}
        >
          Finalizar
        </Button>
      </Box>
    </Box>
  );
};
export default CartPage;
