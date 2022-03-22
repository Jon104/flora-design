import styled, { css } from "styled-components";

export const MainTitle = styled.p`
  position: absolute;
  top: 24%;
  width: 100%;
  font-family: Lato;
  font-weight: 500;
  line-height: 43px;
  letter-spacing: 0.30000001192092896px;
  font-size: 36px;
  color: #9f2e0e;

  ${(props) =>
    props.primary &&
    css`
      color: #ffffff;
    `};

  @media (max-width: 1300px) {
    font-size: 33px;
  }
  @media (max-width: 1000px) {
    font-size: 28px;
  }
  @media (max-width: 800px) {
    font-size: 20px;
  }
`;

export const MainSubtitle = styled.p`
  position: absolute;
  top: 46%;
  padding-left: 10rem;
  padding-right: 10rem;
  text-align: center;
  margin: 0 auto;
  font-family: Barlow;
  font-size: 32px;
  font-weight: 600;
  color: #9f2e0e;

  ${(props) =>
    props.primary &&
    css`
      color: #ffffff;
    `};

  @media (max-width: 1300px) {
    font-size: 22px;
  }
  @media (max-width: 1000px) {
    font-size: 20px;
  }
  @media (max-width: 800px) {
    top: 52%;
    padding-left: 2rem;
    padding-right: 2rem;
    font-size: 18px;
  }
`;
