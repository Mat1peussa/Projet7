import * as React from "react";
import ReactDOM from 'react-dom/client'
//import * as ReactDOM from "react-dom";
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import App from "./App";
import Home from './pages/Home';
import APropos from "./pages/APropos";
import ErrorPage from "./pages/ErrorPages";
import FicheLogement from "./pages/FicheLogement";
import logements from './gallery.json'
import './styles.scss';


const router = createBrowserRouter([ 
  { path: '/', 
    element: <App/>, 
    children: [ 
      { path: '', 
        element: <Home/>
      },
      {
        path: 'apropos',
        element: <APropos/>,
      }, 
      {
        path:"/ficheLogement/:id",
        element:<FicheLogement/>,
        errorElement:<ErrorPage/>,
        loader:async ({ params }) => {
          const res = logements.find(index => index.id === params.id)
          if (!res) {
            throw new Response("Not Found", { status: 404 });
          } 
          return(
            null
          )
        }
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
