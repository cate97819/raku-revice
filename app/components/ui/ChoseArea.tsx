import { Data } from '@/app/page'
import Link from 'next/link'
import React from 'react'

const areaList = [{
  label: "全国",
  href: "https://dev.venue.pages.dev/search",
},{
  label: "関東",
  href: "https://dev.venue.pages.dev/search/q519yevsf4_y",
},{
  label: "中部",
  href: "https://dev.venue.pages.dev/search/ajr3bzwc5",
},{
  label: "関西",
  href: "https://dev.venue.pages.dev/search/3av8w4y1fp",
}]

interface Props {
  data: Data;
}

const ChoseArea = ({data}: Props) => {

  const { contents } = data;

  return (
    <div className='py-6 px-8 flex flex-col lg:flex-row gap-8 w-full md:w-fit text-center rounded-3xl items-center mx-auto bg-slate-200'>
      <p className='text-base text-nowrap w-full flex flex-col gap-1'>
        <span className='text-xs text-[#08A1C1] bg-white border-[1px] border-[#08A1C1] py-0.5'>{contents.length}会場掲載中</span>
        まずは開催地を選択
      </p>
      <ul className='flex flex-row gap-2 justify-center'>
        {areaList.map((item, i) => (
          <li key={i}>
            <Link href={item.href} className='bg-slate-900 text-base px-4 py-1 rounded-sm text-nowrap text-white hover:bg-slate-600 transition-all ease-in-out'>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ChoseArea