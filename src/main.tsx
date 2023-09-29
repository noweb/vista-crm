import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
// import {Home} from './pages/home/index.tsx'
import { Login } from "./pages/auth/login.tsx";
import { CreateClient } from "./pages/createClient/index.tsx";
import { Clients } from "./pages/clients/index.tsx";
import { Properties } from "./pages/properties/index.tsx";
import { Owners } from "./pages/owners/index.tsx";
import { CompleteRegistation } from "./pages/completeRegistration/index.tsx";
import { Contracts } from "./pages/contracts/index.tsx";
import { Team } from "./pages/team/index.tsx";
import { PendingProperties } from "./pages/pendingProperties/index.tsx";
import { StickyNotes } from "./pages/stickyNotes/index.tsx";
import { DataMetrics } from "./pages/dataMetrics/index.tsx";
import { Plantation } from "./pages/plantation/index.tsx";
import {PageError} from "./pages/pageError/index.tsx"

const router = createBrowserRouter([
  {
    errorElement: <PageError/>
  },
  {
    path: '/',
    element: <Login/>,
  },
  // {
  //   path: '/dashboard',
  //   element: <Home/>
  // },
  {
    path: '/create-client',
    element: <CreateClient/>
  },
  {
    path: '/clients',
    element: <Clients/>
  },
  {
    path: '/properties',
    element: <Properties/>
  },
  {
    path: '/owners',
    element: <Owners/>
  },
  {
    path: '/complete-registration',
    element: <CompleteRegistation/>
  },
  {
    path: '/pending-properties',
    element: <PendingProperties/>
  },
  {
    path: '/contracts',
    element: <Contracts/>
  },
  {
    path: '/team',
    element: <Team/>
  },
  {
    path: '/sticky-notes',
    element: <StickyNotes/>
  },
  {
    path: '/data-metrics',
    element: <DataMetrics/>
  },
  {
    path: '/plantation',
    element: <Plantation/>
  }
]) 

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
