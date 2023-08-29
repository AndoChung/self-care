import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Beginning from './prompts/Beginning.jsx'
import Prompt1 from './prompts/Prompt1'
import P1R1 from './responses/P1R1'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Beginning />
  },
  {
    path: "/prompt1",
    element: <Prompt1 />
  },
  {
    path: "/prompt1/response1",
    element: <P1R1 />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)