import { Box, Button, Grid } from "@mui/material";
import styled from "styled-components";
import Bubble from "../components/Bubble";
import { isMobile } from "react-device-detect";
import Footer from "components/Footer";
import { useHistory } from "react-router-dom";

const HomePage = () => {
  const history = useHistory();
  const handleClickToBoutique = () => history.push("/boutique");

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
      <div>
        <VideoBackground
          src={isMobile ? "./vid/vertical.mp4" : "./vid/main_video.mp4"}
          alt="./img/main_alt.png"
          autoPlay
          playsInline
          loop
          muted
        />
      </div>

      <Box
        px={{ xs: 6, sm: 8, md: 16 }}
        py={{ xs: 36, sm: 45 }}
        sx={{ position: "relative", zIndex: 1 }}
      >
        <Grid container alignContent="center">
          <Grid item xs={12}>
            <Title>ART TEXTILE INSPIRÉ DE LA NATURE</Title>
          </Grid>
        </Grid>
      </Box>

      <CustomContainer>
        <Box px={6} pt={isMobile ? 0 : 30} pb={4}>
          <Grid container justifyContent="space-around">
            <Grid item md={5} sm={12}>
              <MiddleSectionTitle>
                BIENVENUE DANS MON UNIVERS!
              </MiddleSectionTitle>
              <MiddleSectionParagraph>
                Je suis Laurie, maman de 2 garçons. J'habite au coeur des belles
                montagnes de Stoneham.
              </MiddleSectionParagraph>
              <MiddleSectionParagraph>
                Plutôt rêveuse, toujours pleine d'idées, pis un peu intense
                quand je m'embarque dans quelque chose.
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
      </CustomContainer>

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

      <Box px={isMobile ? 3 : 10}>
        <Grid container>
          <Grid item>
            <Box>
              <MiddleSectionTitle>MES CRÉATIONS DU MOMENT</MiddleSectionTitle>
            </Box>
            <Box py={1}>
              <MiddleSectionParagraph>
                Il m'arrive de créer uniquement selon mon inspiration. D'avoir
                la pulsion de concrétiser une idée qui grossit en moi (il y en a
                tout le temps!).
              </MiddleSectionParagraph>
            </Box>
            <MiddleSectionParagraph>
              Et j'ai également quelques modèles de macramés muraux et
              jardinières coup de coeur que je garde maintenant disponibles en
              permanence sur ma boutique.
            </MiddleSectionParagraph>
            <Box py={6}>
              <Button
                onClick={() => handleClickToBoutique()}
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: "#F2E8DA",
                  color: "#9F2E0E",
                  fontSize: 15,
                  width: "20rem",
                  height: "3.5rem",
                  boxShadow: "10px 10px 30px 0px #D0CFDC66",
                }}
              >
                Voir la boutique
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Footer />
    </>
  );
};

export default HomePage;

const CustomContainer = styled.div`
  /* iphone 3 */
  @media only screen and (min-device-width: 320px) and (max-device-height: 480px) and (-webkit-device-pixel-ratio: 1) {
  }

  /* iphone 4 */
  @media only screen and (min-device-width: 320px) and (max-device-height: 480px) and (-webkit-device-pixel-ratio: 2) {
  }

  /* iphone 5 */
  @media only screen and (min-device-width: 320px) and (max-device-height: 568px) and (-webkit-device-pixel-ratio: 2) {
  }

  /* iphone 6, 6s, 7, 8 */
  @media only screen and (min-device-width: 375px) and (max-device-height: 667px) and (-webkit-device-pixel-ratio: 2) {
  }

  /* iphone 6+, 6s+, 7+, 8+ */
  @media only screen and (min-device-width: 414px) and (max-device-height: 736px) and (-webkit-device-pixel-ratio: 3) {
  }

  /* iphone X , XS, 11 Pro, 12 Mini */
  @media only screen and (min-device-width: 375px) and (max-device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
  }

  /* iphone 12, 12 Pro */
  @media only screen and (min-device-width: 390px) and (max-device-height: 844px) and (-webkit-device-pixel-ratio: 3) {
    padding-top: 11rem;
    padding-bottom: 0rem;
  }

  /* iphone XR, 11 */
  @media only screen and (min-device-width: 414px) and (max-device-height: 896px) and (-webkit-device-pixel-ratio: 2) {
    padding-top: 14rem;
    padding-bottom: 0rem;
  }

  /* iphone XS Max, 11 Pro Max */
  @media only screen and (min-device-width: 414px) and (max-device-height: 896px) and (-webkit-device-pixel-ratio: 3) {
  }

  /* iphone 12 Pro Max */
  @media only screen and (min-device-width: 428px) and (max-device-height: 926px) and (-webkit-device-pixel-ratio: 3) {
  }

  /* google pixel 4 xl */
  @media only screen and (device-width: 412px) and (device-height: 869px) and (-webkit-device-pixel-ratio: 3.5) {
    padding-top: 14rem;
    padding-bottom: 0rem;
  }

  /* google pixel 5 */
  @media only screen and (device-width: 393px) and (device-height: 851px) and (-webkit-device-pixel-ratio: 2.75) {
    padding-top: 14rem;
    padding-bottom: 0rem;
  }

  /* samsung S20 Ultra */
  @media only screen and (device-width: 412px) and (device-height: 915px) and (-webkit-device-pixel-ratio: 3.5) {
    padding-top: 16rem;
    padding-bottom: 0rem;
  }

  /* samsung S8+ */
  @media only screen and (device-width: 360px) and (device-height: 740px) and (-webkit-device-pixel-ratio: 4) {
    padding-top: 3rem;
    padding-bottom: 0rem;
  }
`;

const VideoBackground = styled.video`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  width: 100%;
  height: auto;
  z-index: 1;
  opacity: 0.4;

  @media (min-aspect-ratio: 16/9) {
    width: 100%;
    height: auto;
  }
  @media (max-aspect-ratio: 16/9) {
    height: 100vh;
    padding: 0;
    object-fit: fill;
  }
`;

const Title = styled.p`
  font-size: 50px;
  color: #9f2e0e;
  text-shadow: 4px 4px 4px #00000040;
  z-index: 1;

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
  max-height: 70vh;
  height: 80vh;

  @media (max-aspect-ratio: 16/9) {
    height: auto;
  }
`;

const MiddleSectionTitle = styled.p`
  font-size: 36px;
  color: #9f2e0e;

  @media (max-width: 800px) {
    font-size: 22px;
  }
  @media (min-aspect-ratio: 16/9) {
    padding-top: 6rem;
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
