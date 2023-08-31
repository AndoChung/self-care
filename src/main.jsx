import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Beginning from './prompts/Beginning'
import Prompt1 from './prompts/Prompt1'
import Prompt2 from './prompts/Prompt2'
import Prompt3 from './prompts/Prompt3'
import Prompt4 from './prompts/Prompt4'
import Prompt5 from './prompts/Prompt5'

import P1R1 from './responses/P1R1'
import P1R2 from './responses/P1R2'
import P2R1 from './responses/P2R1'
import P4R1 from './responses/P4R1'
import P5R1 from './responses/P5R1'


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
  },
  {
    path: "/prompt1/response2",
    element: <P1R2 />
  },
  {
    path: "/prompt2",
    element: <Prompt2 />
  },
  {
    path: "/prompt2/response1",
    element: <P2R1 />
  },
  {
    path: "/prompt3",
    element: <Prompt3 />
  },
  {
    path: "/prompt4",
    element: <Prompt4 />
  },
  {
    path: "/prompt4/response1",
    element: <P4R1 />
  },
  {
    path: "/prompt5",
    element: <Prompt5 />
  },
  {
    path: "/prompt5/response1",
    element: <P5R1 />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

