import { NavList } from "@/styles.js";
import { NavListItem } from "@/styles.js";
import { StyledLink } from "@/styles.js";

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
