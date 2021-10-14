import React from "react";
import styled from 'styled-components';

const useTilt = (active) => {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (!ref.current || !active) {
      return;
    }

    const state = {
      rect: undefined,
      mouseX: undefined,
      mouseY: undefined
    };

    let el = ref.current;

    const handleMouseMove = (e) => {
      if (!el) {
        return;
      }
      if (!state.rect) {
        state.rect = el.getBoundingClientRect();
      }
      state.mouseX = e.clientX;
      state.mouseY = e.clientY;
      const px = (state.mouseX - state.rect.left) / state.rect.width;
      const py = (state.mouseY - state.rect.top) / state.rect.height;

      el.style.setProperty("--px", px);
      el.style.setProperty("--py", py);
    };

    el.addEventListener("mousemove", handleMouseMove);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
    };
  }, [active]);

  return ref;
}

const SlideContent = styled.div`
    width: 30vw;
  height: 40vw;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  transition: transform 0.5s ease-in-out;

  display: grid;
  align-content: center;

  transform-style: preserve-3d;
  transform: perspective(1000px) translateX(calc(130% * var(--offset)))
    rotateY(calc(0deg * var(--dir)));
`;

const SlideContentInner = styled.div`
    height: 20vh;
    padding: 2% 12%;
    text-align: center;
`;

const Title = styled.p`
  font-size: 36px;
  color: #9F2E0E;
  font-family: Lato;
font-size: 32px;
font-style: italic;
font-weight: 300;
line-height: 43px;
letter-spacing: 0.30000001192092896px;
text-align: center;

`;

const Subtitle = styled.p`
  font-family: Barlow;
  font-size: 24px;
  color: #9F2E0E;
`;

const Slide = ({ slide, offset }) => {
  const active = offset === 0 ? true : null;
  const ref = useTilt(active);

  return (
    <div
      ref={ref}
      className="slide"
      data-active={active}
      style={{
        "--offset": offset,
        "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1
      }}
    >
      <div
        className="slideBackground"
        style={{
          backgroundImage: `url('${slide.image}')`
        }}
      />
      <SlideContent
        style={{
          backgroundImage: `url('${slide.image}')`
        }}
      />
      <SlideContentInner>
          <Title>{slide.testamonial.text}</Title>
          <Subtitle>{slide.testamonial.source}</Subtitle>
        </SlideContentInner>
    </div>
  );
}

export default Slide
