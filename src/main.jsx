import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {DarkModeProvider} from './Componentes/DarkModeContext';
import Finvero from "./Componentes/Finvero/Finvero.jsx";
import OpenFinance from "./Componentes/OpenFinance/OpenFinance.jsx";  
import MebloStyle from './Componentes/MebloStyle/MebloStyle.jsx';


import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/finvero',
    element: <Finvero /> ,
  },
  {
    path: '/open-finance',
    element: <OpenFinance />,
  },
  {
    path: '/meblostyle',
    element: <MebloStyle />,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DarkModeProvider>
    <RouterProvider router={router} />
    </DarkModeProvider> 
  </React.StrictMode>,
)
