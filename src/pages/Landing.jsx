import styled from 'styled-components';

const Logo = styled.img`
  margin-left: auto;
  margin-right: auto;
  display: block;
  top: 0;
  left: 50%;
  z-index: 100;
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
`;

const Title = styled.p`
  padding-left: 5%;
  font-size: 70px;
  color: #9F2E0E;
  text-shadow:1px 1px 5px #9F2E0E;
`;

const Landing = () => {
  return (
    <>
      <Logo src="./img/logo.png" alt="Logo" />
      <TopImage src="./img/landing.jpg" alt="Landing page" />
      <Container>
        <Title>ART TEXTILE INSPIRÉ DE LA NATURE</Title>
      </Container>
      
    </>
  )
}

export default Landing;