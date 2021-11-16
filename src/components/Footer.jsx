import styled, { css } from "styled-components";
import { Box, Grid, List, ListItemButton, ListItemText } from "@mui/material";
import InstagramButton from "../components/buttons/InstagramButton";
import FacebookButton from "../components/buttons/FacebookButton";

const FooterListItems = [
  "Accueil",
  "Ma démarche artistique",
  "Cours et fourniture",
  "Créations spontanées et prêt-à-partir",
];

const Footer = () => (
  <div>
    <Box sx={{ padding: 1, background: "#f2e8da" }}>
      <Quote italic>"L'art est un pas de la nature vers l'Infini"</Quote>
      <Quote>— Khalil Gibran, Le sable et l'écume</Quote>
    </Box>

    <Container>
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
              offres saisonnières ou pour discuter avec moi, suivez-moi sur mes
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
