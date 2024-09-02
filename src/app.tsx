import React from 'react';
import './styles/index.css';
import './styles/app.css';
import './styles/icons.css';
import './styles/fonts.css';
import './styles/search.css';

import { RouterProvider } from "react-router-dom";
import { router } from './router/router'
import { FavoritesContextProvider } from "./components/Contexts/favoritesContect";

function App() {
  return (
    <FavoritesContextProvider>
        <RouterProvider router={router} />
    </FavoritesContextProvider>
  );
}

export { App };