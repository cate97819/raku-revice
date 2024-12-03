'use client'
import React, { useEffect, useState } from 'react'

interface Props {
  eventTypeArray: Array<string>
}

const EventTypeSlide = ({eventTypeArray}: Props) => {
  const [order, setOrder] = useState(0)
  const orderLength = eventTypeArray.length -1;

  useEffect(() => {
    setTimeout(() => {
      setOrder(prev => prev < orderLength ? prev + 1 : 0);
    }, 3000)
  },[order])
  

  return (
    <div className='flex items-center mx-auto w-fit text-2xl text-slate-900 bg-white p-4 rounded-3xl'>
      <div className='relative mx-10 py-10 overflow-clip min-w-60 bg-[#08A1C1] text-center rounded-lg shadow-xl text-white'>
        <ul style={{"top": `-${order > 0 ? order * 150 : 0}%`}} className='absolute translate-y-5 text-nowrap w-full flex flex-col gap-20 transition-all ease-in-out text-4xl'>
          {eventTypeArray.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
      イベントの<br/>規模感がわかる！
    </div>
  )
}

export default EventTypeSlide