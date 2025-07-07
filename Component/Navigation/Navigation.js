import { NavList } from "@/styles.js";
import { NavListItem } from "@/styles.js";
import { StyledLink } from "@/styles.js";

export default function Navigation() {
  return (
    <NavList>
      <NavListItem>
        <StyledLink href="/">Spotlight</StyledLink>
      </NavListItem>

      <NavListItem>
        <StyledLink href="/art-pieces">Art Pieces</StyledLink>
      </NavListItem>
    </NavList>
  );
}
