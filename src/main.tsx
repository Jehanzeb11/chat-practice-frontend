import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { UserContextProvider } from './context/authContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <UserContextProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  </UserContextProvider>
)
