import React, { useState } from "react";
import { data as datas } from "../data/blog";
import { useQuery } from "react-query";
import { getBlogs } from "../api/apiBlog";
import { Link } from "react-router-dom";

export default function Blogs() {
  // const [blog, setBlog] = useState(datas);

  const CardBlog = ({
    title,
    desc,
    author,
    id,
  }: {
    title: string;
    desc: string;
    author: string;
    id: string;
  }) => {
    return (
      <div className="w-full h-full flex flex-col items-start gap-y-3 border-2 p-5 rounded-md justify-between">
        <div className="flex flex-col gap-y-3">
          <h2 className="text-lg font-semibold">{title}</h2>
          <p>{desc}</p>
        </div>
        <p className="text-sky-500 font-bold">{author}</p>
        <Link to={`/blog/${id}`}>Detail</Link>
      </div>
    );
  };

  const { data, isLoading, isError } = useQuery("blogs", getBlogs, {
    staleTime: 5 * 1000,
    cacheTime: 10000,
  });

  if (isError) {
    return <p>{isError}</p>;
  }

  return (
    <div className="container mx-auto pt-10">
      <h1 className="text-center text-3xl font-bold pb-10">All Blogs</h1>
      {isLoading && <p>Loading...</p>}
      <div className="w-full grid grid-cols-3 gap-5">
        {data &&
          data?.map((blog: any) => (
            <CardBlog
              key={blog.id}
              author={blog.author}
              desc={blog.body}
              title={blog.title}
              id={blog.id}
            />
          ))}
      </div>
    </div>
  );
}
