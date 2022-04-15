import * as React from "react";
import PropTypes from "prop-types";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export function CircularProgressWithLabel(props) {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        borderRadius: "100px",
        width: "80px",
        height: "80px",
      }}
    >
      <CircularProgress
        style={{ width: "80px", height: "80px" }}
        thickness={4.6}
        sx={{ color: "#14FF00" }}
        variant="determinate"
        {...props}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#14FF00",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          textAlign={"center"}
          color="#14FF00"
          sx={{ fontSize: "16px", lineHeight: "38px", fontWeight: 700 }}
        >
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};
