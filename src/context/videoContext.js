import React, { useState, useEffect, createContext, useContext } from "react";
const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [loader, setLoader] = useState(true);
  const [videos, setVideos] = useState(null);
  const closeLoader = () => {
    return setLoader(false);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API}`);
        // console.log(response.ok);
        const data = await response.json();
        setVideos(data.videos);
      } catch (error) {
        console.log(error.response);
      }
      closeLoader();
    };
    fetchData();
  }, []);

  return (
    <VideoContext.Provider value={{ loader, videos, closeLoader }}>
      {children}
    </VideoContext.Provider>
  );
};

export const useVideoContext = () => {
  return useContext(VideoContext);
};
