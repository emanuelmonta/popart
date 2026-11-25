import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import{router} from "./routes/AppRouter.jsx"
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <RouterProvider router={createBrowserRouter(router)} />
    <Footer />
  </StrictMode>,
)
