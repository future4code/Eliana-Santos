import React from "react";

import { ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";

import Router from "./routes/Router";
import { theme } from "./constants/theme";
import GlobalState from "./contexts/GlobalState";

function App() {
  return (
    <GlobalState>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </GlobalState>
  );
}

export default App;
