import React from 'react'
import {useZustand} from '../store/useZustand'
import {Slide0} from './slides/Slide0'
import {Slide1} from './slides/Slide1'


const slideArr = [
  <Slide0 key={0}/>,
  <Slide1 key={1}/>,
]


export const Slider = () => {
  const {slideIndex} = useZustand()

  return (
    <div className='w-full max-w-xl p-4'>
      {slideArr[slideIndex]}
    </div>
  )
}
