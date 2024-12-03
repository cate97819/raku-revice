'use client'
import React, { useEffect, useState } from 'react'

interface Props {
  eventImageArray: Array<string>;
}

const EventTypeImage = ({eventImageArray}: Props) => {

  const [slide, setSlide] = useState(0)
  const slideLength = eventImageArray.length -1;

  useEffect(() => {
    setTimeout(() => {
      setSlide(prev => prev < slideLength ? prev + 1 : 0)
    }, 3000)
  },[slide])

  return (
    <div className='relative overflow-clip max-w-[1000px] mx-auto aspect-video rounded-3xl my-10'>
      <ul className='w-full flex flex-col absolute transition-all ease-in-out' style={{top: `-${slide > 0 ? slide * 100 : 0}%`}}>
        {eventImageArray.map((item, i) => (
            <img key={i} src={item} alt="" className='aspect-video object-cover blur-[0.2em]'/>
        ))}
      </ul>
    </div>
  )
}

export default EventTypeImage