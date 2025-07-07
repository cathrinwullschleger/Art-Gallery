import ArtListItem from "../ArtListItem/ArtListItem.js";
import { ArtPiecesList } from "@/styles.js";

export default function ArtList({ artPieces, toggleLike, likedPieces = [] }) {
  // likedPieces = [] no error because there is an Array
  return (
    <ArtPiecesList>
      {artPieces.map((artPiece) => (
        <ArtListItem
          key={artPiece.id}
          artPiece={artPiece}
          isLiked={likedPieces.includes(artPiece.slug)} // isLiked?
          toggleLike={toggleLike}
        />
      ))}
    </ArtPiecesList>
  );
}
