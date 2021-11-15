import styled from "styled-components";

const Box = styled.div`
  background-color: white;
  border: 1px solid #F8F8FB
  left: 1px;
  top: 1px;
  border-radius: 30px;
  box-shadow: 10px 10px 30px 0px #d0cfdc66;
  padding: 40px 45px;
  text-align: center;
`;

const Title = styled.p`
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 19px;
  letter-spacing: 0.5px;
  text-align: left;
  color: #9f2e0e;
`;

const Subtitle = styled.p`
  font-family: Barlow;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  color: #373244;
  opacity: 0.8;

  @media (max-width: 1300px) {
    font-size: 16px;
  }
  @media (max-width: 1000px) {
    font-size: 14px;
  }
`;

const Bubble = () => {
  return (
    <Box>
      {/* <Tag>Semaine 1</Tag> */}
      <Title>Respect de la nature</Title>
      <Subtitle>
        J'aime travailler à partir de matériaux naturels. Que ce soit les bâtons
        de bois flotté que je sélectionne au bord des rives, les bois d'orignal
        qui sont trouvés en forêt ou récupérés de la chasse, le coton naturel
        compostable que je privilégie ou mes cordes de couleurs recyclées.
      </Subtitle>
    </Box>
  );
};

export default Bubble;
