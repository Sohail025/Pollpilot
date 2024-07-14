// theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      // Customize these values according to your needs
    },
  },
});

export default theme;
