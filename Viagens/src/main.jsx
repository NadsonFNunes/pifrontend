import React from 'react'
import ReactDOM from 'react-dom/client'
import { UserContextProvider } from './contexts/UserContext.jsx'
import { TaskContextProvider } from './contexts/TaskContext.jsx'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <UserContextProvider>
    <TaskContextProvider>
      <App />
    </TaskContextProvider>
  </UserContextProvider>
</React.StrictMode>,
)
