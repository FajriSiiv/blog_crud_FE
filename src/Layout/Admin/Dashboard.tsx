import React, { useEffect, useState, Fragment } from "react";
import { useQuery } from "react-query";
import { tokenApi } from "../../api/apiBlog";
import jwtDecode from "jwt-decode";
import DashboardBlog from "./Blog/DashboardBlog";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const { data: token, isLoading, isError } = useQuery("token", tokenApi);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error..</p>;
  }

  return (
    <>
      <div className="min-h-full">
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            {/* Replace with your content */}
            <div className="px-4 py-6 sm:px-0">
              <div className="h-fit rounded-lg border-4 border-dashed border-gray-200">
                <DashboardBlog />
              </div>
            </div>
            {/* /End replace */}
          </div>
        </main>
      </div>
    </>
  );
}
