import RandomArtItem from "@/Component/RandomArtItem/RandomArtItem.js";
import { useState, useEffect } from "react";

export default function HomePage({
  artPieces,
  isLoading,
  error,
  likedPieces,
  toggleLike,
}) {
  const [randomIndex, setRandomIndex] = useState(null); // store the randomly seltected index once component loads

  // Run this effect only once to generate and save a random index
  useEffect(() => {
    if (artPieces && artPieces.length > 0 && randomIndex === null) {
      //only run if artPieces are loaded and no random index has been set yet
      const index = Math.floor(Math.random() * artPieces.length); // Math.random -> number 0-1 /Math.floor -> round down
      setRandomIndex(index); //save with this index (no change because of clicking favorite button)
    }
  }, [artPieces, randomIndex]);

  if (isLoading) {
    return <p>Loading artwork preview ... please wait a moment</p>;
  }

  if (error) {
    return (
      <p>
        Something went wrong while loading the artwork preview. Try refreshing
        the page.
      </p>
    );
  }
  if (!artPieces || artPieces.length === 0) {
    return <p>No art pieces found.</p>;
  }

  if (randomIndex === null) {
    return null;
  }
  const randomArtPiece = artPieces[randomIndex];
  return (
    <div>
      <h1>Art Gallery</h1>
      <RandomArtItem
        artPiece={randomArtPiece}
        isLiked={likedPieces.includes(randomArtPiece.slug)} // isLiked?
        onToggle={() => toggleLike(randomArtPiece.slug)}
      />
    </div>
  );
}
