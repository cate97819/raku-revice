import { Data } from '@/app/page'
import { shuffleArray } from '@/libs/shuffleArray';
import Link from 'next/link';
import React from 'react'

interface Props {
  data: Data;
}

const Venue = ({data}: Props) => {
  const { contents } = data;
  const array = shuffleArray(contents).slice(0, 9);

  return (
    <div className='w-full overflow-x-clip pt-10 pb-28 bg-slate-50'>
      <h1 className='pb-6 text-center text-xl flex flex-col gap-1'>ご利用いただける会場<span className='text-xs text-slate-500 font-bold'>（一部抜粋）</span></h1>
      <ul className='w-[200vw] grid grid-cols-[repeat(20,1fr)] gap-4 venuewrapper'>
        {array.map((item, i) => (
          <li key={i} className='bg-slate-200 aspect-video p-2 '>
            <Link href={`https://dev.venue.pages.dev/search/${item.area.id}/${item.id}`} className="hover:opacity-80 transition-all ease-in-out flex flex-col gap-2">
              <img className='aspect-video object-cover w-full' src={item.outerThumbnail} alt={`${item.venueName} ${item.hallName}`}/>
              <div className=''>
                <p className='text-xs'>{item.venueName}<br/>{item.hallName ? item.hallName : ""}</p>
                <p className='text-xs text-[#07A1C1]'>{item.capacity}ブース設置可能</p>
              </div>
            </Link>
          </li>
        ))}
        {array.map((item, i) => (
          <li key={i} className='bg-slate-200 aspect-video p-2 '>
            <Link href="" className="hover:opacity-80 transition-all ease-in-out flex flex-col gap-2">
              <img className='aspect-video object-cover w-full' src={item.outerThumbnail} alt={`${item.venueName} ${item.hallName}`}/>
              <div className=''>
                <p className='text-xs'>{item.venueName}<br/>{item.hallName ? item.hallName : " "}</p>
                <p className='text-xs text-[#07A1C1]'>{item.capacity}ブース設置可能</p>
              </div>
            </Link>
          </li>
        ))}        
      </ul>
      
    </div>
  )
}

export default Venue