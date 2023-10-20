import React from 'react'
import Footer from './Components/Footer'
import MainContent from './Components/MainContent'
import NavBar from './Components/NavBar'

const App = () => {
  return (
    <main className='flex flex-col gap-4'>
      <NavBar />
      <MainContent />
      <Footer />
    </main>
  )
}

export default App