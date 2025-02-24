import { StrictMode } from 'react'
import { BrowserRouter} from "react-router-dom"; // Fixed import
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Toaster } from 'react-hot-toast';


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
  <Toaster position='top-center' />
    <App />
  </BrowserRouter>
  </StrictMode>,
)
