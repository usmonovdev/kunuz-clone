import React from "react";
import { BsCalendarEvent } from "react-icons/bs";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function SmallNews({ small }) {
  return (
    <>
      {small?.map((data) => {
        return (
          <div key={data.id} className="small-news">
            <div>
              <LazyLoadImage src={data.img} alt={data.name} effect="blur" />
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
