import { ArtPiece } from "@/styles.js";
import { Container } from "@/styles.js";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import Image from "next/image";
import { ImageWrapper } from "@/styles.js";

export default function RandomArtItem({ artPiece, onToggle, isLiked }) {
  return (
    <Container>
      <ArtPiece>
        <ImageWrapper isLiked={isLiked}>
          <Image
            src={artPiece.imageSource}
            alt={artPiece.name}
            width={300}
            height={200}
            style={{ objectFit: "cover" }}
          />
        </ImageWrapper>
        <FavoriteButton isLiked={isLiked} onToggle={onToggle} />
        <p>{artPiece.name} </p>
      </ArtPiece>
    </Container>
  );
}
