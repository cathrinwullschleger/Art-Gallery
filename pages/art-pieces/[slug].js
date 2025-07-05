import useSWR from "swr";
import ArtPieceDetails from "@/Component/ArtPieceDetail/ArtPieceDetails.js";
const URL = "https://example-apis.vercel.app/api/art";

const fetcher = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};

export default function ArtPieceSlug() {
  const { data: artPieces, error, isLoading } = useSWR(URL, fetcher);

  return (
    <div>
      {isLoading && <p>Loading artwork details ... please wait a moment</p>}
      {error && (
        <p>
          Something went wrong while loading the artwork details. Try refreshing
          the page.
        </p>
      )}
      {artPieces && <ArtPieceDetails artPieces={artPieces} />};
    </div>
  );
}
