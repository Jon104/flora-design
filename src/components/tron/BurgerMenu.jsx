import React, { useState } from "react";
import styled, { css } from "styled-components";

const Label = styled.label`
  display: block;
  width: 40px;
  height: 36px;
  position: fixed;
  cursor: pointer;
  right: 30px;
  top: 30px;
`;

const Input = styled.input`
  display: none;
`;

const basicDiv = css`
  position: absolute;
  height: 4px;
  border-radius: 2px;
  background: #fff;
  transition: transform 0.45s cubic-bezier(0.9, -0.6, 0.3, 1.6),
    width 0.2s ease 0.2s;
`;

const BottomLine = styled.div`
  ${basicDiv}
  top: 50%;
  left: 0;
  margin: -2px 0 0 0;
  width: 40px;
  transform-origin: 50% 50%;
  ${(props) =>
    props.isChecked &&
    css`
      transform: rotate(-45deg);
      transition: transform 0.45s cubic-bezier(0.9, -0.6, 0.3, 1.6) 0.1s;
    `};
`;

const MiddleLine = styled.div`
  ${basicDiv}
  top: 2px;
  left: 0;
  width: 20px;
  transform-origin: 0 50%;
  ${(props) =>
    props.isChecked &&
    css`
      width: 19px;
      transform: translate(6px, 0) rotate(45deg);
      transition: transform 0.45s cubic-bezier(0.9, -0.6, 0.3, 1.6) 0.1s,
        width 0.2s ease;
    `};
`;

const TopLine = styled.div`
  ${basicDiv}
  bottom: 2px;
  right: 0;
  transform-origin: 100% 50%;
  transform: translate(-12px, 0);
  width: 28px;
  ${(props) =>
    props.isChecked &&
    css`
      width: 19px;
      transform: translate(-6px, 0) rotate(45deg);
      transition: transform 0.45s cubic-bezier(0.9, -0.6, 0.3, 1.6) 0.1s,
        width 0.2s ease;
    `};
`;

const BurgerMenu = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
      <div className="menu_container">
        <Label>
          <Input onClick={() => setIsChecked(!isChecked)} />
          <BottomLine isChecked={isChecked} />
          <MiddleLine isChecked={isChecked} />
          <TopLine isChecked={isChecked} />
        </Label>
      </div>
    </>
  );
};

export default BurgerMenu;
