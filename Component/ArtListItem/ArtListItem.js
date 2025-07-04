import Image from "next/image";

export default function ArtListItem({ artPiece }) {
  return (
    <li>
      <Image
        src={artPiece.imageSource}
        alt={artPiece.name}
        width={300}
        height={200}
        style={{ objectFit: "cover" }}
      />
      <p>
        &quot;{artPiece.name}&quot; by {artPiece.artist}
      </p>
    </li>
  );
}
