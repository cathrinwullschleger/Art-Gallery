import Image from "next/image";
import { ArtPiece } from "@/styles.js";
import Link from "next/link";

export default function ArtListItem({ artPiece }) {
  return (
    <ArtPiece>
      <Link href={`/art-pieces/${artPiece.slug}`}>
        <Image
          src={artPiece.imageSource}
          alt={artPiece.name}
          width={300}
          height={200}
          style={{ objectFit: "cover" }}
        />{" "}
      </Link>

      <p>
        &quot;{artPiece.name}&quot; by {artPiece.artist}
      </p>
    </ArtPiece>
  );
}
