import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import { BrowserRouter as Router } from "react-router-dom";

import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

let theme = createTheme();
theme = responsiveFontSizes(theme);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider theme={theme}>
    <Router>
      <App />
    </Router>
  </ThemeProvider>
);
