import { createTheme } from "@mui/material/styles";

export const Theme = createTheme({
  palette: {
    primary: {
      main: "#121212",
      light: "#383838",
      dark: "#000000",
      contrastText: '#ffffff',
    },
    secondary: {
      main: "#1976d2",
      light: "#63a4ff",
      dark: "#004ba0",
      contrastText: '#ffffff',
    }
  }
});