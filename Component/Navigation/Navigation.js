import { NavList, NavListItem, StyledLink } from "@/styles.js";
import { useRouter } from "next/router";

export default function Navigation() {
  const router = useRouter();
  return (
    <NavList>
      <NavListItem>
        <StyledLink href="/" isActive={router.pathname === "/"}>
          Spotlight
        </StyledLink>
      </NavListItem>
      <NavListItem>
        <StyledLink
          href="/art-pieces"
          isActive={router.pathname === "/art-pieces"}
        >
          Art Pieces
        </StyledLink>
      </NavListItem>
      <NavListItem>
        <StyledLink
          href="/favorites"
          isActive={router.pathname === "/favorites"}
        >
          Favorites
        </StyledLink>
      </NavListItem>
    </NavList>
  );
}
