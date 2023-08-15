import React, {useState} from 'react'
import {PrintText} from '../utils/PrintText'


export const Slide3 = () => {
  const [displayIndex, setDisplayIndex] = useState(0)

  const nextDisplayIndex = () => {
    setDisplayIndex(displayIndex + 1)
  }

  return (
    <div className='flex flex-col w-full max-w-lg gap-4'>
      {displayIndex >= 0 &&
        <PrintText
          text={'Thank you!'}
          callback={nextDisplayIndex}
        />
      }
      {displayIndex >= 1 &&
        <PrintText
          text={'We will be in touch shortly...'}
          callback={nextDisplayIndex}
        />
      }
    </div>
  )
}
