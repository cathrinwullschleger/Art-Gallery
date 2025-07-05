import styled from "styled-components";
import ArtListItem from "../ArtListItem/ArtListItem.js";

const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  padding: 1rem;
  margin: 0.5rem;
`;

export default function ArtList({ artPieces }) {
  return (
    // if time left -> styled component
    <List>
      {" "}
      {artPieces.map((artPiece) => (
        <ArtListItem key={artPiece.id} artPiece={artPiece} />
      ))}
    </List>
  );
}
