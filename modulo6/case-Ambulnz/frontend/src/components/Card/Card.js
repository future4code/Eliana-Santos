import React from "react";

import { Box, CardContent, Fab, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Paper from "@mui/material/Paper";

const CardP = () => {
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
          textAlign={"center"}
          color={"#9c27b0"}
          variant="h4"
          fontFamily={"Nunito"}
        >
          Calabresa
        </Typography>

        <Typography
          textAlign={"justify"}
          variant={"subtitle1"}
          fontSize={"18px"}
        >
          Molho de tomate, calabresa, cebola, queijo mozzarela
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
          textAlign={"center"}
          variant={"h6"}
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
          <Fab size="small" color="secondary" aria-label="add" sx={{  zIndex: 3}}>
            <RemoveIcon />
          </Fab>

          <Typography
            sx={{ fontFamily: "Nunito", fontSize: "22px", fontWeight: "bold" }}
          >
            2
          </Typography>
          <Fab size="small" color="secondary" aria-label="add" sx={{  zIndex: 3}}>
            <AddIcon />
          </Fab>
        </Box>
      </Box>
    </Paper>
  );
};
export default CardP;
