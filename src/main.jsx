import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { VentasProvider } from './Components/VentasContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <VentasProvider>
      <App />
    </VentasProvider>
  </React.StrictMode>,
)