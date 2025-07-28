import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Hour from './assets/Hour/Hour.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hour />
  </StrictMode>,
)
