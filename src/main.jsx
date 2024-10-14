import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { setupHighlighter } from './setup.js'
import App from './App.jsx'
import './index.css'

setupHighlighter()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
