import styled from "styled-components";
import Im2 from "../../assets/images/2.png";
import { designVariables } from "../../styles/globalVariables";

export const Header = () => {
  return (
    <StyledHeader>
      <div className="banner">
        <h1>insignia</h1>
        <h2>where the journey begins</h2>
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  min-width: 100vw;
  height: 100vh;
  transition: all 0.5s linear;
  text-transform: capitalize;
  text-align: center;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${Im2}) center/cover fixed no-repeat;
  h1 {
    order: 0;
    color: ${designVariables.palette.green700};
  }
  h2 {
    color: ${designVariables.palette.green700};
  }
  .banner {
    margin: 10rem auto;
  }
`;
