import React from 'react'

const Build = () => {
  return (
    <div className='max-w-[1200px] mx-auto w-full text-center flex flex-col py-10'>
      <h1 className='py-6 text-2xl text-center flex flex-col gap-1 text-[#08A1C1]'>
        <span className='text-base text-black'>STEP3</span>
        レイアウトを元に会場を作り上げる
      </h1>
      <p>弊社には全国の様々な会場での施工実績がございます。<br/>細かい会場の知識や、設営・運営における専門的な知識を持つ弊社にお任せください。<br/>当日運営のサポートはもちろん、追加で設置したい備品や設備などについてもご相談ください。</p>
      <div className='max-w-[600px] w-full mx-auto aspect-video bg-slate-200 my-10 drop-shadow-2xl border-4 border-slate-300'>
        <img src="/images/reason.jpg" alt="" className='w-full h-full object-cover' />
      </div>
    </div>
  )
}

export default Build