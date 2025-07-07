import { ArtPiece } from "@/styles.js";
import { Container } from "@/styles.js";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import Image from "next/image";
import { FavoriteLabel } from "@/styles.js";

export default function RandomArtItem({ artPiece, onToggle, isLiked }) {
  return (
    <Container>
      <ArtPiece>
        <FavoriteLabel isLiked={isLiked}>
          {isLiked && <p>Favorite Art Piece ♥</p>}{" "}
        </FavoriteLabel>
        <Image
          src={artPiece.imageSource}
          alt={artPiece.name}
          width={300}
          height={200}
          style={{ objectFit: "cover" }}
        />
        <FavoriteButton isLiked={isLiked} onToggle={onToggle} />
        <p>{artPiece.name} </p>
      </ArtPiece>
    </Container>
  );
}
