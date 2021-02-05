import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

import React from "react";

function MyCarousel({ contents }) {
  return (
    <Carousel
      plugins={[
        "clickToChange",
        "centered",
        {
          resolve: slidesToShowPlugin,
          options: {
            numberOfSlides: 2,
          },
        },
      ]}
    >
      {contents.map((content, index) => (
        <div className="pictureDesciption" key={index}>
          <img src={content.img} alt="" />
          <p>{content.dsc}</p>
        </div>
      ))}
    </Carousel>
  );
}

export default MyCarousel;
