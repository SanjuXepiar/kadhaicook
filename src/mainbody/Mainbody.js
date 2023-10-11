import React from "react";
import "./Mainbody.css";
import Sidebarlink from "../sidebarLinks/Sidebarlink";
import Categories from "../components/Categories";
import Router from "../components/Router";
//
import { useState, useEffect } from "react";
const url = "https://cooking-vid-backend.rosan.repl.co/api";
const Mainbody = () => {
  const [videos, setVideos] = useState([]);
  const allCategories = [
    "all",
    ...new Set(videos.map((items) => items.category)),
  ];
  const categories = allCategories;

  const filterCategories = (category) => {
    if (category === "all") {
      setVideos(videos);
    } else {
      const otherCategory = videos.filter(
        (items) => items.category === category
      );
      setVideos(otherCategory);
    }
    return;
  };
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        // console.log(data);
        setVideos(data.videos);
      } else {
        console.error(`HTTP error: ${response.status}`);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Sidebarlink />
      <div className="kadhaiContents">
        <div className="kadhaiCategories">
          <Categories
            categories={categories}
            filterCategories={filterCategories}
          />
        </div>
        <div className="kadhaiItemsBody">
          <Router videos={videos} />
        </div>
      </div>
    </>
  );
};

export default Mainbody;
