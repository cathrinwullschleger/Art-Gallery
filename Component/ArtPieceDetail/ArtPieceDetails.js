import { useRouter } from "next/router";
import Image from "next/image";
import { ArtPiece } from "@/styles.js";
import { Container } from "@/styles.js";

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
    <Container>
      <ArtPiece>
        <h2>{name}</h2>

        <Image
          src={imageSource}
          alt={name}
          width={300}
          height={200}
          style={{ objectFit: "cover" }}
        />
        <p>
          Artist: {artist} <br />
          Year:{year} <br />
          <strong>Genre:</strong> {genre}
        </p>
        <button type="button" onClick={handleBack}>
          Back to Gallery
        </button>
      </ArtPiece>
    </Container>
  );
}
