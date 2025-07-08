import { useRouter } from "next/router";
import Image from "next/image";
import { ArtPiece } from "@/styles.js";
import { Container } from "@/styles.js";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import { FavoriteLabel } from "@/styles.js";
import { StyledButton } from "@/styles.js";

export default function ArtPieceDetail({ piece, onToggle, isLiked }) {
  const { artist, name, imageSource, year, genre } = piece;

  const router = useRouter();
  const handleBack = () => {
    router.push("/art-pieces");
  };

  return (
    <Container>
      <ArtPiece>
        <h2>{name}</h2>
        {isLiked && (
          <FavoriteLabel>
            <p>Favorite Art Piece ♥</p>
          </FavoriteLabel>
        )}
        <Image
          src={imageSource}
          alt={name}
          width={300}
          height={200}
          style={{ objectFit: "cover" }}
        />
        <FavoriteButton isLiked={isLiked} onToggle={onToggle} />
        <p>
          Artist: {artist} <br />
          Year: {year} <br />
          <strong>Genre:</strong> {genre}
        </p>
        <StyledButton type="button" onClick={handleBack}>
          Back to Gallery
        </StyledButton>
      </ArtPiece>
    </Container>
  );
}
