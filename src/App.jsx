import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'


const App = () => {
  return (
    <div className='flex flex-col justify-between w-full h-full text-white bg-blue-600'>
      <Header/>
      <Footer/>
    </div>
  )
}


export default App
