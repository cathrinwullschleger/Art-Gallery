import ArtList from "@/Component/ArtList/ArtList.js";
export default function FavoritesPage({
  artPieces = [],
  likedPieces = [],
  toggleLike,
}) {
  const favoriteArtPieces = artPieces.filter((artPiece) =>
    likedPieces.includes(artPiece.slug)
  );

  return (
    <div>
      <h1>Art Gallery</h1>
      <ArtList
        artPieces={favoriteArtPieces}
        toggleLike={toggleLike}
        likedPieces={likedPieces}
      />
    </div>
  );
}
