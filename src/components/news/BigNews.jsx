import React from "react";
import { BsCalendarEvent } from "react-icons/bs";

function BigNews({ big }) {
  return (
    <>
      {big?.map((data) => {
        return (
          <div key={data.id} className="big-news">
            <img src={data.img} alt={data.name} />
            <div className="card">
              <p className="date">
                <BsCalendarEvent className="icon" /> {data.date}
              </p>
              <h3 className="name">{data.name}</h3>
              <p className="title">{data.title}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default BigNews;
