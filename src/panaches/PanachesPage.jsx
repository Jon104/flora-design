import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Box, Drawer, Grid, Snackbar } from "@mui/material";
import Button from "components/buttons/Button";
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
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

  const [slideIndex, setSlideIndex] = useState(-1);

  const handleCloseForm = (isFormSent) => {
    toggleForm(false);
    console.log(isFormSent);
    if (isFormSent) setIsSnackbarOpen(true);
  };

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
          fa??on de rendre hommage ?? ces majestueux animaux des for??ts
          qu??b??coises que d'utiliser leurs bois pour faire des oeuvres uniques !
        </MainSubtitle>
      </TopSection>

      <Box pt={{ xs: 8 }} sx={{ overflowX: "hidden" }}>
        <ImageSlider
          slides={panachesSlides}
          slideIndex={slideIndex}
          setSlideIndex={setSlideIndex}
        />
        
        <Testimonials height="180px">
          ??
          {
            panachesSlides[slideIndex + panachesSlides.length]
              ?.testimonials
          }
          ??
          <br />
          -&nbsp;
          {panachesSlides[slideIndex + panachesSlides.length]?.name}
        </Testimonials>
      </Box>

      <SecondMiddleSection>
        <Grid container p={{ xs: 4, sm: 6 }}>
          <Grid item xs={12}>
            <Title primary>FLORA, CR??E POUR MOI ... </Title>
          </Grid>

          <Grid item xs={12}>
            <Subtitle primary>
              Les bois que j???utilise sont parfois trouv??s en for??t (tu sais que
              les cervid??s perdent leur bois naturellement tous les ans?),
              parfois issus de la chasse (les animaux sont chass??s pour leur
              nourriture, pourquoi ne pas rendre hommage ?? leur vie en
              r??cup??rant toutes leurs parties! ).
            </Subtitle>
          </Grid>
          <Grid item xs={12}>
            <Subtitle primary>
              Je peux aussi travailler ?? partir de ton propre panache. Dans ce
              cas, tu peux soit m???apporter ton panache directement chez moi ??
              Stoneham, soit me le livrer. On peut alors estimer autour de 40$
              pour la livraison, d??pendamment de la taille.
            </Subtitle>
          </Grid>
          <Box my={6}>
            <Button onClick={() => toggleForm(true)}>
              ??laborons ton projet ensemble
            </Button>
          </Box>
        </Grid>
      </SecondMiddleSection>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        severity="success"
        open={isSnackbarOpen}
        onClose={() => setIsSnackbarOpen(false)}
        autoHideDuration={2000}
        message="Formulaire envoy?? !"
      />
      <Drawer anchor="right" open={isOpen} onClose={() => toggleForm(false)}>
        <PanacheForm onClose={handleCloseForm} />
      </Drawer>
      <Footer />
    </>
  );
};

export default Panaches;
