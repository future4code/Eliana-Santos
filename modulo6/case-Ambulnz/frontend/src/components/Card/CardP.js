import React, { useContext, useEffect, useState } from "react";

import { Box, Button, CardContent, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Paper from "@mui/material/Paper";
import { GlobalContext } from "../../contexts/GlobalContext";

const CardP = (props) => {
  let [quantity, setQuantity] = useState(0);
  const { states, setters } = useContext(GlobalContext);

  useEffect(() => {
    console.log(states.itemsSelected)
  }, [states.itemsSelected]);

  const handleAddItem = (e) => {
    setQuantity((quantity += 1));

    if(states.itemsSelected.length === 0){
      setters.setItemsSelected(props.itemMenu);
    } else{
      states.itemsSelected.forEach((item) => {
        console.log('batata', item)
        if (item.id === props.itemMenu.id) {
          item.quantity += 1;
        } else {
          console.log('add novo')
          setters.setItemsSelected(props.itemMenu);
        }
      });

    }


  };

  const handleRemoveItem = (e) => {
    if (quantity > 0) {
      setQuantity((quantity -= 1));
    }
  };

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
          {props.itemMenu.name}
        </Typography>

        <Typography
          textAlign="center"
          variant="subtitle1"
          fontSize="20px"
          fontFamily="Nunito"
        >
          {props.itemMenu.ingredients}
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
          sx={{
            fontFamily: "Nunito",
            fontSize: "23px",
            fontWeight: "bold",
          }}
        >
          R$ {props.itemMenu.price}
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
          <Button onClick={handleRemoveItem} color="secondary">
            <RemoveIcon />
          </Button>

          <Typography
            sx={{
              fontFamily: "Nunito",
              fontSize: "22px",
              fontWeight: "bold",
            }}
          >
            {quantity}
          </Typography>
          <Button onClick={handleAddItem} color="secondary">
            <AddIcon />
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};
export default CardP;
