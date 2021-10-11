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
  margin: 7% 1%;
  z-index: 2;
`;

const Title = styled.p`
  padding-left: 5%;
  font-size: 70px;
  color: #9F2E0E;
  text-shadow:1px 1px 5px #9F2E0E;
`;

const MiddleSection = styled.div`
  position: relative;
  display: block;
  height: 100vh;
  padding-top: 25%;
  z-index: 5;

  @media (max-width: 1300px) {
    padding-top: 20%;
  }
`;

const LeftPanel = styled.div`
  display: inline-block;
  padding-left: 5rem;
  padding-right: 5rem;
  
  z-index: 20;
  width: 45%;
`;

const RightPanel = styled.img`
  position: absolute;
  display: inline-block;
  width: 50%;
`;

const MiddleSectionTitle = styled.p`
  font-size: 36px;
  color: #9F2E0E;
`;

const MiddleSectionParagraph = styled.p`
  font-size: 25px;
  color: #9F2E0E;
`;


const Landing = () => {
  return (
    <>
      <Logo src="./img/logo.png" alt="Logo" />
      <TopImage src="./img/landing.jpg" alt="Landing page" />
      <Container>
        <Title>ART TEXTILE INSPIRÉ DE LA NATURE</Title>
      </Container>
      <MiddleSection>
        <LeftPanel>
          <MiddleSectionTitle>BIENVENUE DANS MON UNIVERS</MiddleSectionTitle>
          <MiddleSectionParagraph>Je suis Laurie, maman de 2 garçons. J'habite au coeur des belles montagnes de Stoneham. </MiddleSectionParagraph>
          <MiddleSectionParagraph>Plutôt rêveuse, toujours pleine d'idées, pis un peu intense quand je m'embarque dans quelque chose.</MiddleSectionParagraph>
          <MiddleSectionParagraph>J'espère réussir à te toucher par mon art. Tu remarqueras sans doute ma signature végétale bien à moi. Par mes oeuvres et mes cours de macramé,  j'ai pour mission d'aider les femmes à se reconnecter à leur essence !</MiddleSectionParagraph>
        </LeftPanel>
        <RightPanel src="./img/landing_middle_view.jpg" alt="Landing middle section" />
      </MiddleSection>
      
    </>
  )
}

export default Landing;