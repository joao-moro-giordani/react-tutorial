import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppTarefas from './pages/tarefas/AppTarefas.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <AppTarefas /> */}
    <App />
  </StrictMode>,
)
