import React from 'react'
import AutoSlide from '../ui/AutoSlide'
import ChoseArea from '../ui/ChoseArea'
import { Data } from '@/app/page'

interface Props {
  data: Data
}

const FirstView = ({data}: Props) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 max-w-[1300px] mx-auto gap-2 lg:gap-10">
      <AutoSlide/>
      <div className="flex items-start flex-col justify-end gap-6 py-0 lg:py-10 px-2">
        <h1 className="lg:text-xl py-2 lg:py-4 text-center w-full bg-slate-100 border-l-2 border-r-2 border-[#08A1C1]">サービス名称</h1>
        <dl className="grid grid-cols-2 text-center mx-auto items-end">
          <div>
            <dt className='text-xs lg:text-base'>条件から開催会場を探す</dt>
            <dd className="py-4 px-4 lg:px-10">
              <div className="w-full aspect-square bg-slate-600 text-white flex items-center justify-center text-sm p-4">
                わかりやすいイラスト予定地
              </div>
            </dd>
          </div>
          <div>
            <dt className='text-xs lg:text-base'>会場での開催イメージを<br className='lg:hidden'/>確認できる</dt>
            <dd className="py-4 px-4 lg:px-10">
              <div className="w-full aspect-square bg-slate-600 text-white flex items-center justify-center text-sm p-4">
                わかりやすいイラスト予定地
              </div>
            </dd>
          </div>
        </dl>
        <ChoseArea data={data}/>
      </div>
    </div>
  )
}

export default FirstView