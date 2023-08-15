import React, {useState, useEffect} from 'react'


export const PrintText = ({text, delay = 50, callback}) => {
  const [displayText, setDisplayText] = useState('')

  const animateText = () => {
    let index = 0

    const intervalId = setInterval(() => {
      setDisplayText((prevText) => prevText + (text[index] || ''))
      index++

      if (index >= text.length) {
        clearInterval(intervalId)

        if (callback) {
          callback()
        }
      }
    }, delay)
  }

  useEffect(() => {
    animateText()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <div>{displayText}</div>
}
