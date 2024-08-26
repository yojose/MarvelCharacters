import React from 'react';
import {createBrowserRouter, Navigate } from "react-router-dom";
import {Character} from "../pages/character/character"
import {Characters} from "../pages/characters/characters";
import {MainPageLayout} from "../pages/layout/mainPageLayout";
import ErrorPage from "../pages/errorPage/errorPage"

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPageLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Navigate to="/charactersList" replace /> },
        {
          path: "charactersList",
          element: <Characters />,
        },
        {
          path: "character/:id",
          element: <Character />,
        }
      ],
    },
  
  ]);