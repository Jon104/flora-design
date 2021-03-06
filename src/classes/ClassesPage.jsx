import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Box, CircularProgress, Grid } from "@mui/material";
import { TopSection, SecondMiddleSection } from "../pages/components/element";
import { FullImage } from "../pages/components/image";
import { MainTitle, MainSubtitle } from "../pages/components/typography";
import Footer from "components/Footer";
import Testimonials from "../components/typography/Testimonials";
import classesTestimonials from "./classesTestimonials";
import useInterval from "../hooks/useInterval";
import Product from "../boutique/components/Product";
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

// const BannerText = styled.p`
//   font-family: Barlow;
//   font-size: 16px;
//   font-weight: 300;
//   color: white;
//   text-align: center;

//   @media (max-width: 600px) {
//     font-size: 14px;
//   }
// `;

const Classes = ({ onAddToCart, productsByCategory }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  useInterval(() => {
    if (slideIndex + 1 === classesTestimonials.length) setSlideIndex(0);
    else setSlideIndex(slideIndex + 1);
  }, 5000);

  const cartIsLoaded = () => productsByCategory.length > 0;

  const renderLoading = () => {
    if (cartIsLoaded()) return;

    return (
      <Grid container xs={12} justifyContent="center">
        <Box pt={8}>
          <CircularProgress />
        </Box>
      </Grid>
    );
  };

  return (
    <>
      {/* <Grid
        container
        alignItems="center"
        alignContent="center"
        sx={{ position: "fixed", bottom: 0, zIndex: 6 }}
      >
        <Grid item xs={12} sx={{ backgroundColor: "#9f2e0e", zIndex: 6 }}>
          <BannerText>
            Livraison gratuite au Québec pour toute commande de plus de 75$
          </BannerText>
        </Grid>
      </Grid> */}
      <TopSection>
        <FullImage
          src={
            isMobile
              ? "./img/classes_main_mobile.png"
              : "./img/classes_main.jpg"
          }
          alt="Classes Page Header Picture"
        />
        <MainTitle>COURS ET FOURNITURES</MainTitle>
        <MainSubtitle>
          "Le macramé, c'est comme méditer mais en créant " - une cliente
          satisfaite <br></br> <br></br> J’adore partager ma passion, et te
          permettre de ressentir, toi aussi, les bienfaits de s’ancrer dans le
          moment présent pour créer.
        </MainSubtitle>
      </TopSection>

      <Testimonials height="200px">
        «
        {
          classesTestimonials[slideIndex].testimonials
        }
        »
        <br />
        -&nbsp;
        {classesTestimonials[slideIndex]?.name}
      </Testimonials>
              
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
              t’amuser !!
            </Subtitle>
          </Grid>
          <Box my={6}>
            <Subtitle primary>Joins-toi à ma communauté créative!</Subtitle>
          </Box>
        </Grid>
      </SecondMiddleSection>

      <Box padding={isMobile ? 1 : 8}>
        {renderLoading()}
        {productsByCategory
          .filter(
            (category) =>
              category.name === "Fournitures" ||
              category.name === "Ensembles créatifs incluant cours en ligne"
          )
          .map((category) => (
            <Grid container xs={12} alignItems="end">
              <Grid item xs={12}>
                <Box>
                  <Subtitle>{category.name}</Subtitle>
                </Box>
              </Grid>

              {category.data.map((product) => (
                <Grid item sm={12} md={6} lg={4} xl={3} padding={4}>
                  <Product onAddToCart={onAddToCart} product={product} />
                </Grid>
              ))}
            </Grid>
          ))}
      </Box>

      <Footer />
    </>
  );
};

export default Classes;
