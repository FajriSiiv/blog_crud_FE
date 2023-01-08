import axios from "axios";
import { useNavigate } from "react-router-dom";

const baseUrl = import.meta.env.VITE_APP_BACKEND;

const apiUrl = axios.create({
  baseURL: baseUrl,
  // PENTING!!!! HARUS ADA SAAT PEMANGGILAN LEWAT REACT-QUERY
  withCredentials: true,
});

export const tokenApi = async () => {
  try {
    const res = await apiUrl.get(`/token`);
    return res.data.refreshToken;
  } catch (error: any) {
    console.log(error);
  }
};

export const getBlogs = async () => {
  try {
    const response = await apiUrl.get("/blog");
    return response.data;
  } catch (error: any) {
    console.log(error.message);
  }
};

export const getBlogById = async (id: any) => {
  try {
    const response = await apiUrl.get(`/blog/${id}`);
    return response.data;
  } catch (error: any) {
    console.log(error.message);
  }
};

export const updateBlog = async (blog: any) => {
  return await apiUrl.patch(`/blog/${blog.id}`, blog, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
export const addBlog = async (blog: any) => {
  return await apiUrl.post(`/blog/`, blog, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const deleteBlog = async ({ id }: { id: any }) => {
  return await apiUrl.delete(`/blog/${id}`);
};

export const loginUser = async (user: any) => {
  return await apiUrl.post(`/login`, user);
};

export const logoutUser = async (user: any) => {
  return await apiUrl.delete("/logout", user);
};
