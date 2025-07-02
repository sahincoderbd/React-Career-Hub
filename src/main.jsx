import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Statistics from './Layout/Pages/Statistics.jsx';
import AppliedJobs from './Layout/Pages/AppliedJobs.jsx'
import Blog from './Layout/Pages/Blog.jsx'
import StartApplying from './Layout/Pages/StartApplying.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
    children:[
      {
        path:'/statistics',
        element:<Statistics></Statistics>
      },
      {
        path:'/applied-job',
        element:<AppliedJobs></AppliedJobs>
      },
      {
        path:'/blog',
        element:<Blog></Blog>
      },
      {
        path:'/start-applying',
        element:<StartApplying></StartApplying>
      }

    ]
  }
  
] 
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
