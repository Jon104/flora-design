import React from 'react';
import styled from 'styled-components';
import Slide from '../components/Slide';

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
  text-shadow: 1px 1px 3px #9F2E0E;
`;

const Title = styled.p`
    font-family: Lato;
    font-style: italic;
    font-weight: 300;
    line-height: 43px;
    letter-spacing: 0.30000001192092896px;
text-align: center;
  font-size: 36px;
  color: #9F2E0E;
`;

const Subtitle = styled.p`
  font-family: Barlow;
  font-size: 32px;
  color: #9F2E0E;
`;

const MiddleSection = styled.div`
    padding: 20% 0%;
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
    color: #9F2E0E;

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

const slides = [
  {
    image:
      "https://dsm01pap001files.storage.live.com/y4mWARjK_lQhVyae7VRJ2y884QsGgbYUR8BIzZ6XIBjUJVzoYe7XJGpO4KDSZfuFpE71BW3kgeuFZdSnRT3gqZeDwhqZ1jlOMVhew-wOOCXrXrAFU9BYAhPvWJruvsf38K0-ITCIdnuY662_MSxbJo3S1WFDOphta1_Grvl1hrbOgJzhm3heEsoamNj7-ssFc_U?width=1024&height=1024&cropmode=none",
    testamonial: {
        source: "Marie-Pier, 27 ans",
        text: "Tu vois tu lis dans la tête des gens sans même les connaître !! C'est fou!! De se baser seulement sur un questionnaire et wow les créations finales!! Je suis scotchée !"
    }
  },
  {
    image:
      "https://dsm01pap001files.storage.live.com/y4mmkQMpwg5Q7GzRV8kAvEncfZOo4Cc1B4tTldyDm1ypl3Pem2jVY38j1i_q-KIVrOZtijfV5Vhd3DesaPZEvxEC4txtc2-MZRpfukMJTd9o8DNgl7WtOfNxIzg-jZe0xjD-dHp4xngGwrlml6aVKTiHEcO2Jp_mSPOUF1rRt9BGIfoQalqGfi0K0rxKIOq1ANH?width=1024&height=768&cropmode=none",
      testamonial: {
        source: "Marie-Pier, 27 ans",
        text: "Tu vois tu lis dans la tête des gens sans même les connaître !! C'est fou!! De se baser seulement sur un questionnaire et wow les créations finales!! Je suis scotchée !"
    }
  },
  {
    image:
      "https://dsm01pap001files.storage.live.com/y4mZJOu_giGua1sKueH5Iu7S5H1-CsD9IxgUMbCo9nufyLe3mFhOiUfS3hlWwXaFaOEZaqNRjVoomRXdhJ_2goTJRNMOYr-GM1Eh4U5BmWtzjSH4SfjXGu8QVLKR3QkfC2yxIvZntuDnIzAAbfdFPL7BPdJmwxKlOQGKuJ94tb9E2lUAv9sxJfhCYJ2RXCir9VF?width=1024&height=768&cropmode=none",
      testamonial: {
        source: "Marie-Pier, 27 ans",
        text: "Tu vois tu lis dans la tête des gens sans même les connaître !! C'est fou!! De se baser seulement sur un questionnaire et wow les créations finales!! Je suis scotchée !"
    }
  },
  {
    image:
      "https://dsm01pap001files.storage.live.com/y4mZJOu_giGua1sKueH5Iu7S5H1-CsD9IxgUMbCo9nufyLe3mFhOiUfS3hlWwXaFaOEZaqNRjVoomRXdhJ_2goTJRNMOYr-GM1Eh4U5BmWtzjSH4SfjXGu8QVLKR3QkfC2yxIvZntuDnIzAAbfdFPL7BPdJmwxKlOQGKuJ94tb9E2lUAv9sxJfhCYJ2RXCir9VF?width=1024&height=768&cropmode=none",
      testamonial: {
        source: "Marie-Pier, 27 ans",
        text: "Tu vois tu lis dans la tête des gens sans même les connaître !! C'est fou!! De se baser seulement sur un questionnaire et wow les créations finales!! Je suis scotchée !"
    }
  
  },
  {
    image:
      "https://dsm01pap001files.storage.live.com/y4mZJOu_giGua1sKueH5Iu7S5H1-CsD9IxgUMbCo9nufyLe3mFhOiUfS3hlWwXaFaOEZaqNRjVoomRXdhJ_2goTJRNMOYr-GM1Eh4U5BmWtzjSH4SfjXGu8QVLKR3QkfC2yxIvZntuDnIzAAbfdFPL7BPdJmwxKlOQGKuJ94tb9E2lUAv9sxJfhCYJ2RXCir9VF?width=1024&height=768&cropmode=none",
      testamonial: {
        source: "Marie-Pier, 27 ans",
        text: "Tu vois tu lis dans la tête des gens sans même les connaître !! C'est fou!! De se baser seulement sur un questionnaire et wow les créations finales!! Je suis scotchée !"
    }
  }
];

const initialState = {
  slideIndex: 0
};

const slidesReducer = (state, event) => {
  if (event.type === "NEXT") {
    return {
      ...state,
      slideIndex: (state.slideIndex + 1) % slides.length
    };
  }
  if (event.type === "PREV") {
    return {
      ...state,
      slideIndex:
        state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1
    };
  }
};

const PersonalPiece = () => {
  const [state, dispatch] = React.useReducer(slidesReducer, initialState);

  return (
    <>
      <Logo src="./img/logo.png" alt="Logo" />
      <TopImage src="./img/landing.jpg" alt="Landing page" />
      <Container>
        <Title>CRÉONS ENSEMBLE, EN ART-CONNEXION</Title>
        <Subtitle>
          Parce qu'une oeuvre créée à partir de ton essence, est bien plus porteuse de sens!
          <Subtitle>
            Ici, le processus que je te propose, c’est l’expérience ultime Flora Design! C’est un processus de co-création. C’est une expérience d’Art-connexion. C'est une rencontre intime avec moi. C'est un voyage à l'intérieur de toi.
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
      
    </>
  )
}

export default PersonalPiece;