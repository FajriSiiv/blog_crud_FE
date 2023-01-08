import React, { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../api/apiBlog";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginMutation = useMutation(loginUser, {
    onSuccess: () => {
      navigate("/dashboard");
    },
  });

  const loginAdmin = (e: React.FormEvent) => {
    e.preventDefault();

    loginMutation.mutate({
      email: username,
      password: password,
    });
  };

  return (
    <div className="container mx-auto flex justify-center items-center flex-col h-screen gap-y-4">
      <h1 className="text-4xl font-semibold uppercase">Login</h1>
      <form
        action=""
        onSubmit={loginAdmin}
        className="flex flex-col gap-y-3 w-1/3 mx-auto p-5 rounded-md border-2"
      >
        <div className="flex flex-col gap-y-1">
          <label htmlFor="">Username</label>
          <input
            type="text"
            placeholder="email@gmail.com"
            className="border-2 rounded-md p-2"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>
        <div className="flex flex-col gap-y-1">
          <label htmlFor="">Password</label>
          <input
            type="text"
            placeholder="password"
            className="border-2 rounded-md p-2"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <button
          type="submit"
          className="py-2 bg-emerald-400 text-white tracking-wide font-semibold rounded-md"
        >
          Login
        </button>
      </form>
    </div>
  );
}
