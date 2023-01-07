import React from "react";
import { BsCalendarEvent } from "react-icons/bs";

function SmallNews({ small }) {
  return (
    <>
      {small?.map((data) => {
        return (
          <div key={data.id} className="small-news">
            <div>
              <img src={data.img} alt={data.name} />
            </div>
            <div className="news-content">
              <p className="date">
                <BsCalendarEvent className="icon" /> {data.date}
              </p>
              <p className="title">{data.name}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default SmallNews;
