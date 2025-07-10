import ArtList from "@/Component/ArtList/ArtList.js";
export default function FavoritesPage({
  artPieces = [],
  likedPieces = [],
  toggleLike,
}) {
  const favoriteArtPieces = artPieces.filter(
    (artPiece) => likedPieces.includes(artPiece.slug) // new array with only favorites (likedPieces)
  );

  return (
    <div>
      <h1>Art Gallery</h1>
      {favoriteArtPieces.length === 0 && <p>No favorites yet.</p>}
      <ArtList
        artPieces={favoriteArtPieces}
        toggleLike={toggleLike}
        likedPieces={likedPieces}
      />
    </div>
  );
}
