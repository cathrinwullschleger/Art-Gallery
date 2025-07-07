import Image from "next/image";
import { ArtPiece } from "@/styles.js";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import { ImageWrapper } from "@/styles.js";

export default function ArtListItem({ artPiece, toggleLike, isLiked }) {
  return (
    <ArtPiece>
      <Link href={`/art-pieces/${artPiece.slug}`}>
        <ImageWrapper isLiked={isLiked}>
          <Image
            src={artPiece.imageSource}
            alt={artPiece.name}
            width={300}
            height={200}
            style={{ objectFit: "cover" }}
          />
        </ImageWrapper>
      </Link>
      <FavoriteButton
        isLiked={isLiked}
        onToggle={() => toggleLike(artPiece.slug)}
      />
      <p>
        &quot;{artPiece.name}&quot; by {artPiece.artist}
      </p>
    </ArtPiece>
  );
}
