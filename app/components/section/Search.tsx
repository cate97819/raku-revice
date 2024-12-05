import React from 'react'

const Search = () => {
  return (
    <div className='max-w-[1200px] mx-auto w-full py-10'>
      <h1 className='text-center text-2xl py-6 flex flex-col gap-1 text-[#08A1C1]'>
        <span className='text-base text-black'>まずは</span>
        条件に合った会場を探す
      </h1>
      <p className='text-center'>イベントに誘致したい出展者の数や、会場に集めたい来場者数など、<br/>御社内で既に決まっている部分に合わせて適切な会場を探すことが出来ます。</p>
      <dl className='grid grid-cols-4 py-10 text-center items-end'>
        <div>
          <dt>イベントを開催する地域</dt>
          <dd className='py-4 px-10'>
            <div className='aspect-square bg-slate-200'></div>
          </dd>
        </div>
        <div>
          <dt>設置出来る<br/>出展者のブース数</dt>
          <dd className='py-4 px-10'>
            <div className='aspect-square bg-slate-200'></div>
          </dd>
        </div>
        <div>
          <dt>会場面積</dt>
          <dd className='py-4 px-10'>
            <div className='aspect-square bg-slate-200'></div>
          </dd>
        </div>
        <div>
          <dt>想定される来場者数</dt>
          <dd className='py-4 px-10'>
            <div className='aspect-square bg-slate-200'></div>
          </dd>
        </div>
      </dl>
    </div>
  )
}

export default Search