import React, {useState} from 'react'
import {PrintText} from '../utils/PrintText'


export const Slide0 = () => {
  const [displayIndex, setDisplayIndex] = useState(0)


  return (
    <div className='flex flex-col gap-4'>
      {displayIndex >= 0 &&
        <PrintText
          text={'Buying stuff is easy, selling it is hard. But maybe there is a world where you don\'t have to sell things any longer?'}
          callback={() => setDisplayIndex(displayIndex + 1)}
        />
      }
      {displayIndex >= 1 &&
        <PrintText
          text={'Curious?'}
          callback={() => setDisplayIndex(displayIndex + 1)}
        />
      }
      {displayIndex >= 2 &&
        <div className='px-10 py-2 bg-blue-400 rounded-full cursor-pointer w-min'>Yes</div>
      }
    </div>
  )
}
