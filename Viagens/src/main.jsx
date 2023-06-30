import React from 'react'
import ReactDOM from 'react-dom/client'
import { UserContextProvider } from './contexts/UserContext.jsx'
import { UserTiketProvider } from './contexts/TiketContext.jsx'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <UserContextProvider>
    <UserTiketProvider>
      <App />
    </UserTiketProvider>
  </UserContextProvider>
</React.StrictMode>,
)
