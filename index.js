import * as React from "react";
import ReactDOM from 'react-dom/client'
//import * as ReactDOM from "react-dom";
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import App from "./App";
import Home from './pages/Home';
import APropos from "./pages/APropos";
import ErrorPage from "./pages/ErrorPages";
import FicheLogement from "./pages/FicheLogement";
import './styles.scss';


const router = createBrowserRouter([ 
  { path: '/', 
    element: <App/>, 
    children: [ 
      {path: '', 
        element: <Home/>
      },
      {
        path: 'apropos',
        element: <APropos/>,
      }, 
      {
        path:"/ficheLogement/:id",
        element: <FicheLogement/>
      },
      {
        path:"*",
        element: <ErrorPage/>
      }
    ],
    
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
<RouterProvider router={router} />
);
