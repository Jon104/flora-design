import React, { useState } from "react";
import styled, { css } from "styled-components";
import Slide from "../components/common/ImageSlider/Slide";
import { Box, Button } from "@mui/material";

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
  text-shadow: 1px 1px 3px #9f2e0e;
`;

const Title = styled.p`
  font-family: Lato;
  font-style: italic;
  font-weight: 300;
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
  color: #9f2e0e;

  ${(props) =>
    props.primary &&
    css`
      color: #ffffff;
    `};
`;

const MiddleSection = styled.div`
  padding: 20% 0%;
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
    width: 5rem;
    height: 5rem;
    transition: opacity 0.3s;
    opacity: 0.7;
    z-index: 5;

    &:hover {
      opacity: 1;
    }

    &:focus {
      outline: none;
    }

    &:first-child {
      left: 0;
    }
    &:last-child {
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

const Drawer = styled.div`
  position: fixed;
  height: 100vh;
  right: 0;
  top: 0;
  width: 0%;
  background: ${({ theme }) => theme.primary};
  transition: width 0.8s cubic-bezier(0.2, -0.6, 0.3, 1.6) 0.1s;
  z-index: 0;

  ${(props) =>
    props.isChecked &&
    css`
      width: 58%;
    `};
`;

const OffFocusPanel = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  opacity: 0.6;
  width: 0%;
  background: #000000;
  transition: width 0.8s cubic-bezier(0.2, -0.6, 0.3, 1.6) 0.1s;

  ${(props) =>
    props.isChecked &&
    css`
      width: 42%;
    `};
`;

const slides = [
  {
    image:
      "https://dsm01pap001files.storage.live.com/y4mWARjK_lQhVyae7VRJ2y884QsGgbYUR8BIzZ6XIBjUJVzoYe7XJGpO4KDSZfuFpE71BW3kgeuFZdSnRT3gqZeDwhqZ1jlOMVhew-wOOCXrXrAFU9BYAhPvWJruvsf38K0-ITCIdnuY662_MSxbJo3S1WFDOphta1_Grvl1hrbOgJzhm3heEsoamNj7-ssFc_U?width=1024&height=1024&cropmode=none",
    testamonial: {
      source: "Marie-Pier",
      text: "Tu vois tu lis dans la t??te des gens sans m??me les conna??tre !! C'est fou!! De se baser seulement sur un questionnaire et wow les cr??ations finales!! Je suis scotch??e !",
    },
  },
  {
    image:
      "https://dsm01pap001files.storage.live.com/y4mmkQMpwg5Q7GzRV8kAvEncfZOo4Cc1B4tTldyDm1ypl3Pem2jVY38j1i_q-KIVrOZtijfV5Vhd3DesaPZEvxEC4txtc2-MZRpfukMJTd9o8DNgl7WtOfNxIzg-jZe0xjD-dHp4xngGwrlml6aVKTiHEcO2Jp_mSPOUF1rRt9BGIfoQalqGfi0K0rxKIOq1ANH?width=1024&height=768&cropmode=none",
    testamonial: {
      source: "Marie-Pier",
      text: "Tu vois tu lis dans la t??te des gens sans m??me les conna??tre !! C'est fou!! De se baser seulement sur un questionnaire et wow les cr??ations finales!! Je suis scotch??e !",
    },
  },
  {
    image:
      "https://dsm01pap001files.storage.live.com/y4mZJOu_giGua1sKueH5Iu7S5H1-CsD9IxgUMbCo9nufyLe3mFhOiUfS3hlWwXaFaOEZaqNRjVoomRXdhJ_2goTJRNMOYr-GM1Eh4U5BmWtzjSH4SfjXGu8QVLKR3QkfC2yxIvZntuDnIzAAbfdFPL7BPdJmwxKlOQGKuJ94tb9E2lUAv9sxJfhCYJ2RXCir9VF?width=1024&height=768&cropmode=none",
    testamonial: {
      source: "Marie-Pier",
      text: "Tu vois tu lis dans la t??te des gens sans m??me les conna??tre !! C'est fou!! De se baser seulement sur un questionnaire et wow les cr??ations finales!! Je suis scotch??e !",
    },
  },
  {
    image:
      "https://dsm01pap001files.storage.live.com/y4mZJOu_giGua1sKueH5Iu7S5H1-CsD9IxgUMbCo9nufyLe3mFhOiUfS3hlWwXaFaOEZaqNRjVoomRXdhJ_2goTJRNMOYr-GM1Eh4U5BmWtzjSH4SfjXGu8QVLKR3QkfC2yxIvZntuDnIzAAbfdFPL7BPdJmwxKlOQGKuJ94tb9E2lUAv9sxJfhCYJ2RXCir9VF?width=1024&height=768&cropmode=none",
    testamonial: {
      source: "Marie-Pier",
      text: "Tu vois tu lis dans la t??te des gens sans m??me les conna??tre !! C'est fou!! De se baser seulement sur un questionnaire et wow les cr??ations finales!! Je suis scotch??e !",
    },
  },
  {
    image:
      "https://dsm01pap001files.storage.live.com/y4mZJOu_giGua1sKueH5Iu7S5H1-CsD9IxgUMbCo9nufyLe3mFhOiUfS3hlWwXaFaOEZaqNRjVoomRXdhJ_2goTJRNMOYr-GM1Eh4U5BmWtzjSH4SfjXGu8QVLKR3QkfC2yxIvZntuDnIzAAbfdFPL7BPdJmwxKlOQGKuJ94tb9E2lUAv9sxJfhCYJ2RXCir9VF?width=1024&height=768&cropmode=none",
    testamonial: {
      source: "Marie-Pier",
      text: "Tu vois tu lis dans la t??te des gens sans m??me les conna??tre !! C'est fou!! De se baser seulement sur un questionnaire et wow les cr??ations finales!! Je suis scotch??e !",
    },
  },
];

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

const PersonalPiece = () => {
  const [state, dispatch] = React.useReducer(slidesReducer, initialState);
  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
      <Logo src="./img/logo.png" alt="Logo" />
      <TopImage src="./img/landing.jpg" alt="Landing page" />
      <Container>
        <Title>CR??ONS ENSEMBLE, EN ART-CONNEXION</Title>
        <Subtitle>
          Parce qu'une oeuvre cr????e ?? partir de ton essence, est bien plus
          porteuse de sens!
          <Subtitle>
            Ici, le processus que je te propose, c???est l???exp??rience ultime Flora
            Design! C???est un processus de co-cr??ation. C???est une exp??rience
            d???Art-connexion. C'est une rencontre intime avec moi. C'est un
            voyage ?? l'int??rieur de toi.
          </Subtitle>
        </Subtitle>
      </Container>

      <MiddleSection>
        <Slides>
          <button onClick={() => dispatch({ type: "NEXT" })} />

          {[...slides, ...slides, ...slides].map((slide, i) => {
            let offset = slides.length + (state.slideIndex - i);
            return <Slide slide={slide} offset={offset} key={i} />;
          })}
          <button onClick={() => dispatch({ type: "PREV" })} />
        </Slides>
      </MiddleSection>

      <SecondMiddleSection>
        <Title primary>FLORA, CR??E POUR MOI ... </Title>
        <Subtitle primary>
          J???absorbe toutes les informations que tu me donnes, et je cr??e ??
          partir de ??a. Parle-moi de toi, de tes go??ts, de ton d??cor, du style
          que tu recherches, de tes pi??ces coup de coeur, de tes motifs et
          couleurs d??sir??s, de ton budget... je veux tout savoir! Ensuite je te
          demande de tol??rer une part de surprise et de me laisser aller ! Cet
          espace me permet de me connecter sur ta vibe et sur mon ??lan cr??atif
          pour cr??er ta pi??ce unique!
        </Subtitle>
        <Subtitle primary>
          Et si tu n???as pas d???id??e pr??cise de ce que tu veux, c???est loin d?????tre
          une contrainte pour moi. J???ai toujours la t??te pleine d???id??es ?? te
          proposer !
        </Subtitle>
        <Box marginTop="80px">
          <Button
            onClick={() => setIsChecked(!isChecked)}
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
            ??laborons ton projet ensemble
          </Button>
        </Box>
      </SecondMiddleSection>

      <Drawer isChecked={isChecked}>
        <OffFocusPanel
          isChecked={isChecked}
          onClick={() => setIsChecked(!isChecked)}
        />
        <form method="post">
          <input type="hidden" name="contact" value="contact" />
          <p>
            <label>
              Your Name: <input type="text" name="name" />
            </label>
          </p>
          <p>
            <label>
              Your Email: <input type="email" name="email" />
            </label>
          </p>
          <p>
            <label>
              Message: <textarea name="message" />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
        <form method="post">
          <input type="hidden" name="test" value="test" />
          <p>
            <label>
              Your Age: <input type="text" name="age" />
            </label>
          </p>
          <p>
            <label>
              Your MamaSita: <input type="text" name="mamasita" />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </Drawer>
    </>
  );
};

export default PersonalPiece;
