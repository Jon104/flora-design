import React, { useState } from "react";
import styled, { css } from "styled-components";
import Slide from "../components/Slide";
import { Box, Button, Drawer } from "@mui/material";
import PanacheForm from "../components/forms/PanacheForm";

const Logo = styled.img`
  margin-left: auto;
  margin-right: auto;
  display: block;
  top: 0;
  left: 50%;
  z-index: 100;
`;

const TopImage = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  max-width: 100%;
  height: auto;
  opacity: 0.4;
  z-index: 1;
`;

const Container = styled.div`
  position: relative;
  margin: 5% 5%;
  z-index: 2;
  text-align: center;
`;

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

const MiddleSection = styled.div`
  padding: 17% 0%;
  padding-bottom: 2%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1300px) {
    padding: 6% 0%;
  }
`;

const Slides = styled.div`
  display: grid;
  > .slide {
    grid-area: 1 / -1;
  }

  > button {
    appearance: none;
    background: transparent;
    min-width: 30vw;
    min-height: 40vw;
    color: #9f2e0e;

    border: none;
    color: white;
    position: absolute;
    font-size: 5rem;
    transition: opacity 1s;
    opacity: 0.7;
    z-index: 5;

    &:hover {
      opacity: 1;
    }

    &:focus {
      outline: none;
    }

    &:first-child {
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 1),
        rgba(255, 255, 255, 0)
      );
      left: 0;
    }
    &:last-child {
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 1)
      );
      right: 0;
    }
  }
`;

const SecondMiddleSection = styled.div`
  padding: 3% 10%;
  text-align: left;
  position: relative;
  display: block;
  background: #9f2e0e;
  height: 800px;
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
  slideIndex: 0,
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

const Panaches = () => {
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
      <Logo src="./img/logo.png" alt="Logo" />
      <TopImage src="./img/landing.jpg" alt="Landing page" />
      <Container>
        <Title>MES OEUVRES SUR PANACHE</Title>
        <Subtitle>
          La nature est ma principale source d'inspiration. Et quelle belle
          façon de rendre hommage à ces majestueux animaux des forêts
          québécoises que d'utiliser leurs bois pour faire des oeuvres uniques !
        </Subtitle>
      </Container>
      <Box sx={{ paddingBottom: 10 }}>
        <MiddleSection>
          <Slides>
            <button onClick={() => onNext()} />

            {[...slides, ...slides, ...slides].map((slide, i) => {
              let offset = slides.length + (state.slideIndex - i);
              return <Slide slide={slide} offset={offset} key={i} />;
            })}
            <button onClick={() => onPrev()} />
          </Slides>
        </MiddleSection>
      </Box>

      <SecondMiddleSection>
        <Title primary>FLORA, CRÉE POUR MOI ... </Title>
        <Subtitle primary>
          Les bois que j’utilise sont parfois trouvés en forêt (tu sais que les
          cervidés perdent leur bois naturellement tous les ans?), parfois issus
          de la chasse (les animaux sont chassés pour leur nourriture, pourquoi
          ne pas rendre hommage à leur vie en récupérant toutes leurs parties! )
        </Subtitle>
        <Subtitle primary>
          Je peux aussi travailler à partir de ton propre panache. Dans ce cas,
          tu peux soit m’apporter ton panache directement chez moi à Stoneham,
          soit me le livrer. On peut alors estimer autour de 40$ pour la
          livraison, dépendamment de la taille.
        </Subtitle>
        <Box marginTop="80px">
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
      </SecondMiddleSection>
      <Drawer anchor="right" open={isOpen} onClose={() => toggleForm(false)}>
        <PanacheForm closeForm={() => toggleForm(false)} />
      </Drawer>
    </>
  );
};

export default Panaches;
