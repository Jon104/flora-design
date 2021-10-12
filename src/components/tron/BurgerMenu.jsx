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
`;

const BottomLine = styled.div`
  ${basicDiv}
  top: 50%;
  left: 0;
  margin: -2px 0 0 0;
  width: 40px;
  transform-origin: 50% 50%;
  ${props =>
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
  ${props =>
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
  ${props =>
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
  z-index: 10;

  ${props =>
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
  background-color: ${({theme}) => theme.primary};
  box-shadow: 0px 0px 20  px red;
  z-index: 100;
`;

const LeftPanel = styled.img`
  position: absolute;
  top: -50%;
  left: -20%;
  height: 400vh;
  width: 70%;
  z-index: 20;

  background-image: url("./img/burger_panel.jpg");
`;

const menuItems = [
  {
    name: "Ma démarche artistique",
    link: "/ma-démarche",
  },
  {
    name: "Mes pièces personnalisées",
    link: "/mes-pièces",
  },
  {
    name: "Créons ensemble, en art-connexion",
    link: "/ensemble",
  },
  {
    name: "Mes oeuvres sur panache",
    link: "/panaches",
  },
  {
    name: "Cours et fournitures",
    link: "/cours",
  },
  {
    name: "Création spontanée et prêt-à-partir",
    link: "/prêt-à-partir",
  },
];

const Container = styled.div`
  padding: 10rem;
`;

const MenuItem = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 48px;
  color: #ffffff;
  font-variant-caps: small-caps;
  opacity: 0;
	transition: opacity 0.5s;
  transition-delay: 0s;

  font-family: Lato;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0.30000001192092896px;
  text-align: right;


  ${props =>
    props.isChecked &&
    css`
      opacity: 1;
      transition-delay: 0.7s;
    `};
`;

const Title = styled.a`
    text-decoration: none;
    color: #ffffff
`

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
                <Title href={item.link}>
                  {item.name}
                </Title>                
              </MenuItem>
            ))}
          </Container>
        </RightPanel>
      </Drawer>
    </>
  );
};

export default BurgerMenu;
