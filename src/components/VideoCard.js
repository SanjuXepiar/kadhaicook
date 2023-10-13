import React from "react";
import "./VideoCard.css";
import { Link } from "react-router-dom";
import Avatar from "antd/es/avatar/avatar";
import DropdownList from "./DropdownList";
const VideoCard = ({ videoInfo }) => {
  const { avatar_img, channel, gif, image, _id, title, timestamp, views } =
    videoInfo;

  return (
    <>
      <div className="video_card">
        <Link to={`/${_id}`}>
          <img className="video_card_static" src={image} alt={title} />
          <img className="video_card_active" src={gif} alt={title} />
        </Link>
        <div className="video_card_info">
          <Avatar className="avatar" src={avatar_img} alt="title" />
          <div className="video_card_text">
            <h4>{title}</h4>
            <p>{channel}</p>
            <p>
              {views}.{timestamp}
            </p>
          </div>
          <DropdownList videoInfo={videoInfo} />
        </div>
      </div>
    </>
  );
};

export default VideoCard;
