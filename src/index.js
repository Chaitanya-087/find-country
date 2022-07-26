import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ThemeProvider } from "./helpers/useTheme";
import { HashRouter } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <React.StrictMode>
      <ThemeProvider >
        <App />
      </ThemeProvider>
    </React.StrictMode>
  </HashRouter>
);