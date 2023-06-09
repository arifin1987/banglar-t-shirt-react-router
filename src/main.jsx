import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Root from './components/Layout/Root';
import OrderReview from './components/OrderReview/OrderReview';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element: <Home></Home>,
        loader:()=> fetch('tshirts.json')
      },
      {
        path:'review',
        element: <OrderReview></OrderReview>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <RouterProvider router={router} />
  </React.StrictMode>,
)
