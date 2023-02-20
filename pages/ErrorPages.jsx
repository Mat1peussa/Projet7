import React from 'react';
import { useRouteError } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  const navigate = useNavigate()
  return (
      <div className="App">
        <div className='App-sansFooter'>
          <Header/>
          <div id="error-page">
            <div className='body'>
              <div className='errorMessage'>
                <h1>404</h1>
                <p>Oups! La page que vous demandez n'existe pas.</p>
              </div>
              <span onClick={() => navigate("/")}>Retourner sur la page d'accueil</span>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    
    
  )
}