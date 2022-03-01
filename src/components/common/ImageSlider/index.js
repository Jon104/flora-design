import Slide from "./Slide";
import Slides from "./Slides";
import PropTypes from "prop-types";
import { useState } from "react";

const ImageSlider = (props) => {
  // const [slideIndex, setSlideIndex] = useState(0);
  console.log(props.slides);
  return (
    <Slides>
      <button onClick={() => props.setSlideIndex(props.slideIndex + 1)} />

      {props.slides.map((slide, i) => {
        let offset = props.slides.length + (props.slideIndex - i);
        return <Slide slide={slide} offset={offset} key={i} />;
      })}

      <button onClick={() => props.setSlideIndex(props.slideIndex - 1)} />
    </Slides>
  );
};

ImageSlider.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      testimonials: PropTypes.string,
    })
  ),
};

export default ImageSlider;
