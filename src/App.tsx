import { useState } from "react";
import About from "./Layout/Landing/About";
import Blog from "./Layout/Landing/Blog";
import Content from "./Layout/Landing/Content";

function App() {
  return (
    <div className="w-full flex flex-col gap-y-14">
      <Content />
      <About />
      <Blog />
    </div>
  );
}

export default App;
