import React from "react";
import { Box, Button, Divider, Typography } from "@mui/material";
import Cart from "../components/Cart/Cart";
import { useNavigate } from "react-router-dom";
import { goToHome } from "../routes/coordinator";
import InputRHF from "../components/RHF/InputRHF";
import { useForm } from "react-hook-form";
import validation from "../util/validation";

const CartPage = () => {
  const history = useNavigate();
  const form = useForm(validation);
  const { control, handleSubmit } = form;

   const onSubmit = () => {
   // signUp(form.getValues(), history);
  }; 

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
          mt: 5,
        }}
      ></Box>
      <Box
      onSubmit={handleSubmit(onSubmit)}
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
          Resumo do Pedido
        </Typography>
        <Divider />
        <InputRHF
          name="name"
          control={control}
          autoComplete={false}
          label="Digite seu nome"
          sx={{ m: 0, p: 0, ml: 10, mr: 10, mt: 2, mb: 2 }}
        >
          Digite seu Nome
        </InputRHF>
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
            fontWeight: "bold",
          }}
          
        >
          Finalizar
        </Button>
      </Box>
    </Box>
  );
};
export default CartPage;
