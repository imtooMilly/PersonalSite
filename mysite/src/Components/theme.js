import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    background: '#000000', // Black background for the entire app
    text: '#E2E2B6', // Text color
    primary: '#950101', // Other theme colors
  },
  styles: {
    global: {
      body: {
        font: 'Roboto',
        bg: 'background', // Apply background color from theme
        color: 'text', // Apply text color from theme
      },
    },
  },
});

export default theme;