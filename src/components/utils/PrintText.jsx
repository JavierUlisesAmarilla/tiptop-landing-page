import React, {useState, useEffect} from 'react'


let printText


export const PrintText = ({text, delay = 50, callback}) => {
  const [displayText, setDisplayText] = useState('')

  const animateText = () => {
    let index = 0

    const intervalId = setInterval(() => {
      setDisplayText((prevText) => prevText + (printText[index] || ''))
      index++

      if (index >= printText.length) {
        clearInterval(intervalId)

        if (callback) {
          callback()
        }
      }
    }, delay)
  }

  useEffect(() => {
    printText = text.substring(0, 2) + text[1] + text.substring(2)
    animateText()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <div>{displayText}</div>
}
