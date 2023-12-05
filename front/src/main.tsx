import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './Providers/User/UserContext'
import { ContactProvider } from './Providers/User/ContactsContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ContactProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </ContactProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
