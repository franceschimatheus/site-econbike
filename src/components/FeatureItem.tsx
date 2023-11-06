"use client";

import Image from "next/image";
import { useState } from "react";

interface FeatureItemProps {
  icon: string;
  title: string;
  span: string;
  small: string;
  text: string;
}

export default function FeatureItem({
  icon,
  title,
  span,
  small,
  text,
}: FeatureItemProps) {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div
      onMouseEnter={() => {
        setCollapsed(false);
      }}
      // onMouseLeave={() => {
      //   setCollapsed(true)
      // }}
      onClick={() => {
        setCollapsed(!collapsed);
      }}
      className="group relative col-span-4 mx-auto h-fit max-w-[320px] rounded-xl bg-gradient-to-r from-green-400 to-blue-500 p-4 py-8 sm:col-span-2 min-[1360px]:col-span-1"
    >
      <Image
        src={icon}
        alt=""
        className="absolute left-4 top-4 aspect-auto h-10"
      />
      <div className=" flex flex-col items-center gap-2">
        <h4 className="text-2xl">{title}</h4>
        <span className="text-3xl font-semibold">
          {span}
          <small className="text-md font-normal leading-tight">{small}</small>
        </span>
        <div
          className={`max-h-0 overflow-hidden rounded-xl bg-gray-50 text-center text-lg text-gray-100 transition-all duration-1000 ${
            !collapsed &&
            "inline h-full max-h-[28rem] p-4 py-8 text-green-900 transition-all duration-1000"
          } `}
        >
          {text}
        </div>
      </div>
    </div>
  );
}
