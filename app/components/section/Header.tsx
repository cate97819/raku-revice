import { headerItem } from '@/docs'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='fixed top-0 left-0 w-full px-10'>
      <div className='grid grid-cols-[max-content_1fr_max-content] max-w-[1200px] mx-auto bg-[#6681A4] rounded-b-2xl min-h-[90px] justify-between items-center px-6 md:px-[50px] text-white'>
        <h1>
          Tohgashi
        </h1>
        <ul className='flex flex-row justify-end mr-4 md:mr-[30px] text-sm md:text-lg gap-4 md:gap-[30px]'>
          {headerItem.map((item, i) => (
            <li key={i}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
        <button className='bg-gradient-to-b from-[#f280aa] to-[#d62265] py-1 md:py-[5px] px-3 md:px-[35px] rounded-lg text-sm md:text-lg'>お問合せ</button>
      </div>
      
    </header>
  )
}

export default Header