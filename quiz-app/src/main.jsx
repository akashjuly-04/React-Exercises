import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import QuizApp from './QuizApp.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QuizApp />
  </StrictMode>,
)
