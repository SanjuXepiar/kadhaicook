import React from "react";
import "./Sidebarlink.css";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import { RiPlayList2Fill } from "react-icons/ri";
import { MdWatchLater } from "react-icons/md";
import { LuHistory } from "react-icons/lu";
import { BiLike } from "react-icons/bi";
const Sidebarlink = () => {
  return (
    <div className="toggleLinks">
      <Link to="/">
        <div className="link">
          <AiOutlineHome />

          <p>Home</p>
        </div>
      </Link>
      <Link to="/playlist">
        <div className="link">
          <RiPlayList2Fill />
          <p>Playlist</p>
        </div>
      </Link>
      <Link to="/watchlater">
        <div className="link">
          <MdWatchLater />
          <p>Watchlater</p>
        </div>
      </Link>
      <Link to="/history">
        <div className="link">
          <LuHistory />
          <p>History</p>
        </div>
      </Link>
      <Link to="/liked">
        <div className="link">
          <BiLike />
          <p>Liked</p>
        </div>
      </Link>
    </div>
  );
};

export default Sidebarlink;
