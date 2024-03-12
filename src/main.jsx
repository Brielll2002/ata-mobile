import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
//

import Welcome from './routes/Welcome.jsx'
import Aluno from './routes/Aluno.jsx'
import Professor from './routes/Professor.jsx'

import { 
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Welcome/>
      },
      {
        path: 'aluno',
        element: <Aluno/>
      },
      {
        path: 'professor',
        element: <Professor/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
