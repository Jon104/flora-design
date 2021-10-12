import styled from 'styled-components';

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
`;

const Title = styled.p`
  margin: 7%;
  font-size: 36px;
  color: #9F2E0E;
`;

const Subtitle = styled.p`
  font-size: 32px;
  color: #9F2E0E;
`;

const CreateTogether = () => {
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
      
    </>
  )
}

export default CreateTogether;