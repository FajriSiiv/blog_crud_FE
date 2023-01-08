import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getBlogById } from "../../api/apiBlog";
import { useQuery } from "react-query";

export default function BlogById() {
  const { id }: any = useParams();
  const navigate = useNavigate();
  const { data, isLoading, isError } = useQuery("blog", () => getBlogById(id));

  if (isLoading) {
    return <p>Loading....</p>;
  }
  if (isError) {
    return <p>Error {isError}</p>;
  }

  const backClick = () => {
    navigate(-1);
  };

  return (
    <div className="container mx-auto py-20">
      <button onClick={backClick} className="py-2 px-5">
        Back
      </button>
      <h1>Title : {data.title}</h1>
      <p>Body : {data.body}</p>
      <p>Author : {data.author}</p>
      <p>category : {data.category}</p>
      <img src={data.url} alt={data.image} />
    </div>
  );
}
