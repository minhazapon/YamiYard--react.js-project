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
import Login from './firebase/Login';
import SignUp from './firebase/SignUp';
import AuthContext from './firebase/AuthContext';
import PrivateRoute from './firebase/PrivateRoute';

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
        element:  <PrivateRoute><Connect></Connect></PrivateRoute>   ,
      },
      {
        path: "/about",
        element:  <PrivateRoute><About></About></PrivateRoute>     ,
      },
      {
        path: "/menu",
        element:  <PrivateRoute><Menu></Menu></PrivateRoute>     ,
      },
      {
        path: "/login",
        element:  <Login></Login>  ,
      },
      {
        path: "/up",
        element:  <SignUp></SignUp> ,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <AuthContext>
      
    <RouterProvider router={router} />

    </AuthContext>
    
  </StrictMode>,
)
