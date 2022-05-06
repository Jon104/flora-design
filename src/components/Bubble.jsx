import styled from "styled-components";
import React from "react";

const Bubble = ({ title, tag, content }) => {
  return (
    <Box>
      <Tag>{tag}</Tag>
      <Title>{title}</Title>
      <Subtitle>{content}</Subtitle>
    </Box>
  );
};

export default Bubble;

const Box = styled.div`
  background-color: white;
  border: 1px solid #F8F8FB
  left: 1px;
  top: 1px;
  border-radius: 30px;
  box-shadow: 10px 10px 30px 0px #d0cfdc66;
  padding: 40px 45px;

  @media (max-width: 800px) {
    padding: 20px 25px;
  }
`;

const Title = styled.p`
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 19px;
  letter-spacing: 0.5px;
  text-align: left;
  color: #9f2e0e;
`;

const Tag = styled.p`
  font-family: Lato;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0.5px;
`;

const Subtitle = styled.p`
  font-family: Barlow;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  color: #373244;
  opacity: 0.8;

  @media (max-width: 1300px) {
    font-size: 16px;
  }
`;
