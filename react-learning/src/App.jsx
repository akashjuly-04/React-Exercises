import { useState } from 'react'
import Header from './Components/Header'
import MainContent from './Components/MainContent'
import Footer from './Components/Footer'
import Greeting from './Components/Greeting'
import Weather from './Components/Weather'
import StyleCard from './Components/StyleCard'
import './App.css'
import ProductInfo from './Components/ProductInfo'
import Counter from './Components/Counter'
import TodoList from './Components/TodoList'
import Profile from './Components/Profile'
import BasicEffects from './Components/BasicEffects'
import CounterEffects from './Components/CounterEffects'
import FetchDataEffects from './Components/FetchDataEffects'
import { Userprovider } from './Components/UserContext'
import UpdateUser from "./Components/UpdateUser"
import UserProfile from './Components/UserProfile'

function App() {
  
  return (
    <>
     <Userprovider>
      <UserProfile/>
      <UpdateUser/>
     </Userprovider>
    </>
  )
}

export default App
