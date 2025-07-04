import Image from "next/image";
import { ArtPiece } from "@/styles.js";
import { Container } from "@/styles.js";
export default function RandomArtItem({ artPieces }) {
  if (!artPieces || artPieces.length === 0) {
    return null;
  }
  const length = artPieces.length;

  const randomIndex = Math.floor(Math.random() * length); // Math.random -> number 0-1 /Math.floor -> round down
  const randomArtPiece = artPieces[randomIndex];

  return (
    <Container>
      <ArtPiece>
        <Image
          src={randomArtPiece.imageSource}
          alt={randomArtPiece.name}
          width={300}
          height={200}
          style={{ objectFit: "cover" }}
        />
        <p>{randomArtPiece.name} </p>
      </ArtPiece>
    </Container>
  );
}
