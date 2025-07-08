import { render, screen, fireEvent } from "@testing-library/react";
import ArtList from "./ArtList.js";

// Tests from ChatGPT

const mockToggleLike = jest.fn(); // Mock-funktion in Jest um die ToggleFunktion zu imitieren

const artPieces = [
  {
    slug: "sunset",
    title: "Sunset",
    imageSource: "/sunset.jpg",
    artist: "Alice",
  },
  {
    slug: "mountain",
    title: "Mountain",
    imageSource: "/mountain.jpg",
    artist: "Bob",
  },
];

const likedPieces = ["sunset"];

jest.mock("../ArtListItem/ArtListItem.js", () => {
  return function MockArtListItem({ artPiece, isLiked, onToggle }) {
    return (
      <div data-testid="art-list-item">
        <h2>{artPiece.title}</h2>
        <p>{isLiked ? "Liked" : "Not liked"}</p>
        <button onClick={onToggle}>Toggle Like</button>
      </div>
    );
  };
});

describe("ArtList", () => {
  beforeEach(() => {
    mockToggleLike.mockClear();
  });

  test("renders all art pieces", () => {
    render(
      <ArtList
        artPieces={artPieces}
        likedPieces={likedPieces}
        toggleLike={mockToggleLike}
      />
    );
    const items = screen.getAllByTestId("art-list-item");
    expect(items).toHaveLength(2);
    expect(screen.getByText("Sunset")).toBeInTheDocument();
    expect(screen.getByText("Mountain")).toBeInTheDocument();
  });

  test("correctly marks liked pieces", () => {
    render(
      <ArtList
        artPieces={artPieces}
        likedPieces={likedPieces}
        toggleLike={mockToggleLike}
      />
    );
    expect(screen.getAllByText(/liked/i)[0]).toHaveTextContent("Liked");
    expect(screen.getAllByText(/liked/i)[1]).toHaveTextContent("Not liked");
  });

  test("calls toggleLike with correct slug on button click", () => {
    render(
      <ArtList
        artPieces={artPieces}
        likedPieces={likedPieces}
        toggleLike={mockToggleLike}
      />
    );
    const buttons = screen.getAllByRole("button", { name: /toggle like/i });
    fireEvent.click(buttons[0]);
    fireEvent.click(buttons[1]);
    expect(mockToggleLike).toHaveBeenCalledTimes(2);
    expect(mockToggleLike).toHaveBeenCalledWith("sunset");
    expect(mockToggleLike).toHaveBeenCalledWith("mountain");
  });
});
