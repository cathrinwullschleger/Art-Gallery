import { render, screen } from "@testing-library/react";
import ArtListItem from "./ArtListItem.js";

const testArtPiece = {
  slug: "orange-red-and-green",
  artist: "Steve Johnson",
  name: "Orange Red and Green Abstract Painting",
  imageSource:
    "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
  year: "2018",
  genre: "Abstract Painting",
  colors: ["#0f5855", "#e6ba15", "#b42011", "#cec4c6", "#d5561f"],
  dimensions: {
    height: 2432,
    width: 1920,
    type: "jpg",
  },
};

test("renders Image of ArtListItem", () => {
  render(<ArtListItem artPiece={testArtPiece} />);

  const image = screen.getByRole("img", {
    name: /orange red and green abstract painting/i, // alt text
  });
  expect(image).toBeInTheDocument();
});

test("renders FavoriteButton in ArtListItem", () => {
  render(<ArtListItem artPiece={testArtPiece} />);

  const favoriteButton = screen.getByRole("button");

  expect(favoriteButton).toBeInTheDocument();
});
