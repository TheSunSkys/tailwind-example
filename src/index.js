import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from './themeContext'
import Toggle from './themeToggle'
import Background from './background'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <Background>
        <Toggle />
        <App />
      </Background>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
