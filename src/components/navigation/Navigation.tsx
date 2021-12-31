import styled from "styled-components";
import { designVariables } from "../../styles/globalVariables";
import { Hamburger } from "../forms/button/Hamburger";
export const Navigation = ({
  showNav,
  onClose,
  onOpen,
}: {
  showNav: boolean;
  onClose: () => void;
  onOpen: () => void;
}) => {
  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };
  //added classname to hamburger button to uniquely identify and style it.
  return (
    <NavigationContainer>
      <Hamburger className="hamburger" onClick={onOpen} />
      <StyledNavigation className={`${showNav ? "show" : ""}`}>
        <div className={`nav-container `}>
          <ul className="links">
            <li className="link-item">our story</li>
            <li className="link-item">contact us</li>
          </ul>
          <button className="close-btn" onClick={handleClose}>
            x
          </button>
        </div>
      </StyledNavigation>
    </NavigationContainer>
  );
};
const NavigationContainer = styled.div`
  .hamburger {
    position: absolute;
    top: 2%;
    left: 2%;
    z-index: 2;
  }
`;
const StyledNavigation = styled.nav`
  width: 30rem;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: ${designVariables.palette.dark600};
  z-index: 2;
  transform: translateX(-100%);
  transition: ${designVariables.transition};
  box-shadow: 2px 2px 5px ${designVariables.palette.dark400};
  @media (max-width: 767px) {
    width: 100%;
    .nav-container {
      .close-btn {
        top: 1%;
        left: 3%;
      }
    }
  }
  &.show {
    transform: translateX(0);
  }
  .nav-container {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;

    .close-btn {
      position: absolute;
      top: 0.5%;
      left: 5%;
      border: none;
      background: transparent;
      color: ${designVariables.palette.green700};
      font-size: 3rem;
      cursor: pointer;
      transition: ${designVariables.transition};
      &:hover {
        color: ${designVariables.palette.green100};
      }
    }
    .links {
      list-style: none;
      order: 1;

      .link-item {
        text-transform: capitalize;
        font-size: 2rem;
        color: ${designVariables.palette.green700};
        line-height: 1;
        margin: 1rem auto;
        cursor: pointer;
        position: relative;
        &:not(:last-of-type) {
          margin-bottom: 3rem;
        }
        transition: ${designVariables.transition};
        &::after {
          content: "";
          position: absolute;
          bottom: -1rem;
          left: 50%;//this is the key to start animation from the center and then expand out
          width: 0; //Start with 0 width
          height: 2px;
          background: ${designVariables.palette.light200};
          transition: ${designVariables.transition};
        }
        &:hover {
          color: ${designVariables.palette.green100};
          transform: translateX(3px);
        }
        &:hover::after {
          background: ${designVariables.palette.green100};
          width: 100%;//max width on hover
          left: 0;//animation expands the underline completely.
        }
      }
    }
  }
`;
