import { Box, Grid } from "@mui/material";
import Footer from "components/Footer";
import { isMobile } from "react-device-detect";
import styled from "styled-components";
import FadeIn from "../components/effects/FadeIn";
import Bubble from "../components/Bubble";
import Button from "../components/buttons/Button";
import TopSectionImage from "components/common/TopSectionImage";

const Title = styled.p`
  font-size: 32px;
  color: #9f2e0e;

  @media (max-width: 600px) {
    font-size: 22px;
  }
`;

const Subtitle2 = styled.p`
  font-family: Barlow;
  font-size: 22px;
  font-style: italic;
  line-height: 38px;
  letter-spacing: 0.30000001192092896px;
  font-weight: bold;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

const Subtitle3 = styled.p`
  font-family: Barlow;
  font-size: 22px;
  font-style: italic;
  line-height: 38px;
  letter-spacing: 0.30000001192092896px;
  font-weight: bold;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

const MiddleSection = styled.div`
  position: relative;
  display: block;
  margin: 3% 5%;
`;

const MiddleSectionImage = styled.img`
  position: absolute;
  z-index: 1;
  left: -50%;
  max-width: 160%;

  @media (max-width: 1500px) {
    left: -70%;
    max-width: 140%;
  }

  @media (max-width: 1200px) {
    left: -60%;
    max-width: 140%;
  }
`;

const Subtitle4 = styled.p`
  font-family: Barlow;
  font-size: 28px;
  font-weight: 400;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

const bubblesContent = [
  {
    size: 6,
    week: "Semaine 1",
    title: `L'APPEL DÉCOUVERTE (sans engagement)`, // todo add saut de ligne
    content:
      "On prend une quinzaine de minutes au téléphone où je réponds à tes questions et on voit ensemble si la démarche pourrait te convenir.",
  },
  {
    size: 6,
    week: "Semaine 2",
    title: "LA RENCONTRE",
    content:
      "Lorsque tu es prête à plonger avec moi, on prend un rendez-vous d'une heure via zoom où le but est de se connecter à ton intérieur. \n - Première partie en exploration dirigée: parlons de toi. \n - Deuxième partie avec exercice de visualisation: un voyage au coeur de toi. \n - Troisième partie de présentation d'activités à faire à la maison: journal créatif, défi artistique que je vais cibler pour toi à partir de notre échange (tu n'as pas besoin d'ête douée en art).",
  },
  {
    size: 6,
    week: "Semaine 3",
    title: "LA MIJOTEUSE",
    content:
      "Tu continues d'observer ce qu'on a ciblé ensemble lors de notre premier rendez-vous. Tu réalises le petit défi que je t'ai proposé. Tu réponds aussi à mes questions sur l'endroit où l'oeuvre ira. De mon côté, je laisse mijoter ce qu'on s'est dit. J'ai un dossier à ton nom ouvert dans ma tête et dans mon carnet, pour y déposer tous mes flashs, inspirations et idées au fur et à mesure.",
  },
  {
    size: 8,
    week: "Semaine 4",
    title: "LA CO-CRÉATION:",
    content:
      "On se revoit pour un autre rendez-vous d'une heure. Tu me dis tout ce que tu as cogité. Tu me présentes ton défi artistique. Je te dis ce que moi j'ai imaginé pour toi. Je t'aide à traduire tout ça en mots et en symboles. Ensemble, on crée à partir de tout ça. On brainstorm, on mélange des idées, on parle concrètement des couleurs, de la taille et des designs. L'oeuvre prend forme dans nos têtes. Le sens se dégage. Je te propose quelques pistes de réflexion pour approfondir encore plus le sens de l'oeuvre.",
  },
  {
    size: 8,
    week: "Semaine 5",
    title: "LA NAISSANCE",
    content:
      "Je t'invite à me partager d'autres inspirations, réflexions ou flashs que notre dernier rendez-vous aura fait germer. De mon côté, je travaille fort pour que tout ce qu'on a créé ensemble se matérialise à travers mes cordes.",
  },
  {
    size: 9,
    week: "Semaine 6",
    title: "LE DÉVOILEMENT",
    content:
      "On se fixe un dernier rendez-vous d'une quinzaine de minutes où je te présente l'oeuvre finale. Je t'explique comment j'ai construit ta pièce. On élabore ce que tout ça représente pour toi.",
  },
  {
    size: 12,
    week: "Semaine 7",
    title: "LA REMISE",
    content:
      "Tu reçois ta pièce, accompagnée d'un certificat d'authenticité et d'un porte-clé souvenir. Ce porte-clé sera un extrait de l'oeuvre finale, et un symbole du processus qu'on a vécu ensembe, que tu pourras traîner partout avec toi! Je te remets aussi un cahier souvenir avec mon design exclusif, dans lequel tu trouveras mes notes sur notre démarche, que tu pourras ensuite compléter selon ton inspiration. Ensemble, on fait un bilan de l'expérience que tu as vécue.",
  },
];

