import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from '@/store/store'
import './index.css'
import App from './App.tsx'

import { ThemeProvider } from '@/components/ThemeProvider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider defaultTheme="dark">
        <App />
      </ThemeProvider>
    </Provider>
  </StrictMode>,
)
