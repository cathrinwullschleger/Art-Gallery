import { ArtPiece } from "@/styles.js";
import { Container } from "@/styles.js";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import Image from "next/image";

export default function RandomArtItem({ artPiece, onToggle, isLiked }) {
  return (
    <Container>
      <ArtPiece>
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
