import ArtListItem from "../ArtListItem/ArtListItem.js";
import { ArtPiecesList } from "@/styles.js";

export default function ArtList({ artPieces, toggleLike, likedPieces }) {
  return (
    <ArtPiecesList>
      {artPieces.map((artPiece) => (
        <ArtListItem
          key={artPiece.slug}
          artPiece={artPiece}
          isLiked={likedPieces.includes(artPiece.slug)} // isLiked? true/false
          onToggle={() => toggleLike(artPiece.slug)} // anonymous function with argument for clicking
        />
      ))}
    </ArtPiecesList>
  );
}
