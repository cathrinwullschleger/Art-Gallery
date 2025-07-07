import ArtList from "@/Component/ArtList/ArtList.js";

export default function ArtPiecesPage({
  artPieces,
  isLoading,
  error,
  likedPieces,
  toggleLike,
}) {
  if (isLoading) {
    return <p>Loading gallery ... please wait a moment</p>;
  }

  if (error) {
    return (
      <p>
        Something went wrong while loading the gallery. Try refreshing the page.
      </p>
    );
  }

  if (!artPieces) {
    <p>No art pieces found.</p>;
  }
  return (
    <div>
      <h1>Art Gallery</h1>
      {artPieces && (
        <ArtList
          likedPieces={likedPieces}
          toggleLike={toggleLike}
          artPieces={artPieces}
        />
      )}
      ;
    </div>
  );
}
