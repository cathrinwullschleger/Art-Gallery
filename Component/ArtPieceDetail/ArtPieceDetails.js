import { useRouter } from "next/router";
import Image from "next/image";
import { ArtPiece } from "@/styles.js";
import { Container } from "@/styles.js";

export default function ArtPieceDetail({ piece }) {
  const router = useRouter();
  const { artist, name, imageSource, year, genre } = piece;

  const handleBack = () => {
    router.push("/art-pieces");
  };

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
