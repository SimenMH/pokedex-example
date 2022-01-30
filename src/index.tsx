import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import backgroundImage from './assets/background-01.png';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    background: #404040;
    background-image: url(${backgroundImage});
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    overflow-x: hidden;
  }
`;

const theme = {
  cardColors: {
    default: '#C1C18F',
    normal: '#C1C18F',
    grass: '#68DDB3',
    poison: '#8D6CC3',
    fire: '#F7786B',
    water: '#66B4CD',
    flying: '#9A7FEB',
    bug: '#BACD84',
    electric: '#FFEB9B',
    ground: '#ECD8A0',
    fairy: '#FFC2C2',
    fighting: '#AA6262',
    psychic: '#FF8DB3',
    steel: '#B1B1BA',
    ice: '#CAEDED',
    ghost: '#9666C7',
    rock: '#9D8D45',
    dragon: '#9C4AFF',
  },
};

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
