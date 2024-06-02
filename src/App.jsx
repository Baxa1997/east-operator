// src/App.jsx
import React from "react";
import Button from "@mui/material/Button";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{padding: 20}}>
        <Button variant="contained" color="primary">
          Hello, Material UI!
        </Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
