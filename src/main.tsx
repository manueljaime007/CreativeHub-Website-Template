import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter} from 'react-router-dom'
import { AppRoutes } from './routes/AppRoutes'

import "./assets/css/app.css"
import "./assets/css/fonts.css"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
        <AppRoutes></AppRoutes>
    </BrowserRouter>
  </StrictMode>,
)
