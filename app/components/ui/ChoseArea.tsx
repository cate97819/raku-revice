import { Data } from "@/app/page";
import Link from "next/link";
import React from "react";

const areaList = [
  {
    label: "全国",
    href: "https://dev.venue.pages.dev/search",
  },
  {
    label: "関東",
    href: "https://dev.venue.pages.dev/search/q519yevsf4_y",
  },
  {
    label: "中部",
    href: "https://dev.venue.pages.dev/search/ajr3bzwc5",
  },
  {
    label: "関西",
    href: "https://dev.venue.pages.dev/search/3av8w4y1fp",
  },
];

interface Props {
  data: Data[];
}

const ChoseArea = ({ data }: Props) => {
  return (
    <>
      <h1 className="text-3xl font-bold leading-10 px-10 py-2 mx-auto w-fit text-[#08A1C1] bg-white/15 backdrop-blur-[0.01em]">
      開催地や行いたいイベントの規模から
      条件に合った会場を探せます
      </h1>
      <div className="p-8 flex flex-col gap-8 w-full text-center rounded-3xl items-center mx-auto bg-slate-100">
        <p className="text-xl font-bold text-nowrap w-full flex flex-col gap-4">
          <span className="text-base text-[#08A1C1] font-normal bg-white border-2 border-[#08A1C1] py-1">
            {data.length}会場掲載中
          </span>
          まずは開催地を選択
        </p>
        <ul className="grid grid-cols-2 gap-4 justify-center">
          {areaList.map((item, i) => (
            <li key={i}>
              <Link
                href={item.href}
                className="inline-block bg-slate-900 text-2xl px-16 py-4 rounded-sm text-nowrap text-white hover:bg-slate-600 transition-all ease-in-out"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ChoseArea;
