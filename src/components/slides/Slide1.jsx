import React, {useState} from 'react'
import {PrintText} from '../utils/PrintText'


export const Slide1 = () => {
  const [displayIndex, setDisplayIndex] = useState(0)


  return (
    <div className='flex flex-col gap-4'>
      {displayIndex >= 0 &&
        <PrintText
          text={'TipTop finds the things you own in your past Amazon purchases or your receipts and magically creates instant cash offers for you.'}
          callback={() => setDisplayIndex(displayIndex + 1)}
        />
      }
      {displayIndex >= 1 &&
        <PrintText
          text={'TODO'}
          callback={() => setDisplayIndex(displayIndex + 1)}
        />
      }
      {displayIndex >= 2 &&
        <PrintText
          text={'TipTop is currently in private beta, but if you would like, you can join our waitlist, and we will notify you as soon as we have a spot available.'}
          callback={() => setDisplayIndex(displayIndex + 1)}
        />
      }
      {displayIndex >= 3 &&
        <div className='flex items-center justify-center w-48 px-10 py-2 bg-blue-400 rounded-full cursor-pointer'>Join waitlist</div>
      }
    </div>
  )
}
