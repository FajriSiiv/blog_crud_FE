import React from "react";
import { Link } from "react-router-dom";

export default function Blog() {
  const Card = () => {
    return (
      <div className="w-full h-[400px] bg-sky-100 text-slate-900 p-10 flex flex-col gap-y-5 rounded-lg">
        <h2 className="text-xl font-bold">Title Name Blog</h2>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          magnam consequuntur eaque nihil placeat mollitia quod? Placeat dolor
          voluptatem magnam?
        </p>
      </div>
    );
  };

  return (
    <div className="container mx-auto">
      <div className=" grid grid-cols-3 gap-x-5">
        <Card />
        <Card />
        <Card />
      </div>
      <div className="w-full flex justify-center my-8">
        <Link
          to={"/blog"}
          className="py-3 px-10 text-lg font-semibold bg-rose-400 mx-auto rounded-md text-white"
        >
          All Blog
        </Link>
      </div>
    </div>
  );
}
