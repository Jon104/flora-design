import { Box, Grid } from "@mui/material";
import Footer from "components/Footer";
import { isMobile } from "react-device-detect";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  margin: 5% 5%;
  z-index: 2;
  text-align: center;
`;

const Title = styled.p`
  font-size: 32px;
  color: #9f2e0e;

  @media (max-width: 600px) {
    font-size: 24px;
  }
`;

const Subtitle = styled.p`
  font-family: Barlow;
  font-size: 24px;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

const MiddleSection = styled.div`
  background: linear-gradient(
      180deg,
      #ffffff 10.92%,
      rgba(255, 255, 255, 0) 103.49%
    ),
    url("./img/my_approach.png");
  width: 100%;
  height: 800px;
  background-size: cover;
  color: white;
  padding: 20px;
  background-position: center;
`;

const MyApproach = () => {
  return (
    <>
      <Box px={{ xs: 1, sm: 8 }} py={{ xs: 12, sm: 6 }}>
        <Container>
          <Title>MA DÉMARCHE ARTISTIQUE</Title>
          <Box py={4}>
            <Grid container justifyContent="center">
              <Grid item xs={12} md={12} lg={6}>
                <iframe
                  id="iframe"
                  width="100%"
                  src="https://www.youtube.com/embed/J-JAxaAiFxU"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                />
              </Grid>
            </Grid>
          </Box>
          <Subtitle>
            Ça t'arrive de te dire que tout va trop vite?
            <Subtitle>
              Et bien quand je crée, tout s'arrête. <br />
              Je me ramène au moment présent. <br />
              Je me connecte à mon intuition et à mon élan créatif. <br />
              Je laisse mon regard se perdre dans les montagnes derrière chez
              moi. <br />
              Je me laisse porter par une musique qui m'inspire.
            </Subtitle>
            <Subtitle>
              Lorsque le temps le permet, <br />
              je m'installe dehors pour créer <br />
              et me laisser encore plus inspirer par la nature qui m'entoure.
            </Subtitle>
            <Subtitle>
              La nature est une source infinie d'inspiration. <br />
              Les feuilles, les plantes, les arbres et les fleurs font partie de
              ma signature. <br />
              J'aime choisir des matériaux naturels et responsables. <br />
              Parce qu'aimer la nature, c'est aussi avoir envie d'en prendre
              soin.
            </Subtitle>
            <Subtitle>
              Je me plonge aussi dans la vibe de ma cliente. <br />
              Je me laisse porter par ce que j'ai perçu à son contact. <br />
              Je m'inprègne de son décor, de ses goûts et de ses besoins. <br />
              Je laisse les idées mariner et la pièce prendre forme
              tranquillement dans ma tête.
            </Subtitle>
            <Subtitle>
              Et puis quand je me lance, <br />
              je contrôle le moins possible et me laisse guider par mon
              instinct. <br />
              Quelque chose naît devant mes yeux. <br />
              Et c'est jamais bien dur de baptiser mon oeuvre lorsqu'elle est
              terminée. <br />
              J'ai toujours l'impression qu'elle porte déjà sa propre identité.
            </Subtitle>
            <Subtitle>
              C'est ce que j'ai envie que tu ressentes toi aussi lorsque tu
              viens vers moi. Je veux que ta pièce résonne en toi autant qu'elle
              a résonné en moi lorsque je l'ai créée.
            </Subtitle>
          </Subtitle>
          <Subtitle>
            Je veux qu'elle te permette à toi aussi de te connecter à ton
            essence.
          </Subtitle>
        </Container>
      </Box>

      <Box
        sx={{
          marginTop: -40,
        }}
      >
        <MiddleSection />
      </Box>
      <Footer />
    </>
  );
};

export default MyApproach;
