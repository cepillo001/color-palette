import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { BrowserRouter } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import { ColorPalettesProvider } from './context/ColorPalettesContext';
import { FavoritesProvider } from './context/FavoritesContext';
import { FiltersProvider } from './context/FiltersContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <UserProvider>
        <ColorPalettesProvider>
          <FavoritesProvider>
            <FiltersProvider>
                <App />
            </FiltersProvider>
          </FavoritesProvider>
        </ColorPalettesProvider>
      </UserProvider>
    </HashRouter>
  </React.StrictMode>
);


reportWebVitals();
