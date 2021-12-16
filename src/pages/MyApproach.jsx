import { Box } from "@mui/material";
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
`;

const Subtitle = styled.p`
  font-family: Barlow;
  font-size: 24px;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

const MiddleSection = styled.div`
  position: relative;
  display: block;
`;

const MiddleSectionImage = styled.img`
  position: relative;
  left: 0;
`;

const MyApproach = () => {
  return (
    <>
      <Box px={{ xs: 2, sm: 8, md: 24 }} py={{ xs: 16 }}>
        <Container>
          <Title>MA DÉMARCHE ARTISTIQUE</Title>
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

      <MiddleSection>
        <MiddleSectionImage src="./img/main_alt.png" />
      </MiddleSection>
    </>
  );
};

export default MyApproach;
