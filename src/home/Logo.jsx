import { useHistory } from "react-router-dom";
import styled from "styled-components";

const StyledLogo = styled.img`
  width: 150px;
  top: 30px;
  cursor: pointer;

  @media (max-width: 600px) {
    width: 100px;
  }
`;

const Logo = () => {
  const history = useHistory();

  return (
    <StyledLogo
      src="./img/logo.png"
      alt="Logo"
      onClick={() => history.push("/")}
    />
  );
};

export default Logo;
