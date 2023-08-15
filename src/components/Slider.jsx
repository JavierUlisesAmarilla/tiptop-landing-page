import React from 'react'
import {useZustand} from '../store/useZustand'
import {Slide0} from './slides/Slide0'


const slideArr = [
  <Slide0 key={0}/>,
]


export const Slider = () => {
  const {slideIndex} = useZustand()

  return (
    <div className='w-full max-w-xl p-4'>
      {slideArr[slideIndex]}
    </div>
  )
}
