import { createGlobalStyle } from "styled-components";
import { Raleway, Montserrat } from "next/font/google";
import styled from "styled-components";
const raleway = Raleway({ weight: "300", subsets: ["latin"] });
const montserrat = Montserrat({ weight: "300", subsets: ["latin"] });
import Link from "next/link";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: ${raleway.style.fontFamily};
  }
  h1 {
    font-family: ${montserrat.style.fontFamily};
    font-size: 5rem;
    padding-top: 5rem;
    margin: 0;
    text-align: center;
  }
 p {
    padding-top: 1.25rem;
    font-size: 1.25rem;
    
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5rem;
`;
export const ArtPiece = styled.li`
  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  line-height: 1.5;
  list-style: none;

  h2 {
    margin-bottom: 2rem;
  }

  p {
    padding-top: 1.25rem;
    font-size: 1.25rem;
  }
`;

export const StyledButton = styled.button`
  border: 1px solid black;
  margin-top: 1.5rem;
  padding: 0.75rem;
  background-color: white;
  font-family: ${raleway.style.fontFamily};
  font-size: 1.25rem;
  &:hover {
    font-size: 1.75rem;
  }
`;
export const NavList = styled.ul`
  background-color: white;
  border: 1px solid;
  list-style: none;
  padding: 0.75rem 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
  display: flex;
  justify-content: center;
  position: fixed !important;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;

  @media (min-width: 600px) {
    gap: 2rem;
    padding: 1rem 2rem;
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;
export const NavListItem = styled.li`
  display: grid;
  place-items: center;
  padding: 1rem;
  list-style: none;
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: ${(props) => (props.$isActive ? "1.25rem" : "0.75rem")};
  color: black;
  &:hover {
    font-size: 1.2rem;
  }

  @media (min-width: 600px) {
    font-size: ${(props) => (props.$isActive ? "2rem" : "1.25rem")};

    &:hover {
      font-size: 2rem;
    }
  }
`;

export const ArtPiecesList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  padding: 1rem;
  margin: 0.5rem;
`;

export const HeartButton = styled.button`
  margin-top: 1rem;
  font-size: 2rem;
  background: none;
  border: none;
`;

export const FormContainer = styled.form`
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;

  input {
    width: 200px;
    height: 40px;
  }

  button {
    border: 1px solid black;
    margin-top: 1.5rem;
    padding: 0.75rem;
    background-color: white;
    font-family: ${raleway.style.fontFamily};
    font-size: 1.25rem;
  }
`;
