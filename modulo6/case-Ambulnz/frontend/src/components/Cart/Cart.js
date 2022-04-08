import React from "react";

import { Box, Button, CardContent, Typography } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import Paper from "@mui/material/Paper";

const Cart = () => {
  return (
    <Paper
      elevation={5}
      sx={{
        borderRadius: "20px 20px 20px 20px",
        m: 0,
        p: 0,
        ml: 2,
        mr: 2,
        mt: 2,
      }}
    >
      <CardContent sx={{ display: "flex", flexDirection: "column" }}>
        <Typography
          textAlign="center"
          color="#9c27b0"
          variant="h4"
          fontFamily="Nunito"
        >
          Calabresa
        </Typography>

        <Typography
          textAlign="center"
          variant="subtitle1"
          sx={{ fontFamily: "Nunito", fontSize: "22px", fontWeight: "bold" }}
        >
          Quantidade: 1
        </Typography>
      </CardContent>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
          gap: 2,
          mb: 1,
        }}
      >
        <Typography
          textAlign="center"
          variant="h6"
          sx={{ fontFamily: "Nunito", fontSize: "23px", fontWeight: "bold" }}
        >
          R$ 45,00
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",

            gap: 2,
            mb: 1,
          }}
        >
          <Button size="small" color="secondary">
            <ClearIcon />
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};
export default Cart;
