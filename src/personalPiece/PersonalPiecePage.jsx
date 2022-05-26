import React, { useState } from "react";
import styled, { css } from "styled-components";

import { Box, Drawer, Grid } from "@mui/material";
import Button from "components/buttons/Button";
import PersonalPieceForm from "components/forms/PersonalPieceForm";
import { TopSection, SecondMiddleSection } from "../pages/components/element";
import { FullImage } from "../pages/components/image";
import { MainTitle, MainSubtitle } from "../pages/components/typography";
import Footer from "components/Footer";
import ImageSlider from "../components/common/ImageSlider";
import personalPieceSlides from "./personalPieceSlides";
import Testimonials from "../components/typography/Testimonials";
import { isMobile } from "react-device-detect";

const Title = styled.p`
  position: relative;
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

const PersonalPiece = () => {
  const [isOpen, toggleForm] = useState(false);
  const [slideIndex, setSlideIndex] = useState(-1);

  return (
    <>
      <TopSection>
        <FullImage
          src={
            isMobile
              ? "./img/personalPiece_mobile.png"
              : "./img/personalPiece.jpg"
          }
          alt="Landing page"
        />
        <MainTitle>MES PIÈCES PERSONNALISÉES</MainTitle>
        <MainSubtitle>
          Que dirais-tu si je te proposais de représenter un bout de toi à
          partir de mes cordes et de mon intuition ?!
          <br />
          <br />
          Ma spécialité c'est les grandes pièces personnalisées! J’absorbe
          toutes les informations que tu me donnes, et je crée à partir de ça.
        </MainSubtitle>
      </TopSection>

      <Box pt={{ xs: 8 }} sx={{ overflowX: "hidden" }}>
        <ImageSlider
          slides={personalPieceSlides}
          slideIndex={slideIndex}
          setSlideIndex={setSlideIndex}
        />
        <Grid container justifyContent="center">
          <Grid item xs={9} sm={6}>
            <Box py={4}>
              <Testimonials>
                «
                {
                  personalPieceSlides[slideIndex + personalPieceSlides.length]
                    ?.testimonials
                }
                »
                <br />
                -&nbsp;
                {
                  personalPieceSlides[slideIndex + personalPieceSlides.length]
                    ?.name
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
              J’absorbe toutes les informations que tu me donnes, et je crée à
              partir de ça. Parle-moi de toi, de tes goûts, de ton décor, du
              style que tu recherches, de tes pièces coup de coeur, de tes
              motifs et couleurs désirés, de ton budget... je veux tout savoir!
              Ensuite je te demande de tolérer une part de surprise et de me
              laisser aller ! Cet espace me permet de me connecter sur ta vibe
              et sur mon élan créatif pour créer ta pièce unique!
            </Subtitle>
          </Grid>
          <Grid item xs={12}>
            <Subtitle primary>
              Et si tu n’as pas d’idée précise de ce que tu veux, c’est loin
              d’être une contrainte pour moi. J’ai toujours la tête pleine
              d’idées à te proposer !
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
        <PersonalPieceForm onClose={() => toggleForm(false)} />
      </Drawer>
      <Footer />
    </>
  );
};

export default PersonalPiece;
