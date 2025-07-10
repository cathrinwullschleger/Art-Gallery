import ArtPieceDetails from "@/Component/ArtPieceDetail/ArtPieceDetails.js";
import { useRouter } from "next/router";

export default function ArtPieceSlug({
  artPieces,
  isLoading,
  error,
  likedPieces,
  toggleLike,
  handleAddComment,
  comments,
}) {
  const router = useRouter();
  console.log("router: ", router);
  const { slug } = router.query;

  if (isLoading || !slug) {
    return <p>Loading artwork details ... please wait a moment</p>;
  }

  if (error) {
    return (
      <p>
        Something went wrong while loading the artwork details. Try refreshing
        the page.
      </p>
    );
  }

  const piece = artPieces.find((piece) => piece.slug === slug);

  if (!piece) {
    return <p>Art piece not found</p>;
  }

  return (
    <ArtPieceDetails
      piece={piece}
      isLiked={likedPieces.includes(piece.slug)} // isLiked?
      onToggle={() => toggleLike(piece.slug)}
      onAddComment={handleAddComment}
      comments={comments}
    />
  );
}
