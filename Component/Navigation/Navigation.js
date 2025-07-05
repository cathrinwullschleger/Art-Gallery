import Link from "next/link";
import styled from "styled-components";

const NavList = styled.ul`
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
const NavListItem = styled.li`
  display: grid;
  place-items: center;
  padding: 1rem;
  flex-grow: 1;
  list-style: none;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
`;
export default function Navigation() {
  return (
    <NavList>
      <li>
        <StyledLink href="/">Spotlight</StyledLink>
      </li>

      <li>
        <StyledLink href="/art-pieces">Art Pieces</StyledLink>
      </li>
    </NavList>
  );
}
