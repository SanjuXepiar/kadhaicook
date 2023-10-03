import React from "react";
import "./Home.css";
const Home = ({ videos }) => {
  return (
    <div>
      {videos.map((items) => {
        const { id, title, image } = items;
        // console.log(items.category);
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

export default Home;
