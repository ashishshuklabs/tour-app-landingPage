import React, { useState } from "react";
import { Header } from "./components/header/Header";
import { Navigation } from "./components/navigation/Navigation";
import styled from "styled-components";
import { Footer } from "./components/footer/Footer";
export const App = () => {
  const [showNav, setShowNav] = useState(false);
  const handleButtonClick = () => {
    setShowNav(true);
  };
  const handleClose = () => {
    setShowNav(false);
  };
  return (
    <StyledApp>
      <Navigation
        showNav={showNav}
        onClose={handleClose}
        onOpen={handleButtonClick}
      />
      <Header />
      <StyledSection>
        <Footer />
      </StyledSection>
    </StyledApp>
  );
};
const StyledSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const StyledApp = styled.main`
  display: flex;
  position: relative;
  overflow: hidden;
  min-height: 100vh;
`;
