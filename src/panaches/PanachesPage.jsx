import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Box, Button, Drawer, Grid } from "@mui/material";
import PanacheForm from "../components/forms/PanacheForm";
import { TopSection, SecondMiddleSection } from "../pages/components/element";
import { FullImage } from "../pages/components/image";
import { MainTitle, MainSubtitle } from "../pages/components/typography";
import Footer from "components/Footer";
import ImageSlider from "../components/common/ImageSlider";
import panachesSlides from "./panachesSlides";
import Testimonials from "../components/typography/Testimonials";
import { isMobile } from "react-device-detect";

const Title = styled.p`
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
    font-size: 35px;
  }
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

const Subtitle = styled.p`
  font-family: Barlow;
  font-size: 32px;
  font-weight: 300;
  color: #9f2e0e;

  ${(props) =>
    props.primary &&
    css`
      color: #ffffff;
    `};

  @media (max-width: 1300px) {
    font-size: 26px;
  }
  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

const Panaches = () => {
  const [isOpen, toggleForm] = useState(false);
  const [slideIndex, setSlideIndex] = useState(-1);

  return (
    <>
      <TopSection>
        <FullImage
          src={
            isMobile
              ? "./img/panaches_main_mobile.png"
              : "./img/panaches_main.jpg"
          }
          alt="Panaches Page Header Picture"
        />
        <MainTitle>MES OEUVRES SUR PANACHE</MainTitle>
        <MainSubtitle>
          La nature est ma principale source d'inspiration. Et quelle belle
          façon de rendre hommage à ces majestueux animaux des forêts
          québécoises que d'utiliser leurs bois pour faire des oeuvres uniques !
        </MainSubtitle>
      </TopSection>

      <Box pt={{ xs: 8 }} sx={{ overflowX: "hidden" }}>
        <ImageSlider
          slides={panachesSlides}
          slideIndex={slideIndex}
          setSlideIndex={setSlideIndex}
        />
        <Grid container justifyContent="center">
          <Grid item xs={6}>
            <Box py={4}>
              <Testimonials>
                {
                  panachesSlides[slideIndex + panachesSlides.length - 1]
                    ?.testimonials
                }
              </Testimonials>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <SecondMiddleSection>
        <Grid container p={{ xs: 4, sm: 6 }}>
          <Grid item xs={12}>
            <Title primary>FLORA, CRÉE POUR MOI ... </Title>
          </Grid>

          <Grid item xs={12}>
            <Subtitle primary>
              Les bois que j’utilise sont parfois trouvés en forêt (tu sais que
              les cervidés perdent leur bois naturellement tous les ans?),
              parfois issus de la chasse (les animaux sont chassés pour leur
              nourriture, pourquoi ne pas rendre hommage à leur vie en
              récupérant toutes leurs parties! )
            </Subtitle>
          </Grid>
          <Grid item xs={12}>
            <Subtitle primary>
              Je peux aussi travailler à partir de ton propre panache. Dans ce
              cas, tu peux soit m’apporter ton panache directement chez moi à
              Stoneham, soit me le livrer. On peut alors estimer autour de 40$
              pour la livraison, dépendamment de la taille.
            </Subtitle>
          </Grid>
          <Box my={6}>
            <Button
              onClick={() => toggleForm(true)}
              variant="contained"
              size="large"
              sx={{
                backgroundColor: "#F2E8DA",
                color: "#9F2E0E",
                fontSize: 15,
                boxShadow: "10px 10px 30px 0px #D0CFDC66",
              }}
            >
              Élaborons ton projet ensemble
            </Button>
          </Box>
        </Grid>
      </SecondMiddleSection>
      <Drawer anchor="right" open={isOpen} onClose={() => toggleForm(false)}>
        <PanacheForm onClose={() => toggleForm(false)} />
      </Drawer>
      <Footer />
    </>
  );
};

export default Panaches;
