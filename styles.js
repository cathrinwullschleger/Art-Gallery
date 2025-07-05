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

    display: flex;
   justify-content: center;
  }
  p {
  font-size: 1rem;
}
`;

export const ArtPiece = styled.li`
  text-align: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
  line-height: 1.5;

  p {
    padding-top: 1.25rem;
  }

  button {
    border: 1px solid;
    margin-top: 1rem;
    padding: 0.75rem;
    background-color: white;
    font-family: ${raleway.style.fontFamily};
    font-size: 1rem;
    &:hover {
      color: #551a8b;
      font-size: 1.25rem;
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
  &:hover {
    color: #551a8b;
    font-size: 1.25rem;
  }
`;
