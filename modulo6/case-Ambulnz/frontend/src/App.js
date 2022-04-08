import React from "react";

import { ThemeProvider } from "@mui/material";
import { BrowserRouter } from 'react-router-dom'

import Router from './routes/Router'
import { theme } from "./constants/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </ThemeProvider>
  );
}

export default App;
