import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import favicon from "./assets/BasBas.jpeg"

const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
link.type = 'image/png'; // or 'image/svg+xml' / 'image/x-icon'
link.rel = 'shortcut icon';
link.href = favicon;
document.getElementsByTagName('head')[0].appendChild(link);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)