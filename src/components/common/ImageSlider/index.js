import Slide from "./Slide";
import Slides from "./Slides";
import PropTypes from "prop-types";

const ImageSlider = (props) => {
  const onLeftClick = () => {
    if (props.slideIndex < -1) props.setSlideIndex(props.slideIndex + 1);
  };

  const onRightClick = () => {
    if (props.slideIndex > -Math.abs(props.slides.length))
      props.setSlideIndex(props.slideIndex - 1);
  };

  return (
    <Slides>
      <button onClick={onLeftClick} />

      {props.slides.map((slide, i) => {
        let offset = props.slides.length + (props.slideIndex - i);
        return <Slide slide={slide} offset={offset} key={i} />;
      })}

      <button onClick={onRightClick} />
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
