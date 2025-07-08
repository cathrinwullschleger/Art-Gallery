import { render, screen } from "@testing-library/react";
import RandomArtItem from "./RandomArtItem";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

const testArtPiece = {
  slug: "orange-red-and-green",
  artist: "Steve Johnson",
  name: "Orange Red and Green Abstract Painting",
  imageSource:
    "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
  year: "2018",
  genre: "Abstract Painting",
};

describe("RandomArtItem", () => {
  test("renders image with correct alt and encoded src", () => {
    render(
      <RandomArtItem
        artPiece={testArtPiece}
        isLiked={false}
        onToggle={() => {}}
      />
    );
    const img = screen.getByRole("img");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("alt", testArtPiece.name);
    expect(img.src).toContain(encodeURIComponent(testArtPiece.imageSource));
  });

  test("renders favorite label if isLiked is true", () => {
    render(
      <RandomArtItem
        artPiece={testArtPiece}
        isLiked={true}
        onToggle={() => {}}
      />
    );
    expect(screen.getByText(/favorite art piece/i)).toBeInTheDocument();
  });

  test("does not render favorite label if isLiked is false", () => {
    render(
      <RandomArtItem
        artPiece={testArtPiece}
        isLiked={false}
        onToggle={() => {}}
      />
    );
    expect(screen.queryByText(/favorite art piece/i)).not.toBeInTheDocument();
  });

  test("renders art piece name", () => {
    render(
      <RandomArtItem
        artPiece={testArtPiece}
        isLiked={false}
        onToggle={() => {}}
      />
    );
    expect(screen.getByText(testArtPiece.name)).toBeInTheDocument();
  });
});
