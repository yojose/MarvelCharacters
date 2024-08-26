import React from 'react';
import './styles/index.css';
import './styles/app.css';
import './styles/icons.css';

import './styles/search.css';

import { RouterProvider } from "react-router-dom";
import { router } from './router/router'
import { createContext, useState } from "react";
import { GlovalContext, GlovalContextData } from "./types/globalContextTypes"


const GlobalContext = createContext<GlovalContext | undefined>(undefined);

function App() {
  const [globalContext, setGlobalContext] = useState<GlovalContextData>();
  const context={globalContext, setGlobalContext};
  return (
    <GlobalContext.Provider value={context}>
      <RouterProvider router={router} />
    </GlobalContext.Provider>
  );
}

export { App, GlobalContext };