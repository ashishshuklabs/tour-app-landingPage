import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 100%;
  background: transparent;
  color: #fff;
  padding: 0 auto;
  font-size: 0.75rem;
  text-transform: capitalize;
  position: fixed;
  bottom:0;
  left: 0;
  z-index: 3;
  a {
    color: blue;
    cursor: pointer;
  }
`;

export const Footer = () => {
  return (
    <StyledFooter>
      @ copyright <a href="http://google.com">abc organisation</a> of new
      zealand
    </StyledFooter>
  );
};
