import React from "react";
import { BsCalendarEvent } from "react-icons/bs";

function RecentNews({ recent }) {
  return (
    <>
      {recent?.map((data) => {
        return (
          <div key={data.id} className="news-recent">
            <p className="date">
              <BsCalendarEvent className="icon" /> {data.date}
            </p>
            <p className="name">{data.name}</p>
          </div>
        );
      })}
    </>
  );
}

export default RecentNews;
