import React from 'react'

const GetLayout = () => {
  return (
    <div className='max-w-[1200px] mx-auto w-full py-10 px-4'>
      <h1 className='py-6 text-2xl text-center flex flex-col gap-1 text-[#08A1C1]'>
        <span className='text-base text-black'>STEP2</span>
        実会場での開催イメージを確認する
      </h1>
      <p className='text-center text-sm sm:text-base'>
        イベント開催時に実際にブースを設置した際の図面を確認することが出来ます。<br className='hidden sm:block'/>イベント開催時の会場導線や必要となる備品を事前に確認することで、開催時の想定やイメージ共有を手助けします。
      </p>
      <dl className='grid grid-cols-1 text-center py-10'>
        <div>
          <div className='px-10 py-4 drop-shadow-xl'>
            <img src="/images/plansheet.jpg" alt="" className='mx-auto bg-slate-200 aspect-video w-full max-w-[700px]'/>
          </div>
        </div>
      </dl>
    </div>
  )
}

export default GetLayout