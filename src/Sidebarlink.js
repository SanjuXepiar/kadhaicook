import React from "react";
import "./Sidebarlink.css";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import { CgPlayList } from "react-icons/cg";
import { MdWatchLater } from "react-icons/md";
import { LuHistory } from "react-icons/lu";
import { BiLike } from "react-icons/bi";
const Sidebarlink = () => {
  return (
    <div className="toggleLinks">
      <div className="link">
        <AiOutlineHome />
        <Link to="/">Home</Link>
      </div>
      <div className="link">
        <Link to="/playlist">
          <CgPlayList />
          Playlist
        </Link>
      </div>
      <div className="link">
        <Link to="/watchlater">
          <MdWatchLater /> Watchlater
        </Link>
      </div>
      <div className="link">
        <Link to="/history">
          <LuHistory /> History
        </Link>
      </div>
      <div className="link">
        <Link to="/liked">
          <BiLike /> Liked
        </Link>
      </div>
    </div>
  );
};

export default Sidebarlink;
