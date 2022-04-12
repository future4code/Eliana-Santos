import { ThemeProvider } from "@mui/material";
import React from "react";
import { theme } from "./constants/theme";
import Home from "./pages/Home/Home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
