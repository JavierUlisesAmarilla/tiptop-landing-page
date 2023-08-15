/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, {useState} from 'react'
import {PrintText} from '../utils/PrintText'
import {useZustand} from '../../store/useZustand'


export const Slide0 = () => {
  const [displayIndex, setDisplayIndex] = useState(0)
  const {nextSlideIndex} = useZustand()

  const nextDisplayIndex = () => {
    setDisplayIndex(displayIndex + 1)
  }

  return (
    <div className='flex flex-col gap-4'>
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
          onClick={nextSlideIndex}
        >
          Yes
        </div>
      }
    </div>
  )
}
