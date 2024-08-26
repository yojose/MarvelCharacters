import React from 'react';
import './styles/index.css';
import './styles/app.css';
import './styles/icons.css';

import './styles/search.css';

import { RouterProvider } from "react-router-dom";
import { router } from './router/router'
import { DefineGlobalContext } from './components/Contexts/globalContect';

function App() {
  return (
    <DefineGlobalContext>
      <RouterProvider router={router} />
    </DefineGlobalContext>
  );
}

export { App };