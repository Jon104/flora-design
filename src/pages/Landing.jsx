import styled from 'styled-components';

const Logo = styled.img`
  margin-left: auto;
  margin-right: auto;
  display: block;
  top: 0;
  left: 50%;
  z-index: 100;

  @media (max-width: 1300px) {
    width: 220px;
  }
  @media (max-width: 800px) {
    width: 180px;
  }
  @media (max-width: 630px) {
    width: 130px;
  }
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

  @media (max-width: 1300px) {
    margin: 3% 1%;
  }
  @media (max-width: 800px) {
    margin: 0% 1%;
  }
`;

const Title = styled.p`
  padding-left: 5%;
  font-size: 70px;
  color: #9F2E0E;
  text-shadow:1px 1px 5px #9F2E0E;

  @media (max-width: 1300px) {
    font-size: 50px;
  }
  @media (max-width: 1000px) {
    font-size: 40px;
  }
  @media (max-width: 800px) {
    font-size: 28px;
  }
  @media (max-width: 630px) {
    font-size: 22px;
  }
`;

const MiddleSection = styled.div`
  position: relative;
  display: block;
  height: 100vh;
  padding-top: 25%;
  z-index: 5;

  @media (max-width: 1300px) {
    padding-top: 30%;
  }
  @media (max-width: 1000px) {
    padding-top: 22%;
  }
  @media (max-width: 800px) {
    padding-top: 24%;
  }
  @media (max-width: 630px) {
    padding-top: 20%;
  }
`;

const LeftPanel = styled.div`
  display: inline-block;
  padding-left: 5rem;
  padding-right: 5rem;
  z-index: 20;
  width: 45%;

  @media (max-width: 800px) {
    padding-left: 3.5rem;
    width: 45%;
  }
`;

const RightPanel = styled.img`
  position: absolute;
  display: inline-block;
  width: 50%;

  @media (max-width: 1300px) {
    width: 70%;
  }
`;

const MiddleSectionTitle = styled.p`
  font-size: 36px;
  color: #9F2E0E;

  @media (max-width: 1300px) {
    font-size: 26px;
  }
  @media (max-width: 1000px) {
    font-size: 22px;
  }
  @media (max-width: 800px) {
    font-size: 18px;
  }
`;

const MiddleSectionParagraph = styled.p`
  font-size: 25px;
  color: #9F2E0E;
  font-family: Barlow;


  @media (max-width: 1300px) {
    font-size: 20px;
  }
  @media (max-width: 1000px) {
    font-size: 18px;
  }
  @media (max-width: 800px) {
    font-size: 14px;
  }
`;

const Bubble = styled.div`
  border: 1px solid #F8F8FB;
  box-shadow: 10px 10px 30px rgba(208, 207, 220, 0.4);
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 18px 28px 18px 40px;
  width: 428px;
  position: absolute;

  @media (max-width: 1000px) {
    width: 370px;
  }
  @media (max-width: 1000px) {
    width: 280px;
  }
`;

const BubbleTitle = styled.p`
  position: static;
  font-size: 15px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #9F2E0E;
`;

const BubbleSubtitle = styled.p`
  font-family: Barlow;
  position: relative;
  display: flex;
  align-items: center;
  color: #373244;
  opacity: 0.8;
  font-size: 20px;

  @media (max-width: 1300px) {
    font-size: 16px;
  }
  @media (max-width: 1000px) {
    font-size: 14px;
  }
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
          <Bubble>
            <BubbleTitle>RESPECT DE LA NATURE</BubbleTitle>
            <BubbleSubtitle>J'aime travailler à partir de matériaux naturels. Que ce soit les bâtons de bois flotté que je sélectionne au bord des rives, les bois d'orignal qui sont trouvés en forêt ou récupérés de la chasse, le coton naturel compostable que je privilégie ou mes cordes de couleurs recyclées. </BubbleSubtitle>
          </Bubble>
        </LeftPanel>
        <RightPanel src="./img/landing_middle_view.jpg" alt="Landing middle section" />
      </MiddleSection>
      
    </>
  )
}

export default Landing;