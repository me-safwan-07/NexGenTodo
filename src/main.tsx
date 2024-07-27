import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { UserContextProvider } from './contexts/UserProvider.tsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </BrowserRouter>
)
