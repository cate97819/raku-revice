import React from 'react'

const GetLayout = () => {
  return (
    <div className='max-w-[1200px] mx-auto w-full py-10'>
      <h1 className='py-6 text-2xl text-center flex flex-col gap-1 text-[#08A1C1]'>
        <span className='text-base text-black'>会場を選んだら</span>
        実会場での開催イメージを確認する
      </h1>
      <p className='text-center'>
        選んだ会場のまっさらな図面と、イベント開催時に実際にブースを設置した際の図面を確認することが出来ます。<br/>イベント開催時の会場導線や必要となる備品を事前に確認することで、開催時の想定やイメージ共有を手助けします。
      </p>
      <dl className='grid grid-cols-2 text-center py-10'>
        <div>
          <dt>会場図面</dt>
          <dd className='px-10 py-4'>
            <div className='aspect-video bg-slate-200'></div>
          </dd>
        </div>
        <div>
          <dt>ブースレイアウト図面</dt>
          <dd className='px-10 py-4'>
            <div className='aspect-video bg-slate-200'></div>
          </dd>
        </div>
      </dl>
    </div>
  )
}

export default GetLayout