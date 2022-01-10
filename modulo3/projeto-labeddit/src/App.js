import { ThemeProvider } from "@mui/material/styles";
import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import theme from "./constants/theme";
import Router from "./router/Router";

const App = () => {
  const token = localStorage.getItem("token")
  const [rightButtonText, setRightButtonText] = useState(token ? "Logout" : "Login")

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header rightButtonText={rightButtonText} setRightButtonText={setRightButtonText} />
        <Router setRightButtonText={setRightButtonText} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
