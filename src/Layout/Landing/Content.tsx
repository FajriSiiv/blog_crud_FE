import React from "react";
import { Link } from "react-router-dom";
import { data } from "../../data/blog";

export default function Content() {
  return (
    <div className="container mx-auto pt-10">
      <h1 className="uppercase font-bold text-5xl">CRUD Blog</h1>
      <div className="grid grid-cols-6 grid-rows-6 h-[500px] mt-10 gap-2">
        <div className="row-span-6 col-span-3 relative w-full h-full overflow-hidden rounded-lg group">
          <img
            src={data[0].url}
            alt="image url"
            className="w-full h-full object-cover group-hover:scale-125 transition-all"
          />
          <div className="absolute w-full h-full left-0 top-0 z-10">
            <div className="w-full h-1/4 absolute left-0 bottom-0 text-white px-5 bg-slate-900 pt-3 group-hover:translate-y-0 translate-y-full transition-all">
              <h2 className="text-lg">{data[0].title}</h2>
              <p className="text-sm">{data[0].body.substring(0, 100)}...</p>
              <p className="float-right text-emerald-300 font-semibold">
                {data[0].author}
              </p>
              <Link to={"/"} className="underline text-sky-600">
                <span>Details</span>
              </Link>
            </div>
            <p className="w-fit h-fit p-3 absolute right-0 top-0 text-white  bg-rose-400 pt-3 group-hover:translate-x-0 translate-x-full transition-all">
              {data[0].category}
            </p>
          </div>
          <div className="w-full h-full absolute top-0 left-0 bg-black opacity-40 transition-all group-hover:opacity-0 duration-500"></div>
        </div>
        <div className="row-span-3 col-span-3  relative w-full h-full overflow-hidden rounded-lg group">
          <img
            src={data[1].url}
            alt="image url"
            className="w-full h-full object-cover group-hover:scale-125 transition-all"
          />
          <div className="absolute w-full h-full left-0 top-0 z-10">
            <div className="w-full h-1/2 absolute left-0 bottom-0 text-white px-5 bg-slate-900 pt-3 group-hover:translate-y-0 translate-y-full transition-all">
              <h2 className="text-lg">{data[1].title}</h2>
              <p className="text-sm">{data[1].body.substring(0, 50)}...</p>
              <p className="float-right text-emerald-300 font-semibold">
                {data[1].author}
              </p>
              <Link to={"/"} className="underline text-sky-600">
                <span>Details</span>
              </Link>
            </div>
            <p className="w-fit h-fit p-3 absolute right-0 top-0 text-white  bg-rose-400 pt-3 group-hover:translate-x-0 translate-x-full transition-all">
              {data[1].category}
            </p>
          </div>
          <div className="w-full h-full absolute top-0 left-0 bg-black opacity-40 transition-all duration-500 group-hover:opacity-0"></div>
        </div>
        <div className="row-span-3 col-span-3 relative w-full h-full overflow-hidden rounded-lg group">
          <img
            src={data[1].url}
            alt="image url"
            className="w-full h-full object-cover group-hover:scale-125 transition-all"
          />
          <div className="absolute w-full h-full left-0 top-0 z-10">
            <div className="w-full h-1/2 absolute left-0 bottom-0 text-white px-5 bg-slate-900 pt-3 group-hover:translate-y-0 translate-y-full transition-all">
              <h2 className="text-lg">{data[2].title}</h2>
              <p className="text-sm">{data[2].body.substring(0, 50)}...</p>
              <p className="float-right text-emerald-300 font-semibold">
                {data[2].author}
              </p>
              <Link to={"/"} className="underline text-sky-600">
                <span>Details</span>
              </Link>
            </div>
            <p className="w-fit h-fit p-3 absolute right-0 top-0 text-white  bg-rose-400 pt-3 group-hover:translate-x-0 translate-x-full transition-all">
              {data[2].category}
            </p>
          </div>
          <div className="w-full h-full absolute top-0 left-0 bg-black opacity-40 transition-all duration-500 group-hover:opacity-0"></div>
        </div>
      </div>
    </div>
  );
}
