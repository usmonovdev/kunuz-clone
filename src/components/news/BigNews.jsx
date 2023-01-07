import React from "react";
import { BsCalendarEvent } from "react-icons/bs";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function BigNews({ big }) {
  return (
    <>
      {big?.map((data) => {
        return (
          <div key={data.id} className="big-news">
            <LazyLoadImage src={data.img} alt={data.name} effect="blur" />
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
