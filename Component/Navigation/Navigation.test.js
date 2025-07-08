import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation.js";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      push: jest.fn(),
      asPath: "/",
    };
  },
}));

test("should render /", () => {
  render(<Navigation />);
  const index = screen.getByRole("link", { name: "Spotlight" });
});

test("should render /art-pieces", () => {
  render(<Navigation />);
  const index = screen.getByRole("link", { name: "Art Pieces" });
});

test("should render /favorites", () => {
  render(<Navigation />);
  const index = screen.getByRole("link", { name: "Favorites" });
});
