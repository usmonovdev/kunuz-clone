import React from "react";
import Data from "../data";
import BigNews from "./news/BigNews";
import RecentNews from "./news/RecentNews";
import SmallNews from "./news/SmallNews";

function TopNews() {
  const filterCategoryBig = () => {
    return Data.filter((e) => e.category.includes("top-big"));
  };
  const filterCategorySmall = () => {
    return Data.filter((e) => e.category.includes("top-small"));
  };
  const filterCategoryRecent = () => {
    return Data.filter((e) => e.category.includes("recent"));
  };
  return (
    <div className="container">
      <div className="news">
        <div className="top-news">
          <div className="top-news-big">
            <BigNews big={filterCategoryBig()} />
          </div>
          <div className="top-news-small">
            <SmallNews small={filterCategorySmall()} />
          </div>
        </div>
        <div className="recent-news">
            <RecentNews recent={filterCategoryRecent()} />
        </div>
      </div>
    </div>
  );
}

export default TopNews;
