/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, {useState} from 'react'
import {PrintText} from '../utils/PrintText'
import {useZustand} from '../../store/useZustand'
import gsap from 'gsap'


export const Slide0 = () => {
  const [displayIndex, setDisplayIndex] = useState(0)
  const {nextSlideIndex} = useZustand()

  const nextDisplayIndex = () => {
    setDisplayIndex(displayIndex + 1)
  }

  const animNextSlide = () => {
    gsap.timeline()
        .to('.Slide0', {
          top: '-100%',
          opacity: 0,
          duration: 0.5,
          onComplete: () => {
            nextSlideIndex()
          },
        })
  }

  return (
    <div className='relative flex flex-col w-full max-w-lg gap-4 p-4 Slide0'>
      {displayIndex >= 0 &&
        <PrintText
          text={'Buying stuff is easy, selling it is hard. But maybe there is a world where you don\'t have to sell things any longer?'}
          callback={nextDisplayIndex}
        />
      }
      {displayIndex >= 1 &&
        <PrintText
          text={'Curious?'}
          callback={nextDisplayIndex}
        />
      }
      {displayIndex >= 2 &&
        <div
          className='px-10 py-2 bg-blue-400 rounded-full cursor-pointer bg-opacity-30 w-min'
          onClick={animNextSlide}
        >
          Yes
        </div>
      }
    </div>
  )
}
