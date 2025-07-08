import { render, screen, fireEvent } from "@testing-library/react";
import ArtPieceDetails from "./ArtPieceDetails.js";

jest.mock("next/router", () => ({
  useRouter: () => ({
    push: jest.fn(),
    pathname: "/art-pieces", // falls gebraucht
  }),
}));
const testPiece = {
  slug: "orange-red-and-green",
  artist: "Steve Johnson",
  name: "Orange Red and Green Abstract Painting",
  imageSource:
    "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
  year: "2018",
  genre: "Abstract Painting",
};

describe("ArtPieceDetails", () => {
  test("renders all details of art piece", () => {
    render(
      <ArtPieceDetails piece={testPiece} isLiked={true} onToggle={() => {}} />
    );

    // Titel
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      testPiece.name
    );

    // Bild
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("alt", testPiece.name);
    expect(img).toBeInTheDocument();

    // Details-Absatz (Elternelement von Artist Text)
    const detailsParagraph = screen.getByText(/artist:/i).parentElement;

    expect(detailsParagraph).toHaveTextContent(testPiece.artist);
    expect(detailsParagraph).toHaveTextContent(testPiece.year);
    expect(detailsParagraph).toHaveTextContent(testPiece.genre);

    // Back Button
    expect(
      screen.getByRole("button", { name: /back to gallery/i })
    ).toBeInTheDocument();
  });
});
