import React, {useState, useEffect} from 'react'
import classnames from 'classnames'


export const PrintImages = ({urlArr, delay = 200, callback}) => {
  const [displayImgIndex, setDisplayImgIndex] = useState(0)

  const animateImages = () => {
    const intervalId = setInterval(() => {
      setDisplayImgIndex((prevImgIndex) => {
        if (prevImgIndex >= urlArr.length - 1) {
          clearInterval(intervalId)
        }

        return prevImgIndex + 1
      })
    }, delay)
  }

  useEffect(() => {
    animateImages()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (displayImgIndex >= urlArr.length - 1 && callback) {
      callback()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayImgIndex])

  return (
    <div className='flex gap-2'>
      {urlArr.map((url, index) =>
        <img
          className={classnames({
            'w-24 h-32': true,
            'hidden': index > displayImgIndex,
          })}
          key={index}
          src={url}
          alt=''
        />,
      )}
    </div>
  )
}
