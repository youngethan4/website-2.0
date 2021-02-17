import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import React from "react";

function MyCarousel({ contents }) {
  return (
    <CarouselProvider
      naturalSlideWidth={800}
      naturalSlideHeight={550}
      totalSlides={contents.length}
    >
      <div className="carouselContainer">
        <ButtonBack className="carouselBack">{"<"}</ButtonBack>
        <Slider>
          {contents.map((content, index) => (
            <Slide className="pictureContainer" key={index} index={index}>
              <div className="pictureDesciption">
                <img src={content.img} alt="" />
                <p>{content.dsc}</p>
              </div>
            </Slide>
          ))}
        </Slider>
        <ButtonNext className="carouselNext">{">"}</ButtonNext>
      </div>
      <DotGroup className="carouselDots" />
    </CarouselProvider>
  );
}

export default MyCarousel;
