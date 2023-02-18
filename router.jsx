import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import Home from './pages/Home';
import APropos from "./pages/APropos";
import ErrorPage from "./pages/ErrorPages";
import FicheLogement from "./pages/FicheLogement";
import logements from './gallery.json'

export const router = createBrowserRouter([ 
    { path: '/', 
        element: <App/>, 
        errorElement:<ErrorPage/>,
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
              loader:async ({ params }) => {
                const res = logements.find(index => index.id === params.id)
                if (!res) {
                throw new Response("Not Found", { status: 404 });
                } 
                return(
                null
                )
            }
            }
        ],
      
    },
  ]);