import { isMobile } from "react-device-detect";
import styled, { css } from "styled-components";

const TopSectionImage = (props) => {
  return (
    <>
      <TopSection>
        <FullImage
          src={isMobile ? props.images[0] : props.images[1]}
          alt={props.alt}
        />
        <MainTitle>{props.title}</MainTitle>
        <MainSubtitle>{props.subtitle}</MainSubtitle>
        <SecondSubtitle>{props.subtitle2}</SecondSubtitle>
      </TopSection>
    </>
  );
};

export const TopSection = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
`;

export const FullImage = styled.img`
  position: relative;
  min-width: 100%;
  max-width: 100%;
  height: auto;
  opacity: 0.3;
  z-index: 1;
`;

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
  z-index: 2;

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
  width: 100%;
  text-align: center;
  margin: 0 auto;
  font-family: Barlow;
  font-size: 32px;
  font-weight: 600;
  color: #9f2e0e;
  z-index: 2;

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
    top: 20rem;
    font-size: 14px;
  }
`;

export const SecondSubtitle = styled.p`
  position: absolute;
  top: 55%;
  padding-left: 10rem;
  padding-right: 10rem;
  text-align: center;
  margin: 0 auto;
  font-family: Barlow;
  font-size: 32px;
  font-weight: 600;
  color: #9f2e0e;
  z-index: 2;

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
    top: 23rem;
    padding-left: 2rem;
    padding-right: 2rem;
    font-size: 14px;
  }
`;

export default TopSectionImage;
