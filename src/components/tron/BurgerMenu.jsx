import React, { useState } from "react";
import Link from 'next/link'
import styled, { css } from "styled-components";

const Label = styled.label`
  display: block;
  width: 40px;
  height: 36px;
  position: fixed;
  cursor: pointer;
  right: 30px;
  top: 30px;
  z-index: 99;
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
  ${(props) =>
    props.isChecked &&
    css`
      background-color: rgba(0, 0, 0, 0.7);
    `}
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

const Drawer = styled.div`
  position: fixed;
  height: 100vh;
  right: 0;
  width: 0%;
  background-color: #ffffff;
  transition: width 0.8s cubic-bezier(0.2, -0.6, 0.3, 1.6) 0.1s;

  ${(props) =>
    props.isChecked &&
    css`
      width: 100%;
    `};
`;

const RightPanel = styled.div`
  position: absolute;
  right: 0;
  height: 100vh;
  width: 58%;
  background-color: #808080;
  box-shadow: 0px 0px 20  px red;
  z-index: 100;
`;

const LeftPanel = styled.img`
  position: absolute;
  top: 50%;
  left: -25%;
  transform: translate(50%, -50%);
  height: 100vh;
  width: 45%;
  z-index: 99;
  opacity: 0.8;
  background-image: url("./LeftPanelPicture.jpeg");
`;

const menuItems = [
  {
    name: "Crayons Ensemble",
    link: "/ensemble",
  },
  {
    name: "Crée pour moi",
    link: "/moi",
  },
  {
    name: "Création sur panache",
    link: "/panache",
  },
  {
    name: "Cours, fournitures et prêt-à-partir",
    link: "/todo",
  },
];

const Container = styled.div`
  padding: 10rem;
`;

const MenuItem = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 50px;
  padding: 32px 16px;
  color: #ffffff;
  font-variant-caps: small-caps;
  opacity: 0;
	transition: opacity 0.5s;
  transition-delay: 0s;

  ${(props) =>
    props.isChecked &&
    css`
      opacity: 1;
      transition-delay: 0.7s;
    `};
`;

const BurgerMenu = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
      <Label>
        <Input onClick={() => setIsChecked(!isChecked)} />
        <BottomLine isChecked={isChecked} />
        <MiddleLine isChecked={isChecked} />
        <TopLine isChecked={isChecked} />
      </Label>

      <Drawer isChecked={isChecked}>
        <LeftPanel />
        <RightPanel>
          <Container>
            {menuItems.map((item, index) => (
              <MenuItem key={index} isChecked={isChecked}>
                <Link href={item.link}>
                  {item.name}
                </Link>                
              </MenuItem>
            ))}
          </Container>
        </RightPanel>
      </Drawer>
    </>
  );
};

export default BurgerMenu;
