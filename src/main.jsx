import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Home from './Home';
import Connect from './Contact file/Connect';
import About from './about file/About';
import Menu from './menu file/Menu';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>  ,
    children: [
      {
        path: "/",
        element: <Home></Home>  ,
      },
      {
        path: "/contact",
        element:  <Connect></Connect>  ,
      },
      {
        path: "/about",
        element:   <About></About>  ,
      },
      {
        path: "/menu",
        element:   <Menu></Menu>  ,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
