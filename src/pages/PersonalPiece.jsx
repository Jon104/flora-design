import React, { useState } from "react";
import styled, { css } from "styled-components";
import Slide from "../components/Slide";
import { Box, Button, Drawer, Grid } from "@mui/material";
import PersonalPieceForm from "components/forms/PersonalPieceForm";
import { TopSection, SecondMiddleSection, Slides } from "./components/element";
import { FullImage } from "./components/image";
import { MainTitle, MainSubtitle } from "./components/typography";
import Footer from "components/Footer";

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
  @media (max-width: 1000px) {
    font-size: 30px;
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
  @media (max-width: 1000px) {
    font-size: 22px;
  }
`;

const slides = [
  {
    image: "./img/personalPieceForm/5.jpg",
  },
  {
    image: "./img/personalPieceForm/9.jpg",
  },
  {
    image: "./img/personalPieceForm/10.jpg",
  },
  {
    image: "./img/personalPieceForm/15.jpg",
  },
  {
    image: "./img/personalPieceForm/20.jpg",
  },
];

// const testimonials = [
//   {
//     source: "Marie-Pierwwww",
//     text: "Tu vois tu lis dans la tête des gens sans même les connaître !! C'est fou!! De se baser seulement sur un questionnaire et wow les créations finales!! Je suis scotchée !",
//   },
//   {
//     source: "Sultant",
//     text: "Jesus je capote comment c'est beau!",
//   },
//   {
//     source: "Peter",
//     text: "Shartag",
//   },
//   {
//     source: "Germain",
//     text: "Bin oui!",
//   },
//   {
//     source: "Marie-Pier",
//     text: "Je capote",
//   },
// ];

const initialState = {
  slideIndex: 2,
};

const slidesReducer = (state, event) => {
  if (event.type === "NEXT") {
    return {
      ...state,
      slideIndex: (state.slideIndex + 1) % slides.length,
    };
  }
  if (event.type === "PREV") {
    return {
      ...state,
      slideIndex:
        state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1,
    };
  }
};

// const SlideContentInner = styled.div`
//   height: 20vh;
//   padding: 4% 10%;
//   text-align: center;
// `;

// const Title2 = styled.p`
//   font-size: 36px;
//   color: #9f2e0e;
//   font-family: Lato;
//   font-size: 32px;
//   font-style: italic;
//   font-weight: 300;
//   line-height: 43px;
//   letter-spacing: 0.30000001192092896px;
//   text-align: center;
// `;

// const Subtitle2 = styled.p`
//   font-family: Barlow;
//   font-size: 24px;
//   color: #9f2e0e;
// `;

const PersonalPiece = () => {
  const [state, dispatch] = React.useReducer(slidesReducer, initialState);
  const [isOpen, toggleForm] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState(0);

  const onNext = () => {
    setSelectedTestimonial(selectedTestimonial + 1);
    dispatch({ type: "NEXT" });
  };
  const onPrev = () => {
    setSelectedTestimonial(selectedTestimonial - 1);
    dispatch({ type: "PREV" });
  };

  return (
    <>
      <TopSection>
        <FullImage src="./img/landing.jpg" alt="Landing page" />
        <MainTitle>MES PIÈCES PERSONNALISÉES</MainTitle>
        <MainSubtitle>
          Que dirais-tu si je te proposais de représenter un bout de toi à
          partir de mes cordes et de mon intuition ?! <br />
          Ma spécialité c'est les grandes pièces personnalisées! J’absorbe
          toutes les informations que tu me donnes, et je crée à partir de ça.
        </MainSubtitle>
      </TopSection>

      <Box sx={{ marginBottom: 10 }} pt={{ xs: 8 }}>
        <Slides>
          <button onClick={() => onNext()} />

          {[...slides, ...slides, ...slides].map((slide, i) => {
            let offset = slides.length + (state.slideIndex - i);
            return <Slide slide={slide} offset={offset} key={i} />;
          })}
          <button onClick={() => onPrev()} />
        </Slides>
      </Box>

      <SecondMiddleSection>
        <Grid container p={6}>
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
