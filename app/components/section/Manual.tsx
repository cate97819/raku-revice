import React from 'react'

const Manual = () => {
  return (
    <div className='py-14 text-center bg-sky-700 text-white'>
      <div className='max-w-[1200px] mx-auto w-full space-y-10'>
        <h1 className='flex flex-col text-2xl gap-1'>
          <span className='text-base'>
            イベント開催の参考にできる
          </span>
          イベント運営マニュアルをプレゼント
        </h1>
        <div className='bg-slate-200 aspect-video max-w-[600px] mx-auto drop-shadow-lg border-slate-200 border-4'>
          <img src="/images/manual.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Manual