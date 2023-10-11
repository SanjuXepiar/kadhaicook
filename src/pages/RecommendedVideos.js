import React from "react";
import { useVideoContext } from "../context/videoContext";
const Home = () => {
  const { loader } = useVideoContext;
  return (
    <div>
      <h1>This is Home</h1>
    </div>
  );
};

export default Home;
