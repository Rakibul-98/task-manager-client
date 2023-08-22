import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home/Home';
import Banner from './Home/components/Banner/Banner';
import Tasks from './Tasks/Tasks';


const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>,
    children:[
      {
        path:"/",
        element:<Banner/>
      },
      {
        path:"/tasks",
        element:<Tasks/>,
        loader: ()=> fetch("http://localhost:5000/tasks")
      },
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
reportWebVitals();
