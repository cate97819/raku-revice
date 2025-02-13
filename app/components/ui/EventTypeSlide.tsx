'use client'
import React, { useEffect, useState } from 'react'

interface Props {
  eventTypeArray: Array<string>
}

const EventTypeSlide = ({eventTypeArray}: Props) => {
  const [order, setOrder] = useState(0)
  const orderLength = eventTypeArray.length * 3 -1;

  useEffect(() => {
    setTimeout(() => {
      setOrder(prev => prev < orderLength ? prev + 1 : 0);
    }, 3000)
  },[order, orderLength])
  

  return (
    <div className='flex flex-row md:flex-row items-center mx-auto w-fit md:text-2xl text-black bg-white p-4 rounded-3xl gap-4 md:gap-0 font-bold'>
      <div className='relative my-0 lg:mx-10 py-6 md:py-10 overflow-clip min-w-32 lg:min-w-60 bg-[#08A1C1] text-center rounded-lg shadow-xl text-white'>
        <ul style={{"top": `-${order > 0 ? order * 150 : 0}%`}} className='hidden lg:flex absolute translate-y-4 md:translate-y-5 text-nowrap w-full flex-col gap-[1.12em] md:gap-20 transition-all ease-in-out text-lg md:text-4xl'>
          {eventTypeArray.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
          {eventTypeArray.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
          {eventTypeArray.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
          {eventTypeArray.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <ul style={{"top": `-${order > 0 ? order * 100 : 0}%`}} className='lg:hidden absolute translate-y-2 md:translate-y-5 text-nowrap w-full flex flex-col gap-[1.12em] md:gap-20 transition-all ease-in-out text-lg md:text-4xl'>
          {eventTypeArray.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
          {eventTypeArray.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
          {eventTypeArray.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
          {eventTypeArray.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
      イベントの<br/>会場がみつかる！
    </div>
  )
}

export default EventTypeSlide