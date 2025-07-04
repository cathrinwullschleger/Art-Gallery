import { createGlobalStyle } from "styled-components";
import { Raleway } from "next/font/google";
import styled from "styled-components";
const raleway = Raleway({ weight: "300", subsets: ["latin"] });
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
  padding-top: 2rem;
  padding-bottom: 2rem;
  line-height: 1.5;
  list-style: none;

  h2 {
    margin-bottom: 2rem;
  }

  p {
    padding-top: 1.25rem;
    font-size: 1.25rem;
  }

  button {
    color: #551a8b;
    border: 1px solid black;
    margin-top: 1.5rem;
    padding: 0.75rem;
    background-color: white;
    font-family: ${raleway.style.fontFamily};
    font-size: 1.25rem;
    &:hover {
      font-size: 1.5rem;
      border: 1px solid #551a8b;
    }
  }
`;

export const NavList = styled.ul`
  background-color: white;
  border: 1px solid;
  list-style: none;
  padding: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
  display: flex;
  justify-content: center;
  gap: 4rem;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;
export const NavListItem = styled.li`
  display: grid;
  place-items: center;
  padding: 1rem;
  flex-grow: 1;
  list-style: none;
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 1.25rem;
  &:hover {
    color: #551a8b;
    font-size: 1.5rem;
  }
`;
