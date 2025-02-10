import React from 'react'
import AutoSlide from '../ui/AutoSlide'
import ChoseArea from '../ui/ChoseArea'
import { Data } from '@/app/page'

interface Props {
  data: Data[]
}

const FirstView = ({data}: Props) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 max-w-[1300px] mx-auto gap-2 lg:gap-10 mb-4 items-center">
      <AutoSlide/>
      <div className="flex items-start flex-col justify-center gap-6 py-0 lg:py-10 px-2">
        <ChoseArea data={data}/>
      </div>
    </div>
  )
}

export default FirstView