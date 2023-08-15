/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, {useEffect, useState} from 'react'
import {PrintText} from '../utils/PrintText'
import {useZustand} from '../../store/useZustand'


export const Slide2 = () => {
  const [displayIndex, setDisplayIndex] = useState(0)
  const {nextSlideIndex} = useZustand()

  const nextDisplayIndex = () => {
    setDisplayIndex(displayIndex + 1)
  }

  useEffect(() => {
    if (displayIndex === 1 || displayIndex === 4 || displayIndex === 7) {
      setDisplayIndex(displayIndex + 1)
    }
  }, [displayIndex])

  return (
    <div className='flex flex-col gap-4'>
      {displayIndex >= 0 &&
        <PrintText
          text={'Please enter your phone number below to join our waitlist.'}
          callback={nextDisplayIndex}
        />
      }
      {displayIndex >= 1 &&
        <input
          className='px-4 py-2 bg-blue-400 rounded-full bg-opacity-30'
          type='tel'
          placeholder='Phone number'
          value={'(123) 456 - 7890'}
          onChange={() => {
            //
          }}
        />
      }
      {displayIndex >= 2 &&
        <div
          className='flex items-center justify-center w-24 px-10 py-2 bg-blue-400 rounded-full cursor-pointer bg-opacity-30'
          onClick={nextDisplayIndex}
        >
          Next
        </div>
      }
      {displayIndex >= 3 &&
        <PrintText
          text={'Please enter the code we just texted you.'}
          callback={nextDisplayIndex}
        />
      }
      {displayIndex >= 4 &&
        <input
          className='px-4 py-2 bg-blue-400 rounded-full bg-opacity-30'
          placeholder='Code'
          value={'123456'}
          onChange={() => {
            //
          }}
        />
      }
      {displayIndex >= 5 &&
        <div
          className='flex items-center justify-center w-24 px-10 py-2 bg-blue-400 rounded-full cursor-pointer bg-opacity-30'
          onClick={nextDisplayIndex}
        >
          Next
        </div>
      }
      {displayIndex >= 6 &&
        <PrintText
          text={'Please enter your name.'}
          callback={nextDisplayIndex}
        />
      }
      {displayIndex >= 7 &&
        <input
          className='px-4 py-2 bg-blue-400 rounded-full bg-opacity-30'
          placeholder='Name'
          value={'Zeus'}
          onChange={() => {
            //
          }}
        />
      }
      {displayIndex >= 8 &&
        <div
          className='flex items-center justify-center w-24 px-10 py-2 bg-blue-400 rounded-full cursor-pointer bg-opacity-30'
          onClick={nextSlideIndex}
        >
          Next
        </div>
      }
    </div>
  )
}
