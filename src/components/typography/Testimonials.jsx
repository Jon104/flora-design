import React from "react";
import styled, {css} from "styled-components";

const Container = styled.div`
  ${(props) =>
      props.height &&
      css`
        height: ${props.height};
        line-height: ${props.height};
      `};
    
  padding: 4px 4px;
  
  text-align: center;
`

const Span = styled.span`
  display: inline-block;
  vertical-align: middle;
  width: 80vw;

  font-family: Lato;
  font-size: 24px;
  font-style: italic;
  font-weight: 300;
  line-height: 43px;
  letter-spacing: 0.30000001192092896px;
  text-align: center;
  color: #9f2e0e;

  @media (max-aspect-ratio: 9/16) {
    font-size: 15px;
    line-height: 20px;
  }
`;

const Testimonials = (props) => {
  return (
    <Container height={props.height}>
      <Span>{props.children}</Span>
    </Container>
  )
}

export default Testimonials

