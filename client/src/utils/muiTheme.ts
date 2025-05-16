import { theme as scTheme } from "@/utils/theme";
import { createTheme } from "@mui/material/styles";

export const muiTheme = createTheme({
  palette: {
    primary: {
      main: scTheme.PRIMARY_7,
    },
    secondary: {
      main: scTheme.GREY_5,
    },
    error: {
      main: scTheme.RED_DARK,
    },
    background: {
      default: scTheme.WHITE,
      paper: "#20202c",
      // paper: scTheme.GREY_0,
    },
    text: {
      primary: scTheme.GREY_9,
      secondary: scTheme.GREY_7,
    },
  },
  typography: {
    fontFamily: scTheme.BODY_FONT,
    h1: {
      fontFamily: scTheme.HEADING_FONT,
    },
    h2: {
      fontFamily: scTheme.HEADING_FONT,
    },
    h3: {
      fontFamily: scTheme.HEADING_FONT,
    },
    h4: {
      fontFamily: scTheme.HEADING_FONT,
    },
    h5: {
      fontFamily: scTheme.HEADING_FONT,
    },
    h6: {
      fontFamily: scTheme.HEADING_FONT,
    },
  },
  shape: {
    borderRadius: parseInt(scTheme.BORDER_RADIUS),
  },
  components: {
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
      },
      styleOverrides: {
        root: {
          marginBottom: "1rem",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: scTheme.BORDER_RADIUS,
          padding: "0.6rem 1.5rem",
          transition: scTheme.TRANSITION,
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          color: "white",
        },
      },
    },
  },
});
