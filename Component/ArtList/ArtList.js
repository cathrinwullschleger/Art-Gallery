import ArtListItem from "../ArtListItem/ArtListItem.js";

export default function ArtList({ artPieces }) {
  return (
    // if time left -> styled component
    <ul style={{ listStyle: "none", padding: "10px", margin: "10px" }}>
      {artPieces.map((artPiece) => (
        <ArtListItem key={artPiece.id} artPiece={artPiece} />
      ))}
    </ul>
  );
}
