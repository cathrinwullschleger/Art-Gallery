import Image from "next/image";
import { ArtPiece } from "@/styles.js";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import { FavoriteLabel } from "@/styles.js";

export default function ArtListItem({ artPiece, toggleLike, isLiked }) {
  return (
    <ArtPiece>
      <FavoriteLabel isLiked={isLiked}>
        {isLiked && <p> Favorite Art Piece</p>}
      </FavoriteLabel>
      <Link href={`/art-pieces/${artPiece.slug}`}>
        <Image
          src={artPiece.imageSource}
          alt={artPiece.name}
          width={300}
          height={200}
          style={{ objectFit: "cover" }}
        />
      </Link>{" "}
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
