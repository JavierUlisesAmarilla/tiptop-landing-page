import React from 'react'
import {useZustand} from '../store/useZustand'
import {Slide0} from './slides/Slide0'
import {Slide1} from './slides/Slide1'
import {Slide2} from './slides/Slide2'
import {Slide3} from './slides/Slide3'


const slideArr = [
  <Slide0 key={0}/>,
  <Slide1 key={1}/>,
  <Slide2 key={2}/>,
  <Slide3 key={3}/>,
]


export const Slider = () => {
  const {slideIndex} = useZustand()
  return slideArr[slideIndex]
}
