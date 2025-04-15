import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RedSquare, BlueSquare, OrangeSquare } from './Square.jsx'
import HexColor from './Hexcolor.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HexColor />
    <RedSquare />
    <OrangeSquare />
    <BlueSquare />
  </StrictMode>,
)
