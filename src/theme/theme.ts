import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      primaryPure: "#292278",
      primaryLight: "#C9C8DD",
      primaryMedium: "#9490BB",
      primaryDark: "#0f0a44",
      secondaryPure: "#03A6A6",
      secondaryLight: "#D6E7FF",
      secondaryMedium: "#5D37EE",
      secondaryDark: "#482CAF",
    },
    product: {
      pjPure: "#5232C9",
      pjLight: "#D4CCF1",
      pjMedium: "#A898E4",
      pjDark: "#3C20A5",
    },
    neutral: {
      lowPure: "#000000",
      lowLight: "#A3A3A3",
      lowMedium: "#666666",
      lowDark: "#292929",
    },
    feedback: {
      warningPure: "#EF001C",
      warningLight: "#D9BBFB",
      warningMedium: "#6D469B",
      warningDark: "#4E148F",
      helperPure: "#FF8A00",
      helperLight: "#FFE3C2",
      helperMedium: "#CC6E00",
      helperDark: "#7A4200",
    },
  },
  fonts: {
    family: "Montserrat",
    regular: "400",
    medium: "600",
    bold: "700",
  },
  lineHeight: {
    brand: {
      default: "100%",
      xs: "115%",
      sm: "120%",
      md: "133%",
      lg: "150%",
      xl: "170%",
      xxl: "200%",
    },
  },
  fontSizes: {
    brand: {
      xxxs: "12px",
      xxs: "14px",
      xs: "16px",
      sm: "20px",
      md: "24px",
      lg: "32px",
      xl: "40px",
      xxl: "48px",
      xxxl: "64px",
      display: "80px",
      giant: "89px",
    },
  },
  radii: {
    brand: {
      none: "0px",
      sm: "8px",
      md: "16px",
      lg: "24px",
      circular: "50%",
    },
  },
  border: {
    brand: {
      none: "0px",
      hairline: "1px",
      thin: "2px",
      thick: "4px",
      heavy: "8px",
    },
  },
  opacity: {
    brand: {
      semiOpaque: "0.72",
      intense: "0.64",
      medium: "0.32",
      light: "0.16",
      semiTransparent: "0.08",
    },
  },
});

export default theme;
