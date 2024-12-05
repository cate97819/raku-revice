'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import HamMenu from '../ui/hamMenu';
import { appLinks } from '@/docs';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const listItem = [{
    key: 0,
    label: "できること",
    href: "/#about",
  },{
    key: 1,
    label: "選ばれる理由",
    href: "/#chosen",
  },{
    key: 2,
    label: "よくある質問",
    href: "/#faq",
  }
];

const setToggleHandler = () => {
  setToggle(!toggle);
}



  return (
    <header className=''>
      <div className='min-h-[60px] py-6 max-w-[1200px] mx-auto flex flex-row items-center px-4'>
        <h1 className='text-base lg:text-xl font-bold'>サービス名称</h1>
      </div>
    </header>
  )
}

export default Header