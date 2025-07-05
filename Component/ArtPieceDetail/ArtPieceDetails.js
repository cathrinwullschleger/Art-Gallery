import { useRouter } from "next/router";
import Image from "next/image";
import { ArtPiece } from "@/styles.js";

export default function ArtPieceDetail({ artPieces }) {
  const router = useRouter();
  console.log("router: ", router);
  const { slug } = router.query;

  const piece = artPieces.find((piece) => piece.slug === slug);

  if (!piece) {
    return null;
  }

  const handleBack = () => {
    router.push("/art-pieces");
  };

  const { artist, name, imageSource, year, genre } = piece;

  return (
    <ArtPiece>
      <Image
        src={imageSource}
        alt={name}
        width={300}
        height={200}
        style={{ objectFit: "cover" }}
      />
      <p>
        {artist}: &quot;{name}&quot; <br />
        <strong>Year:</strong> {year} <br />
        <strong>Genre:</strong> {genre}
      </p>
      <button type="button" onClick={handleBack}>
        Back to Gallery
      </button>
    </ArtPiece>
  );
}
