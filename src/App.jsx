import React from 'react'
import Footer from './Components/Footer'
import Home from './Components/Home'
import NavBar from './Components/NavBar'
import Travels from './Components/Travels'

const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Home />
      <Travels />
      <Footer />
    </React.Fragment>
  )
}

export default App