import Image from "next/image";
import { ArtPiece } from "@/styles.js";

export default function RandomArtItem({ artPieces }) {
  const length = artPieces.length;
  const randomIndex = Math.floor(Math.random() * length); // Math.random -> number 0-1 /Math.floor -> round down
  const randomArtPiece = artPieces[randomIndex];

  return (
    // if time left -> styled component
    <ArtPiece>
      <Image
        src={randomArtPiece.imageSource}
        alt={randomArtPiece.name}
        width={300}
        height={200}
        style={{ objectFit: "cover" }}
      />
      <p>{randomArtPiece.artist}</p>
    </ArtPiece>
  );
}
