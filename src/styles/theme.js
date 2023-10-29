import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    // Darks
    darkBackground: "#15202B",
    darkText: "#FFFFFF",
    darkSecondaryText: "#8899A6",
    darkHover: "#22303C",
    darkCard: "#192734",
  
  
    // Lights
    lightBackground: "#E2E8F0",
    lightText: "#55198b",
    lightCard: '#E2E8F0',
  
  
    // General
    buttonColor: {
      50: '#000000',
      500:'#55198b',
    }
  },
  fonts: {
    heading: `'Fira Code', Roboto`,
    body: `'Fira Code', Roboto`,
  }
});

export default theme;