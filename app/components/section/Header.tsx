'use client'
import React from 'react'

const Header = () => {

  return (
    <header className='fixed top-0 left-0 z-20 w-full bg-white/75 backdrop-blur-md'>
      <div className='min-h-[60px] py-6 max-w-[1200px] mx-auto flex flex-row items-center px-4'>
        <h1 className='text-base lg:text-2xl font-bold text-[#08A1C1]'>イベノバ!!</h1>
      </div>
    </header>
  )
}

export default Header