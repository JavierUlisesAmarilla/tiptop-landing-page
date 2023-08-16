import React from 'react'
import {Header} from './components/Header'
import {Footer} from './components/Footer'
import {Slider} from './components/Slider'


export const App = () => {
  return (
    <div className='flex flex-col items-center justify-between w-full h-full font-semibold text-white App'>
      <Header/>
      <Slider/>
      <Footer/>
    </div>
  )
}
