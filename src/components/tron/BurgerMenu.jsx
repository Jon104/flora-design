import React, { useState } from "react";
import styled, { css } from "styled-components";
import InstagramButton from "../buttons/InstagramButton";
import FacebookButton from "../buttons/FacebookButton";
import { Box, Grid } from "@mui/material";
import { isMobile, isTablet } from "react-device-detect";

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
        {!isMobile && !isTablet && (
          <LeftPanel>
            <Box sx={{ width: "100%" }}>
              <SideImage
                src="./img/burger_panel.jpg"
                alt="burger_panel_image"
              />
            </Box>
          </LeftPanel>
        )}
        <RightPanel isChecked={isChecked}>
          <Box p={{ xs: 4, sm: 8 }} pt={{ xs: 14, sm: 16 }}>
            {menuItems.map((item, index) => (
              <MenuItem key={index} isChecked={isChecked}>
                <Title href={item.link}>{item.name}</Title>
              </MenuItem>
            ))}
          </Box>
          <FadeIn isChecked={isChecked}>
            <Box p={{ xs: 0, sm: 10 }} pr={{ xs: 2 }}>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <InstagramButton />
                </Grid>
                <Grid>
                  <FacebookButton />
                </Grid>
              </Grid>
            </Box>
          </FadeIn>
        </RightPanel>
      </Drawer>
    </>
  );
};

const FadeIn = styled.div`
  opacity: 0;
  transition: opacity 0.5s;
  transition-delay: 0.7s;

  @keyframes fadeinout {
    0,
    10%,
    90%,
    100% {
      opacity: 0;
    }
    11%,
    89% {
      opacity: 1;
    }
  }

  ${(props) =>
    props.isChecked &&
    css`
      opacity: 1;
      transition-delay: 0.7s;
    `};
`;

const SideImage = styled.img`
  height: 100vh;
`;

const Label = styled.label`
  display: block;
  width: 40px;
  height: 36px;
  position: fixed;
  cursor: pointer;
  right: 30px;
  z-index: 99;
  top: 27px;

  ${() =>
    isMobile &&
    css`
      top: 29px;
    `};
`;

const Input = styled.input`
  display: none;
`;

const basicDiv = css`
  position: absolute;
  height: 4px;
  border-radius: 2px;
  background: #9f2e0e;
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
  box-shadow: 0px 0px 4px rgb(255 255 255 / 82%);
  ${(props) =>
    props.isChecked &&
    css`
      transform: rotate(-45deg);
      transition: transform 0.45s cubic-bezier(0.9, -0.6, 0.3, 1.6) 0.1s;
      background: #fff;
    `};
`;

const MiddleLine = styled.div`
  ${basicDiv}
  top: 2px;
  left: 0;
  width: 20px;
  transform-origin: 0 50%;
  box-shadow: 0px 0px 4px rgb(255 255 255 / 82%);
  ${(props) =>
    props.isChecked &&
    css`
      width: 19px;
      transform: translate(6px, 0) rotate(45deg);
      transition: transform 0.45s cubic-bezier(0.9, -0.6, 0.3, 1.6) 0.1s,
        width 0.2s ease;
      background: #fff;
    `};
`;

const TopLine = styled.div`
  ${basicDiv}
  bottom: 2px;
  right: 0;
  transform-origin: 100% 50%;
  transform: translate(-12px, 0);
  width: 28px;
  box-shadow: 0px 0px 4px rgb(255 255 255 / 82%);
  ${(props) =>
    props.isChecked &&
    css`
      width: 19px;
      transform: translate(-6px, 0) rotate(45deg);
      transition: transform 0.45s cubic-bezier(0.9, -0.6, 0.3, 1.6) 0.1s,
        width 0.2s ease;
      background: #fff;
    `};
`;

const Drawer = styled.div`
  position: fixed;
  height: 100vh;
  right: 0;
  top: 0;
  width: 0%;
  background-color: #ffffff;
  transition: width 0.8s cubic-bezier(0.2, -0.6, 0.3, 1.6) 0.1s;
  z-index: 10;

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
  background-color: ${({ theme }) => theme.primary};
  box-shadow: 0px 0px 20 px red;
  z-index: 100;

  @media (max-width: 1000px) {
    width: 100%;
  }

  ${(props) =>
    props.isChecked &&
    css`
      width: 100%;
    `};
`;

const LeftPanel = styled.div`
  position: absolute;
  left: 0;
  height: 100vh;
  width: 58%;
  background-color: ${({ theme }) => theme.primary};
  box-shadow: 0px 0px 20 px red;
  z-index: 101;

  @media (max-width: 1200px) {
    visibility: hidden;
  }
`;

const menuItems = [
  {
    name: "Accueil",
    link: "/",
  },
  {
    name: "Ma démarche artistique",
    link: "/ma-démarche",
  },
  {
    name: "Mes pièces personnalisées",
    link: "/personal-pieces",
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
    link: "/cours-et-fournitures",
  },
  {
    name: "Boutique",
    link: "/boutique",
  },
];

const MenuItem = styled.div`
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

  @media (max-width: 600px) {
    font-size: 22px;
    line-height: 20px;
  }

  ${(props) =>
    props.isChecked &&
    css`
      opacity: 1;
      transition-delay: 0.7s;
    `};
`;

const Title = styled.a`
  text-decoration: none;
  color: #ffffff;
`;

export default BurgerMenu;
