import React, { useState } from "react";
import styled, { css } from "styled-components";
import Slide from "../components/common/ImageSlider/Slide";
import { Box, Button, Drawer, Grid } from "@mui/material";
import PanacheForm from "../components/forms/PanacheForm";
import { TopSection, SecondMiddleSection, Slides } from "./components/element";
import { FullImage } from "./components/image";
import { MainTitle, MainSubtitle } from "./components/typography";
import Footer from "components/Footer";

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

const slides = [
  {
    image: "./img/panaches/anick.jpg",
  },
  {
    image: "./img/panaches/cynthia.jpg",
  },
  {
    image: "./img/panaches/jose.jpg",
  },
  {
    image: "./img/panaches/martineA.jpg",
  },
  {
    image: "./img/panaches/martineS.jpg",
  },
  {
    image: "./img/panaches/noname.jpg",
  },
  {
    image: "./img/panaches/rachel.jpg",
  },
  {
    image: "./img/panaches/roxane.jpg",
  },
  {
    image: "./img/panaches/tania.jpg",
  },
  {
    image: "./img/panaches/vero.jpg",
  },
  {
    image: "./img/panaches/viviane.jpg",
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
  slideIndex2: 5,
};

const slides2Reducer = (state, event) => {
  if (event.type === "NEXT") {
    return {
      ...state,
      slideIndex2: (state.slideIndex2 + 1) % slides.length,
    };
  }
  if (event.type === "PREV") {
    return {
      ...state,
      slideIndex2:
        state.slideIndex2 === 0 ? slides.length - 1 : state.slideIndex2 - 1,
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

const Panaches = () => {
  const [state, dispatch] = React.useReducer(slides2Reducer, initialState);
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
        <MainTitle>MES OEUVRES SUR PANACHE</MainTitle>
        <MainSubtitle>
          La nature est ma principale source d'inspiration. Et quelle belle
          façon de rendre hommage à ces majestueux animaux des forêts
          québécoises que d'utiliser leurs bois pour faire des oeuvres uniques !
        </MainSubtitle>
      </TopSection>

      <Box sx={{ marginBottom: 12 }} pt={{ xs: 8 }}>
        <Slides>
          <button onClick={() => onNext()} />

          {[...slides, ...slides, ...slides].map((slide, i) => {
            let offset = slides.length + (state.slideIndex2 - i);
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
                height: "3rem",
                width: "26rem",
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
