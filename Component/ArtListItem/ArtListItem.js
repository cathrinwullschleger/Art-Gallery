import Image from "next/image";
import styled from "styled-components";

const ListItem = styled.li`
  text-align: center;
  padding-top: 2rem;
  padding-bottom: 2rem;

  p {
    padding-top: 1.25rem;
  }
`;
export default function ArtListItem({ artPiece }) {
  return (
    <ListItem>
      <Image
        src={artPiece.imageSource}
        alt={artPiece.name}
        width={300}
        height={200}
        style={{ objectFit: "cover" }}
      />
      <p>
        &quot;{artPiece.name}&quot; by {artPiece.artist}
      </p>
    </ListItem>
  );
}
