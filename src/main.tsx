import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { ScrollProvider } from './context/ScrollContext.tsx'

import '@fontsource/space-grotesk/700.css';
import { ThemeProvider } from './components/Global/ThemeContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      {/* <SmoothScroll/> */}
      <ScrollProvider>
                <ThemeProvider>
        <App />
        </ThemeProvider>
      </ScrollProvider>
    </BrowserRouter>
  </StrictMode>,
)
