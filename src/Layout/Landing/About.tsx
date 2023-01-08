import React from "react";

export default function About() {
  return (
    <div className="w-full flex items-center justify-center flex-col py-10 bg-emerald-400 min-h-[300px] text-white">
      <h2 className="text-5xl font-bold">About</h2>
      <p className="max-w-[700px] text-center my-3">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe quod
        magni amet nihil odio rerum quibusdam minima nobis optio placeat.
      </p>
      <button className="py-3 px-10 bg-rose-400 rounded-md font-semibold text-white">
        Touch Me
      </button>
    </div>
  );
}