const Container2 = styled.div`
  max-width: 80vw;
`;

const RightImage = styled.img`
  max-width: -webkit-fill-available;
`;

const CreateTogether = () => {
  return (
    <>
      <TopSectionImage
        title="CRÉONS ENSEMBLE, EN ART-CONNEXION"
        subtitle="Parce qu'une oeuvre créée à partir de ton essence, est bien plus
            porteuse de sens!"
        subtitle2="Ici, le processus que je te propose, c’est l’expérience ultime
              Flora Design! C’est un processus de co-création. C’est une
              expérience d’Art-connexion. C'est une rencontre intime avec moi.
              C'est un voyage à l'intérieur de toi."
        images={[
          "./img/createTogether_main_mobile.png",
          "./img/createTogether_main.jpg",
        ]}
        alt="Create Together Header Picture"
      />

      <Box px={2} py={2}>
        <MiddleSection>
          <Title>Imagine...</Title>
          <Subtitle4>
            un voyage avec moi dans lequel je t’aide à aller plus loin à
            l’intérieur de toi. Où on parvient à se connecter à ton essence, et
            à la faire se déployer ensemble. L'oeuvre que je ferai pour toi dans
            ce voyage, ce sera donc un portrait de ton intérieur:
          </Subtitle4>
          <Subtitle4>
            Ça peut être en lien avec tes souvenirs passés, tes ancrages
            profonds, les transitions que tu vis actuellement, les émotions qui
            prédominent à l'intérieur de toi, ce que tu as envie d'exprimer, le
            rappel de ce à quoi tu rêves... On va le découvrir et l'élaborer
            ensemble ! Je te propose de te laisser guider par ma démarche. Le
            tout bien sûr dans le respect de ton rythme.
          </Subtitle4>
          <Subtitle4>
            Ultimement, je sais que mettre en lumière les fondements de
            toi-même, ne peut que t'amener plus de liberté et de clarté
            intérieure. Te permettre de te sentir plus alignée.
          </Subtitle4>
          {!isMobile && (
            <MiddleSectionImage src="./img/middle_section_long_image.jpeg" />
          )}
          {bubblesContent.map((element) => (
            <Grid
              sx={{ paddingTop: 5 }}
              container
              direction="row"
              justifyContent={isMobile ? "center" : "flex-end"}
              alignItems="space-around"
            >
              <Grid item xs={isMobile ? 12 : element.size}>
                <FadeIn>
                  <Bubble
                    title={element.title}
                    content={element.content}
                    tag={element.week}
                  />
                </FadeIn>
              </Grid>
            </Grid>
          ))}
        </MiddleSection>
        <Box py={6} px={isMobile ? 2 : 12}>
          <Box pb={2}>
            <Grid container justifyContent="center">
              <Grid item>
                <Title>À QUOI ÇA RESSEMBLE ?</Title>
              </Grid>
            </Grid>
          </Box>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item sm={12} md={6}>
              <Grid container justifyContent="start">
                <Grid item xs={12}>
                  <Subtitle2>Déposer les arbres</Subtitle2>
                  <Subtitle2>
                    C'est le nom que j'ai donné à cette oeuvre.
                  </Subtitle2>
                  <Subtitle2>
                    En lien avec le désir de ma cliente de déposer les armes
                    pour s'abandonner à ses rêves.
                  </Subtitle2>
                  <Subtitle2>
                    En lien aussi avec son désir de déposer ses rêves dans la
                    réalité.
                  </Subtitle2>
                  <Subtitle2>
                    Chaque branche de cette oeuvre représente donc un rêve que
                    Caroline maintient en vie!
                  </Subtitle2>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm={12} md={5}>
              <Container2>
                <RightImage
                  src="./img/createTogether_deposer.png"
                  alt="Produit de créons ensemble"
                />
              </Container2>
            </Grid>
          </Grid>
          <Box py={6}>
            <Grid container justifyContent="center">
              <Grid item xs={10}>
                <Subtitle3>Témoignages cliente :</Subtitle3>
                <Subtitle3>
                  « On sent que t'écoutes pas pour répondre mais vraiment pour
                  comprendre »
                </Subtitle3>
                <Subtitle3>
                  « Ce n’est pas tout le monde qui pourrait s’improviser à faire
                  ça. Toi, on sent que c’est naturel pour toi d’accompagner dans
                  l’introspection »
                </Subtitle3>
              </Grid>
              <Box py={4}>
                <Grid item>
                  <Button
                    onClick={() =>
                      window.open(
                        "https://www.facebook.com/Flora-Design-2473490369540452/",
                        "_blank"
                      )
                    }
                  >
                    Écris-moi pour réserver ton appel découverte !
                  </Button>
                </Grid>
              </Box>
            </Grid>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default CreateTogether;
