import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {DarkModeProvider} from './Componentes/DarkModeContext';
import Finvero from "./Componentes/Finvero/Finvero.jsx";
import OpenFinance from "./Componentes/OpenFinance/OpenFinance.jsx";  
import MebloStyle from './Componentes/MebloStyle/MebloStyle.jsx';
import Transborde from './Componentes/Transborde/Transborde.jsx';


import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/finvero',
    element: 
    <Suspense fallback={<div>Loading...</div>}>
    <Finvero />
    </Suspense> ,
  },
  {
    path: '/open-finance',
    element: 
    <Suspense fallback={<div>Loading...</div>}>
    <OpenFinance />
    </Suspense>,
  },
  {
    path: '/meblostyle',
    element: 
    <Suspense fallback={<div>Loading...</div>}>
    <MebloStyle />
    </Suspense>,
  },
  {
    path: '/transborde',
    element: 
    <Suspense fallback={<div>Loading...</div>}>
    <Transborde />
    </Suspense>,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DarkModeProvider>
    <RouterProvider router={router} />
    </DarkModeProvider> 
  </React.StrictMode>,
)
