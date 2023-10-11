import React from "react";
import { Routes, Route } from "react-router-dom";
import RecommendedVideos from "../pages/RecommendedVideos";
import PlayList from "../pages/PlayList";
import WatchLater from "../pages/WatchLater";
import History from "../pages/History";
import LikedOne from "../pages/LikedOne";
const Router = ({ videos }) => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<RecommendedVideos />} />
        <Route path="/playlist" element={<PlayList />} />
        <Route path="/watchlater" element={<WatchLater />} />
        <Route path="/history" element={<History />} />
        <Route path="/likedone" element={<LikedOne />} />
      </Routes>
    </div>
  );
};

export default Router;
