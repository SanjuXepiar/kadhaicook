import React from "react";
import { useState, useEffect } from "react";
const Videos = () => {
  const [list, setList] = useState([]);
  const url = "https://cooking-vid-backend.rosan.repl.co/api";
  //
  const fetchVideos = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setList(data.videos);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <div>
      {list.map((items) => {
        const { id, title, image } = items;
        console.log(items);
        return (
          <div key={id}>
            <img src={image} alt="title" />
            {title}
          </div>
        );
      })}
    </div>
  );
};

export default Videos;
