import React, { useState, useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { addBlog, getBlogById } from "../../../../api/apiBlog";

export default function AddBlog() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    data: blog,
    isLoading,
    isError,
  } = useQuery(["blog", id], () => getBlogById(id), {
    refetchOnWindowFocus: false,
    cacheTime: 2000,
    onSuccess: (data) => {
      setTitle(data.title);
      setBody(data.body);
      setCategory(data.category);
      setAuthor(data.author);
      setPreview(data.url);
    },
  });

  const addBlogMutation = useMutation(addBlog, {
    onSuccess: () => {
      queryClient.invalidateQueries("blog");

      navigate("/dashboard");
    },
  });

  const updateBlogs = (e: React.FormEvent) => {
    e.preventDefault();
    addBlogMutation.mutate({
      ...blog,
      title: title,
      file: file,
      body: body,
      category: category,
      author: author,
    });
  };

  if (isLoading) {
    return <p>Loading....</p>;
  }

  if (isError) {
    return <p>Error...</p>;
  }

  const loadImage = (e: any) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  return (
    <div className="flex justify-center flex-col items-center container h-full mx-auto relative py-10">
      <div
        className="fixed top-5 left-10 rounded-md bg-rose-400 py-2 px-5 cursor-pointer text-white"
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </div>
      <h2 className="text-3xl font-semibold tracking-wide">Add Blog</h2>
      <form
        action=""
        onSubmit={updateBlogs}
        className="flex flex-col gap-y-3 w-1/2 "
      >
        <div className="flex flex-col gap-y-1">
          <label htmlFor="">Title</label>
          <input
            type="text"
            className="p-2 border-2 rounded-md"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-y-1">
          <label htmlFor="">Body</label>
          <textarea
            name=""
            id=""
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="p-2 border-2 rounded-md"
            cols={3}
            rows={5}
          >
            {body}
          </textarea>
        </div>
        <div className="flex flex-col gap-y-1">
          <label htmlFor="">Author</label>
          <input
            type="text"
            className="p-2 border-2 rounded-md"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Category</label>
          <select
            name=""
            id=""
            className="focus:outline-none  p-2 border-2 rounded-md"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="News">News</option>
            <option value="Update">Update</option>
            <option value="Story">Story</option>
          </select>
        </div>
        <div className="flex justify-center">
          <div className="mb-3 w-96">
            <input
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              type="file"
              onChange={loadImage}
            />
          </div>
        </div>
        <div className="overflow-hidden h-full w-full">
          {preview ? (
            <figure className="h-[200px] w-full">
              <img src={preview} alt="Prev img h-[128px] w-[128px]" />
            </figure>
          ) : (
            ""
          )}
        </div>
        <button
          type="submit"
          className="py-2 bg-emerald-400 rounded-md text-white font-semibold"
        >
          Buat Blog
        </button>
      </form>
    </div>
  );
}
