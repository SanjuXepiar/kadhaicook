import React from "react";
import VideoCard from "../components/VideoCard";
import { useVideoContext } from "../context/videoContext";
import { useFilterContext } from "../context/filterContext";
import VideoCardSkeleton from "../components/VideoCardSkeleton";

const RecommendedVideos = () => {
  const { loader } = useVideoContext();
  const { filtered_Videos } = useFilterContext();
  // console.log(filtered_Videos);
  // console.log(loader);
  return (
    <>
      <div className="recommendedVideos">
        {loader &&
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (
            <VideoCardSkeleton key={index} />
          ))}
        {!loader &&
          (filtered_Videos?.length ? (
            filtered_Videos.map((item) => (
              <VideoCard videoInfo={item} key={item.id} />
            ))
          ) : (
            <h2>Did not match any video...</h2>
          ))}
      </div>
    </>
  );
};

export default RecommendedVideos;
