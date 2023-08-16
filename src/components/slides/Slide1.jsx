/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, {useState} from 'react'
import {PrintText} from '../utils/PrintText'
import {useZustand} from '../../store/useZustand'
import {PrintImages} from '../utils/PrintImages'
import gsap from 'gsap'


export const Slide1 = () => {
  const [displayIndex, setDisplayIndex] = useState(0)
  const {nextSlideIndex} = useZustand()

  const nextDisplayIndex = () => {
    setDisplayIndex(displayIndex + 1)
  }

  const animNextSlide = () => {
    gsap.timeline()
        .to('.Slide1', {
          top: '-100%',
          opacity: 0,
          duration: 0.5,
          onComplete: () => {
            nextSlideIndex()
          },
        })
  }

  return (
    <div className='relative flex flex-col w-full max-w-xl gap-6 Slide1'>
      {displayIndex >= 0 &&
        <PrintText
          text={'TipTop finds the things you own in your past Amazon purchases or your receipts and magically creates instant cash offers for you.'}
          callback={nextDisplayIndex}
        />
      }
      {displayIndex >= 1 &&
        <PrintImages
          urlArr={[
            'images/item1.png',
            'images/item2.png',
            'images/item3.png',
            'images/item4.png',
          ]}
          callback={nextDisplayIndex}
        />
      }
      {displayIndex >= 2 &&
        <PrintText
          text={'TipTop is currently in private beta, but if you would like, you can join our waitlist, and we will notify you as soon as we have a spot available.'}
          callback={nextDisplayIndex}
        />
      }
      {displayIndex >= 3 &&
        <div
          className='flex items-center justify-center w-48 px-10 py-2 bg-gray-100 rounded-full cursor-pointer bg-opacity-10 hover:bg-opacity-20'
          onClick={animNextSlide}
        >
          Join waitlist
        </div>
      }
    </div>
  )
}
