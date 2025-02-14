import { Data } from '@/app/page'
import React from 'react'

interface Props {
  data: Data[]
}

const Contact = ({data}: Props) => {

  return (
    <div className='bg-slate-700 py-10 text-white px-4'>
      <div className='max-w-[1200px] mx-auto w-full text-center grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-0'>
        <div className='space-y-4'>
          <h1 className='flex flex-col gap-1'>
            <span className='block text-xs border-[1px] px-4 py-0.5 border-white w-fit mx-auto'>{data.length}会場掲載中</span>
            まずは会場を探してみる
          </h1>
          <ul className='flex flex-row gap-3 justify-center text-sm sm:text-base'>
            <li><button className='bg-white text-slate-700 px-4 py-1 font-bold rounded-md'>全国</button></li>
            <li><button className='bg-white text-slate-700 px-4 py-1 font-bold rounded-md'>関東</button></li>
            <li><button className='bg-white text-slate-700 px-4 py-1 font-bold rounded-md'>中部</button></li>
            <li><button className='bg-white text-slate-700 px-4 py-1 font-bold rounded-md'>関西</button></li>
          </ul>
        </div>
        <div className='space-y-4'>
          <h1 className='text-sm sm:text-base'>サービスに関するお問い合わせはこちら</h1>
          <button className='mx-auto inline-block w-fit bg-white text-slate-700 px-10 py-2 rounded-full hover:bg-white/80 transition-all ease-in-out font-bold'>お問い合わせ</button>
        </div>
      </div>
    </div>
  )
}

export default Contact