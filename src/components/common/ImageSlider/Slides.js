import styled from "styled-components";

export default styled.div`
  display: grid;
  > .slide {
    grid-area: 1 / -1;
  }

  > button {
    appearance: none;
    background: transparent;
    min-width: 30vw;
    min-height: 40vw;
    color: #9f2e0e;

    border: none;
    color: white;
    position: absolute;
    font-size: 5rem;
    transition: opacity 1s;
    opacity: 0.7;
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
