import React,{ StrictMode } from 'react'
import ReactDOM,{ createRoot } from 'react-dom/client'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import './index.css'
import App from './App.jsx'
import MovieDetails from './MovieDetails.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/movie/:id" element={<MovieDetails/>}/>
      </Routes>
    </Router>
  </StrictMode>,
)
