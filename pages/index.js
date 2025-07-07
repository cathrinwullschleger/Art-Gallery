import RandomArtItem from "@/Component/RandomArtItem/RandomArtItem.js";

export default function HomePage({ artPieces, isLoading, error }) {
  if (isLoading) {
    return <p>Loading artwork preview ... please wait a moment</p>;
  }

  if (error) {
    return (
      <p>
        Something went wrong while loading the artwork preview. Try refreshing
        the page.
      </p>
    );
  }
  if (!artPieces) {
    <p>No art pieces found.</p>;
  }

  return (
    <div>
      <h1>Art Gallery</h1>
      <RandomArtItem artPieces={artPieces} />
    </div>
  );
}
