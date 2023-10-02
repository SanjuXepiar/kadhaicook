import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Playlist from "./Playlist";
import Watchlater from "./Watchlater";
import History from "./History";
import Liked from "./Liked";
const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/watchlater" element={<Watchlater />} />
        <Route path="/history" element={<History />} />
        <Route path="/liked" element={<Liked />} />
      </Routes>
    </div>
  );
};

export default Router;
