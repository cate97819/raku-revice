import React from 'react'
import EventTypeSlide from './EventTypeSlide'
import "swiper/css";
import EventTypeImage from './EventTypeImage';

const AutoSlide = () => {

  return (
    <div className='px-4 sm:px-0'>
      <EventTypeImage eventImageArray={["/images/1_0007_HP.jpg","/images/05_join2024.jpg", "/images/1_0009_HP.jpg", "/images/05_join2024.jpg"]} />
      <EventTypeSlide eventTypeArray={["就活", "進学", "企業説明会", "U/Iターン"]}/>
    </div>
  )
}

export default AutoSlide