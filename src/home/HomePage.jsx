import { Box, Grid } from "@mui/material";
import styled from "styled-components";
import Bubble from "../components/Bubble";
import { isMobile } from "react-device-detect";
import Footer from "components/Footer";

const Landing = () => {
  const BubblesContent = [
    {
      title: "RESPECT DE LA NATURE",
      subtitle:
        "J'aime travailler à partir de matériaux naturels. Que ce soit les bâtons de bois flotté que je sélectionne au bord des rives, les bois d'orignal qui sont trouvés en forêt ou récupérés de la chasse, le coton naturel compostable que je privilégie ou mes cordes de couleurs recyclées.",
    },
    {
      title: "CONNEXION",
      subtitle:
        "Je crois que l'art offre un moyen unique de s'exprimer, de communiquer entre nous et de se comprendre. Et lorsqu'on est en connexion avec soi-même, on est aussi plus facilement en connexion avec les autres.",
    },
    {
      title: "SIMPLICITÉ",
      subtitle:
        "Je suis une grande fervente du 'acheter moins, acheter mieux'. Parce que vivre dans une maison qui prend vie grâce à quelques trésors choisis avec amour, ça n'a pas de prix.",
    },
  ];
  return (
    <>
      <VideoBackground
        src={isMobile ? "./vid/vertical.mp4" : "./vid/main_video.mp4"}
        autoPlay
        playsInline
        loop
        muted
      />

      <Box px={{ xs: 6, sm: 8, md: 18 }} py={{ xs: 2, md: 10 }}>
        <Grid container sx={{ height: "95vh" }} alignContent="center">
          <Grid item xs={12}>
            <Title>ART TEXTILE INSPIRÉ DE LA NATURE</Title>
          </Grid>
        </Grid>
      </Box>

      <Box px={6} paddingTop={{ xs: 10 }}>
        <Grid container justifyContent="space-around">
          <Grid item md={5} sm={12}>
            <MiddleSectionTitle>BIENVENUE DANS MON UNIVERS!</MiddleSectionTitle>
            <MiddleSectionParagraph>
              Je suis Laurie, maman de 2 garçons. J'habite au coeur des belles
              montagnes de Stoneham.
            </MiddleSectionParagraph>
            <MiddleSectionParagraph>
              Plutôt rêveuse, toujours pleine d'idées, pis un peu intense quand
              je m'embarque dans quelque chose.
            </MiddleSectionParagraph>
            <MiddleSectionParagraph>
              J'espère réussir à te toucher par mon art. Tu remarqueras sans
              doute ma signature végétale bien à moi. Par mes oeuvres et mes
              cours de macramé, j'ai pour mission d'aider les femmes à se
              reconnecter à leur essence !
            </MiddleSectionParagraph>
          </Grid>
          <Grid item md={6} sm={12} pt={{ xs: isMobile ? 8 : 0 }}>
            <Container>
              <RightPanel
                src="./img/landing_middle_view.jpg"
                alt="Landing middle section"
              />
            </Container>
          </Grid>
        </Grid>
      </Box>

      <Box px={{ xs: 0, sm: 8, md: 18 }} pb={8}>
        <Grid container p={2} pl={4}>
          <Grid item>
            <MiddleSectionTitle>MES VALEURS</MiddleSectionTitle>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          spacing={3}
          justifyContent="center"
          alignItems="center"
        >
          {BubblesContent.map((element, index) => (
            <Grid item key={index} xs={10} md={4}>
              <Bubble title={element.title} content={element.subtitle} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Footer />
    </>
  );
};

export default Landing;

const VideoBackground = styled.video`
  position: absolute;
  left: 0;
  top: 0;
  min-width: 100%;
  height: 100%;
  opacity: 0.3;
  z-index: 1;

  @media (min-aspect-ratio: 16/9) {
    width: 100%;
    height: auto;
  }
  @media (max-aspect-ratio: 16/9) {
    height: 100vh;

    padding: 0;
  }
`;

const Title = styled.p`
  font-size: 50px;
  color: #9f2e0e;
  text-shadow: 4px 4px 4px #00000040;

  @media (max-width: 1300px) {
    font-size: 50px;
  }
  @media (max-width: 1000px) {
    font-size: 40px;
  }
  @media (max-width: 800px) {
    font-size: 30px;
  }
`;

const Container = styled.div`
  max-width: 100vw;
`;
const RightPanel = styled.img`
  max-width: 100vw;
  height: 80vh;
`;

const MiddleSectionTitle = styled.p`
  font-size: 36px;
  color: #9f2e0e;

  @media (max-width: 800px) {
    font-size: 22px;
  }
`;

const MiddleSectionParagraph = styled.p`
  font-size: 25px;
  line-height: 30px;
  color: #0000000;
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
