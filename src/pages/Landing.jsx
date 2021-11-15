import {
  Box,
  Grid,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import styled, { css } from "styled-components";
import Bubble from "../components/Bubble";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const FooterListItems = [
  "Accueil",
  "Ma démarche artistique",
  "Cours et fourniture",
  "Créations spontanées et prêt-à-partir",
];

const BubblesContent = [
  {
    title: "RESPECT DE LA NATURE",
    subtitle:
      "J'aime travailler à partir de matériaux naturels. Que ce soit les bâtons de bois flotté que je sélectionne au bord des rives, les bois d'orignal qui sont trouvés en forêt ou récupérés de la chasse, le coton naturel compostable que je privilégie ou mes cordes de couleurs recyclées.",
  },
  {
    title: "CONNEXION",
    subtitle:
      "J'aime travailler à partir de matériaux naturels. Que ce soit les bâtons de bois flotté que je sélectionne au bord des rives, les bois d'orignal qui sont trouvés en forêt ou récupérés de la chasse, le coton naturel compostable que je privilégie ou mes cordes de couleurs recyclées.",
  },
  {
    title: "RESPECT DE LA NATURE",
    subtitle:
      "J'aime travailler à partir de matériaux naturels. Que ce soit les bâtons de bois flotté que je sélectionne au bord des rives, les bois d'orignal qui sont trouvés en forêt ou récupérés de la chasse, le coton naturel compostable que je privilégie ou mes cordes de couleurs recyclées.",
  },
];

const Landing = () => {
  return (
    <>
      <Logo src="./img/logo.png" alt="Logo" />
      <VideoBackground
        src="./vid/main_video.m4v"
        autoPlay
        playsInline
        loop
        muted
      />
      <Container>
        <Title>ART TEXTILE INSPIRÉ DE LA NATURE</Title>
      </Container>
      <FlexContainer>
        <LeftPanel>
          <MiddleSectionTitle>BIENVENUE DANS MON UNIVERS</MiddleSectionTitle>
          <MiddleSectionParagraph>
            Je suis Laurie, maman de 2 garçons. J'habite au coeur des belles
            montagnes de Stoneham.{" "}
          </MiddleSectionParagraph>
          <MiddleSectionParagraph>
            Plutôt rêveuse, toujours pleine d'idées, pis un peu intense quand je
            m'embarque dans quelque chose.
          </MiddleSectionParagraph>
          <MiddleSectionParagraph>
            J'espère réussir à te toucher par mon art. Tu remarqueras sans doute
            ma signature végétale bien à moi. Par mes oeuvres et mes cours de
            macramé, j'ai pour mission d'aider les femmes à se reconnecter à
            leur essence !
          </MiddleSectionParagraph>
        </LeftPanel>
        <RightPanel
          loading="lazy"
          src="./img/landing_middle_view.jpg"
          alt="Landing middle section"
        />
      </FlexContainer>
      <Box sx={{ marginBottom: 10, padding: 2 }}>
        <Grid
          container
          direction="row"
          spacing={3}
          justifyContent="center"
          alignItems="center"
        >
          {BubblesContent.map((element) => (
            <Grid item xs={12} md={4}>
              <Bubble>
                <BubbleTitle>{element.title}</BubbleTitle>
                <BubbleSubtitle>{element.subtitle}</BubbleSubtitle>
              </Bubble>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box sx={{ padding: 1, background: "#f2e8da" }}>
        <Quote italic>"L'art est un pas de la nature vers l'Infini"</Quote>
        <Quote>— Khalil Gibran, Le sable et l'écume</Quote>
      </Box>

      <Footer>
        <Box sx={{ paddingBottom: 5, paddingTop: 4 }}>
          <Grid
            sx={{
              paddingRight: 8,
              paddingLeft: 6,
            }}
            container
            spacing={3}
          >
            <Grid item xs={6}>
              <List
                sx={{
                  color: "#ffffff",
                  fontFamily: "Lato",
                  fontSize: "25px",
                  fontWeight: "400",
                  lineHeight: "30px",
                  textAlign: "left",
                }}
              >
                <ListItemButton />
                {FooterListItems.map((text) => (
                  <ListItemText
                    primary={text}
                    sx={{
                      fontFamily: "Lato",
                      fontSize: "25px",
                      fontWeight: "400",
                      lineHeight: "30px",
                      textAlign: "left",
                    }}
                  />
                ))}
              </List>
            </Grid>
            <Grid item xs={6}>
              <FooterText>
                Pour voir plus de créations, pour avoir des informations sur mes
                offres saisonnières ou pour discuter avec moi, suivez-moi sur
                mes réseaux sociaux!
              </FooterText>
              <Grid
                container
                direction="row"
                justifyContent="flex-end"
                alignItems="flex-end"
              >
                <Grid item xs={9} />
                <Grid item xs={3} direction="reverse">
                  <IconButton
                    aria-label="instagram picture"
                    component="span"
                    onClick={() =>
                      window.open(
                        "https://www.instagram.com/flora_design_art_textile/",
                        "_blank"
                      )
                    }
                  >
                    <InstagramIcon
                      sx={{ color: "white", opacity: 0.95 }}
                      fontSize="large"
                    />
                  </IconButton>

                  <IconButton
                    aria-label="facebook picture"
                    component="span"
                    onClick={() =>
                      window.open(
                        "https://www.facebook.com/Flora-Design-2473490369540452/",
                        "_blank"
                      )
                    }
                  >
                    <FacebookIcon
                      sx={{ color: "white", opacity: 0.95 }}
                      fontSize="large"
                    />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Footer>
    </>
  );
};

export default Landing;

const FooterText = styled.p`
  font-family: Lato;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0.30000001192092896px;
  text-align: right;
  color: #ffffff;

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

const BubbleTitle = styled.p`
  position: static;
  font-size: 15px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #9f2e0e;
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

const Logo = styled.img`
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  top: 0;
  left: 39%;
  z-index: 2;

  @media (max-width: 1300px) {
    width: 220px;
  }
  @media (max-width: 800px) {
    width: 180px;
  }
  @media (max-width: 630px) {
    width: 80px;
  }
`;

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
  padding-top: 20%;
  padding-left: 5%;
  font-size: 70px;
  color: #9f2e0e;
  text-shadow: 4px 4px 4px #00000040;
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

const FlexContainer = styled.div`
  position: relative;
  display: flex;
  height: 70vh;
  padding-top: 25%;
  padding-bottom: 5%;
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
  flex: 1 1 0;
  padding-left: 5rem;
  padding-right: 5rem;
  z-index: 20;
  min-width: 40%;

  @media (max-width: 800px) {
    padding-left: 3.5rem;
    width: 45%;
  }
`;

const RightPanel = styled.img`
  flex: 1 1 0;
  max-height: 50% @media (max-width: 1300px) {
    width: 70%;
  }
`;

const MiddleSectionTitle = styled.p`
  font-size: 36px;
  color: #9f2e0e;

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
  color: #9f2e0e;
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

const Quote = styled.p`
  font-family: Lato;
  font-size: 25px;
  font-style: normal;
  font-weight: 300;
  line-height: 30px;
  letter-spacing: 0.30000001192092896px;
  text-align: center;
  color: #9f2e0e;

  @media (max-width: 1300px) {
    font-size: 20px;
  }
  @media (max-width: 1000px) {
    font-size: 20px;
  }

  ${(props) =>
    props.italic &&
    css`
      font-family: Lato;
      font-size: 25px;
      font-style: italic;
      font-weight: 300;
      line-height: 30px;
      letter-spacing: 0.30000001192092896px;
      text-align: center;
    `};
`;

const Footer = styled.div`
  width: 100%;
  left: 0px;

  background: #9f2e0e;
`;
