import Link from 'next/link'
import React from 'react'

const areaList = [{
  label: "関東",
  href: "",
},{
  label: "中部",
  href: "",
},{
  label: "関西",
  href: "",
}]

const ChoseArea = () => {
  return (
    <div className='bg-[#08A1C1] py-4 md:py-8 md:px-32 text-white flex flex-col gap-4 md:gap-10 w-full md:w-fit text-center rounded-3xl'>
      <p className='text-base md:text-3xl text-nowrap w-full'>まずは開催地を選択</p>
      <ul className='flex flex-row gap-6 md:gap-14 justify-center'>
        {areaList.map((item, i) => (
          <li key={i}>
            <Link href={item.href} className='bg-gradient-to-r from-[#f89d00] to-[#ff6600] text-base md:text-3xl px-4 md:px-8 py-2 rounded-xl text-nowrap'>{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ChoseArea