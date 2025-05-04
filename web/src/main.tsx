import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import NavbarProvider from './components/NavbarProvider.tsx'
import { SidebarProvider } from './components/ui/sidebar.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SidebarProvider>
      <NavbarProvider>
          <Layout>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </Layout>
      </NavbarProvider>
    </SidebarProvider>
  </StrictMode>
)
