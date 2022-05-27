import styled from "styled-components";

export default styled.div`
  display: grid;

  > .slide {
    grid-area: 1 / -1;
  }

  > button {
    width: 15vw;

    appearance: none;
    background: transparent;
    color: #9f2e0e;

    @media (max-aspect-ratio: 16/9) {
      height: 30vw;
    }
    @media (max-aspect-ratio: 9/16) {
      height: 70vw;
    }

    border: none;
    color: white;
    position: absolute;
    font-size: 5rem;
    transition: opacity 1s;
    opacity: 0.5;
    z-index: 5;

    &:hover {
      opacity: 1;
    }

    &:focus {
      outline: none;
    }

    &:first-child {
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 1),
        rgba(255, 255, 255, 0)
      );
      left: 0;
    }
    &:last-child {
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 1)
      );
      right: 0;
    }
  }
`;
