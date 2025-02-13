import React from "react";

const Search = () => {
  return (
    <div className="mx-auto w-full px-4 py-10 bg-[#07A1C1] text-white">
      <div className="max-w-[1200px] mx-auto">
        <h1 className="text-center text-2xl py-6 flex flex-col gap-1 text-white">
          <span className="text-base text-white">STEP1</span>
          目的に合った会場を探す
        </h1>
        <p className="text-center text-sm sm:text-base">
          イベントを開催したい地域や、誘致したい出展者の数など、
          <br className="hidden sm:block"/>
          既に決まっている部分に合わせて適切な会場を探すことが出来ます。
        </p>
        <dl className="grid grid-cols-2 sm:grid-cols-3 sm:py-10 text-center items-start gap-2 pt-6 sm:pt-0">
          <div>
            <dd className="sm:py-4 sm:px-10">
              <img
                src="/images/area.jpg"
                alt=""
                className="aspect-square rounded-full border-slate-300 border-8 drop-shadow-sm hover:border-4 transition-all ease-in-out hover:drop-shadow-xl hover:scale-105"
              />
            </dd>
            <dt className="text-white text-sm sm:text-lg">イベントを開催する地域</dt>
          </div>
          <div>
            <dd className="sm:py-4 sm:px-10">
              <img
                src="/images/booth.png"
                alt=""
                className="aspect-square bg-white rounded-full p-4 border-slate-300 border-8 drop-shadow-sm hover:border-4 transition-all ease-in-out hover:drop-shadow-xl hover:scale-105"
              />
            </dd>
            <dt className="text-white text-sm sm:text-lg">
              設置出来る
              <br />
              出展者のブース数
            </dt>
          </div>
          <div className="col-span-2 sm:col-span-1 w-1/2 mx-auto sm:w-auto">
            <dd className="sm:py-4 sm:px-10">
              <img
                src="/images/venue.png"
                alt=""
                className="aspect-square bg-white rounded-full p-4 border-slate-300 border-8 drop-shadow-sm hover:border-4 transition-all ease-in-out hover:drop-shadow-xl hover:scale-105"
              />
            </dd>
            <dt className="text-white text-sm sm:text-lg">会場の面積</dt>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default Search;
