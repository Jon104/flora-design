import styled, { css } from "styled-components";
import { Box, Grid, List, ListItemButton, ListItemText } from "@mui/material";
import InstagramButton from "../components/buttons/InstagramButton";
import FacebookButton from "../components/buttons/FacebookButton";
import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";

const FooterListItems = [
  {
    name: "ACCUEIL",
    link: "/",
  },
  {
    name: "MA DÉMARCHE ARTISTIQUE",
    link: "/ma-démarche",
  },
  {
    name: "MES PIÈCES PERSONNALISÉES",
    link: "/pièces-personnalisées",
  },
  {
    name: "CRÉONS ENSEMBLE, EN ART-CONNEXION",
    link: "/ensemble",
  },
  {
    name: "MES OEUVRES SUR PANACHE",
    link: "/panaches",
  },
  {
    name: "COURS ET FOURNITURES",
    link: "/cours-et-fournitures",
  },
  {
    name: "BOUTIQUE",
    link: "/boutique",
  },
];

const Footer = () => (
  <div>
    <Box sx={{ padding: 1, background: "#f2e8da" }}>
      <Quote italic>"L'art est un pas de la nature vers l'Infini"</Quote>
      <Quote>— Khalil Gibran, Le sable et l'écume</Quote>
    </Box>

    <Container>
      <Box sx={{ paddingBottom: 5, paddingTop: 4 }} px={2}>
        <Grid px={2} container spacing={5}>
          <Grid item xs={12} sm={6}>
            <List>
              {FooterListItems.map((item, index) => (
                <ListItemButton key={index} component={Link} to={item.link}>
                  <ListItemText
                    sx={{
                      textAlign: isMobile ? "center" : "flex-start",
                      color: "#ffffff",
                      fontFamily: "Lato",
                      fontSize: "18px",
                      fontWeight: "400",
                    }}
                    primary={item.name}
                  />
                </ListItemButton>
              ))}
            </List>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FooterText>
              Pour voir plus de créations, pour avoir des informations sur mes
              offres saisonnières ou pour discuter avec moi, suis-moi sur mes
              réseaux sociaux!
            </FooterText>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <InstagramButton />
              </Grid>
              <Grid item>
                <FacebookButton />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  </div>
);

export default Footer;

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

const Container = styled.div`
  width: 100%;
  left: 0px;

  background: #9f2e0e;
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
  @media (max-width: 800px) {
    font-size: 15px;
  }

  ${(props) =>
    props.italic &&
    css`
      font-family: Lato;
      font-style: italic;
      font-weight: 300;
      line-height: 30px;
      letter-spacing: 0.30000001192092896px;
      text-align: center;
    `};
`;
