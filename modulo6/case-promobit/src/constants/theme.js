import { createTheme } from "@mui/material/styles";
export let theme = createTheme({
  typography: {
    fontFamily: "Helvica, sans-serif",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#000000",
          "&.MuiButtonBase-root": {
            ":hover": {
              backgroundColor: "#ed8e53",
              color: "#fff",
            },
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          // display: 'inline-block',
          // breakInside:  'avoid-column',
          // wordWrap: "break-word",
          //  breakBefore:'region'

          wordBreak: "break-all",
        },
      },
    },
  },
});
