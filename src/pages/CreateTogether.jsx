import styled from "styled-components";
import Bubble from "../components/Bubble";

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
  margin: 5% 5%;
  z-index: 2;
  text-align: center;
  text-shadow: 1px 1px 3px #9f2e0e;
`;

const Title = styled.p`
  font-size: 36px;
  color: #9f2e0e;
`;

const Subtitle = styled.p`
  font-family: Barlow;
  font-size: 32px;
  color: #9f2e0e;
`;

const MiddleSection = styled.div`
  position: relative;
  display: block;
  height: 1000px;
  margin: 5% 5%;
  padding-top: 20%;
  padding-bottom: 18%;
`;

const MiddleSectionImage = styled.img`
  position: absolute;
  left: 0;
  top: 60%;
  max-width: 100%;
  height: auto;
  opacity: 0.75;
`;

const ImageContainer = styled.div`
  background-color: #d9d8d2;
  height: 170vh;
  width: 110%;
  margin: 5% 5%;
  z-index: 2;
  text-align: center;
  text-shadow: 1px 1px 3px #9f2e0e;
`;

const CreateTogether = () => {
  return (
    <>
      <Logo src="./img/logo.png" alt="Logo" />
      <TopImage src="./img/landing.jpg" alt="Landing page" />
      <Container>
        <Title>CRÉONS ENSEMBLE, EN ART-CONNEXION</Title>
        <Subtitle>
          Parce qu'une oeuvre créée à partir de ton essence, est bien plus
          porteuse de sens!
          <Subtitle>
            Ici, le processus que je te propose, c’est l’expérience ultime Flora
            Design! C’est un processus de co-création. C’est une expérience
            d’Art-connexion. C'est une rencontre intime avec moi. C'est un
            voyage à l'intérieur de toi.
          </Subtitle>
        </Subtitle>
      </Container>

      <MiddleSection>
        <Title>Imagine...</Title>
        <Subtitle>
          un voyage avec moi dans lequel je t’aide à aller plus loin à
          l’intérieur de toi. Où on parvient à se connecter à ton essence, et à
          la faire se déployer ensemble. L'oeuvre que je ferai pour toi dans ce
          voyage, ce sera donc un portrait de ton intérieur:
        </Subtitle>
        <Subtitle>
          Ça peut être en lien avec tes souvenirs passés, tes ancrages profonds,
          les transitions que tu vis actuellement, les émotions qui prédominent
          à l'intérieur de toi, ce que tu as envie d'exprimer, le rappel de ce à
          quoi tu rêves... On va le découvrir et l'élaborer ensemble ! Je te
          propose de te laisser guider par ma démarche. Le tout bien sûr dans le
          respect de ton rythme.
        </Subtitle>
        <Subtitle>
          Ultimement, je sais que mettre en lumière les fondements de toi-même,
          ne peut que t'amener plus de liberté et de clarté intérieure. Te
          permettre de te sentir plus alignée.
        </Subtitle>
        <ImageContainer>
          <MiddleSectionImage src="./img/middle_section_long_image.jpeg" />
        </ImageContainer>
        <Bubble
          tag="Semaine 1"
          title="Respect de la nature"
          subtitle="On prend une quinzaine de minutes au téléphone où je réponds à tes questions et on voit ensemble si la démarche pourrait te convenir. Le tout sans engagement."
        />
      </MiddleSection>
    </>
  );
};

export default CreateTogether;
