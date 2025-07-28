import { useState, useEffect } from 'react'
import './Hour.css'
import quotes from '../Quotes/Quotes'

function Hour() {
  const [time, setTime] = useState('')
  const [focusMode, setFocusMode] = useState(false)
  const [quote, setQuote] = useState('')
  const [background, setBackground] = useState('');

  useEffect(() => {
    const set = setInterval(() => {
      const timeObject = new Date()

      const hour = timeObject.getHours().toString().padStart(2, '0')
      const minutes = timeObject.getMinutes().toString().padStart(2, '0')
      const seconds = timeObject.getSeconds().toString().padStart(2, '0')

      const realTime = `${hour} : ${minutes} : ${seconds}`

      setTime(realTime)

      const h = parseInt(hour)
      if(h >= 5 && h <=7) 
        setBackground('sunrise');
      else if(h >= 8 && h <=16) 
        setBackground('daylight');
      else if(h >= 17 && h <=19) 
        setBackground('sunset');
      else
        setBackground('night');
    },1000)
    
    return () => clearInterval(set)
  },[])

  const toggle = () => {
    setFocusMode(mode => {
      const next = !mode

      if(next){
        const text = quotes[Math.floor(Math.random() * quotes.length)];
        setQuote(text);
      }

      return next;
    })
  }

  return (
    <div className={`app ${background}`}>
      <div className='focusMode'>
        <button onClick={toggle}>Focus Mode</button>
      </div>
      {!focusMode && <div className='time'>{time}</div>}
      {focusMode && <div className='message'>{quote}</div>}
    </div>
  )
}

export default Hour
