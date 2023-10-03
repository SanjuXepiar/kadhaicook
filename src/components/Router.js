import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../sidebarLinks/Home";
import Playlist from "../sidebarLinks/Playlist";
import Watchlater from "../sidebarLinks/Watchlater";
import History from "../sidebarLinks/History";
import Liked from "../sidebarLinks/Liked";
const Router = ({ videos }) => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home videos={videos} />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/watchlater" element={<Watchlater />} />
        <Route path="/history" element={<History />} />
        <Route path="/liked" element={<Liked />} />
      </Routes>
    </div>
  );
};

export default Router;
