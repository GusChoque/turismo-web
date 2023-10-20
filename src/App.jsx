import React from 'react'
import Footer from './Components/Footer'
import MainContent from './Components/MainContent'
import NavBar from './Components/NavBar'

const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <MainContent />
      <Footer />
    </React.Fragment>
  )
}

export default App