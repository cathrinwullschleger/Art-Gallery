import { useRouter } from "next/router";
import Image from "next/image";
import { ArtPiece } from "@/styles.js";
import { Container } from "@/styles.js";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import { ImageWrapper } from "@/styles.js";
import { StyledButton } from "@/styles.js";

export default function ArtPieceDetail({ piece, onToggle, isLiked }) {
  const { artist, name, imageSource, year, genre, slug } = piece;

  const router = useRouter();
  const handleBack = () => {
    router.push("/art-pieces");
  };

  return (
    <Container>
      <ArtPiece>
        <h2>{name}</h2>
        <ImageWrapper isLiked={isLiked}>
          <Image
            src={imageSource}
            alt={name}
            width={300}
            height={200}
            style={{ objectFit: "cover" }}
          />
        </ImageWrapper>
        <FavoriteButton isLiked={isLiked} onToggle={onToggle} slug={slug} />
        <p>
          Artist: {artist} <br />
          Year:{year} <br />
          <strong>Genre:</strong> {genre}
        </p>
        <StyledButton type="button" onClick={handleBack}>
          Back to Gallery
        </StyledButton>
      </ArtPiece>
    </Container>
  );
}
