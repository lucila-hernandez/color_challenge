import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RedSquare, BlueSquare, OrgangeSquare } from './Square.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RedSquare />
    <OrgangeSquare />
    <BlueSquare />
  </StrictMode>,
)
