import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Box, Button, Grid } from "@mui/material";
import { TopSection, SecondMiddleSection } from "../pages/components/element";
import { FullImage } from "../pages/components/image";
import { MainTitle, MainSubtitle } from "../pages/components/typography";
import Footer from "components/Footer";
import Testimonials from "../components/typography/Testimonials";
import classesTestimonials from "./classesTestimonials";
import useInterval from "../hooks/useInterval";

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
`;

const Classes = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  useInterval(() => setSlideIndex(slideIndex + 1), 5000);

  return (
    <>
      <TopSection>
        <FullImage
          src="./img/panaches_main.jpg"
          alt="Panaches Page Header Picture"
        />
        <MainTitle>Cours et Fournitures</MainTitle>
        <MainSubtitle>
          "Le macramé, c'est comme méditer mais en créant " - une cliente
          satisfaite J’adore partager ma passion, et te permettre de ressentir,
          toi aussi, les bienfaits de s’ancrer dans le moment présent pour
          créer.
        </MainSubtitle>
      </TopSection>

      <Box>
        <Grid container justifyContent="center">
          <Grid item xs={6}>
            <Box py={4}>
              <Testimonials>{classesTestimonials[slideIndex]}</Testimonials>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <SecondMiddleSection>
        <Grid container p={6}>
          <Grid item xs={12}>
            <Title primary>FLORA, APPRENDS-MOI ... </Title>
          </Grid>

          <Grid item xs={12}>
            <Subtitle primary>
              Mon premier kit DIY incluant cours en ligne a été développé au
              début de la pandémie, alors qu’on avait toutes besoin de se réunir
              autour de projets communs. Mes clientes m’ont ensuite amenée à
              créer de nouveaux cours pour approfondir l’apprentissage, être
              autonomes dans leurs créations et connaître mes trucs de pro!
              J’offre aussi une belle variété de cordes pour te permettre de
              t’amuser !! Visite ma boutique Etsy pour voir tous mes cours et
              fournitures.
            </Subtitle>
          </Grid>
          <Box my={6}>
            <Button
              onClick={() => console.log("yo")}
              variant="contained"
              size="large"
              sx={{
                backgroundColor: "#F2E8DA",
                color: "#9F2E0E",
                fontSize: 15,
                height: "3rem",
                width: "26rem",
                boxShadow: "10px 10px 30px 0px #D0CFDC66",
              }}
            >
              Joins-toi à ma communauté créative!
            </Button>
          </Box>
        </Grid>
      </SecondMiddleSection>
      <Footer />
    </>
  );
};

export default Classes;
