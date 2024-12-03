import React from 'react'
import EventTypeSlide from '../ui/EventTypeSlide'
import "swiper/css";
import EventTypeImage from '../ui/EventTypeImage';

const KeyVisual = () => {

  return (
    <div>
      <EventTypeImage eventImageArray={["/images/1_0007_HP.jpg", "/images/1_0009_HP.jpg", "/images/05_join2024.jpg"]} />
      <EventTypeSlide eventTypeArray={["就活", "企業説明会", "U/Iターン"]}/>
    </div>
  )
}

export default KeyVisual