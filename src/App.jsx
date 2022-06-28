import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './Component/Header'
import Nav from './Component/Nav'
import Footer from './Component/Footer'
import CoustomerList from './Component/CoustomerList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Nav/>
     <Header/>
     <CoustomerList/>
     <Footer/>

    </div>
  )
}

export default App
