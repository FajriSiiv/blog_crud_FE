import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { getBlogs } from "../../../api/apiBlog";

export default function DashboardBlog() {
  const { data: blog, isLoading, isError } = useQuery("blog", getBlogs);

  if (isLoading) {
    return <p>Loading....</p>;
  }
  if (isError) {
    return <p>Error...</p>;
  }
  return (
    <div className="w-full py-3 px-5 flex flex-wrap gap-2 place-content-start">
      {blog.map((blogs: any) => (
        <div
          key={blogs.id}
          className="border-2 h-[300px] w-[30%] p-3 rounded-md flex flex-col gap-y-3"
        >
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">{blogs.title}</h2>
            <Link
              to={`/admin/blog/edit/${blogs.id}`}
              className="py-1 px-3 rounded-sm text-white bg-orange-400"
            >
              Edit
            </Link>
          </div>
          <div className="w-full h-full overflow-hidden">
            <img
              src={blogs.url}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
