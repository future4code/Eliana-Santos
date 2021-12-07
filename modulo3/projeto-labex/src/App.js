import React from "react";
import { createGlobalStyle } from 'styled-components';
import { Router } from "./route/Router";


const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
 
}
body {
  margin: 0;
  padding: 0;
  width: 100vw;
  min-height: 100vh;
  
}
`

function App() {
  return (
    <div>
      <GlobalStyle />
      <Router />
    </div>

  )
}

export default App;
