import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 100%;
  background: #000;
  color: #fff;
  padding: 0 auto;
  font-size: 0.75rem;
  text-transform: capitalize;
  a {
    color: blue;
    cursor: pointer;
  }
  @media (max-width: 767px) {
    margin: 0;
    padding-left: 0.5rem;
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
