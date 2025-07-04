import useSWR from "swr";
import ArtList from "@/Component/ArtList/ArtList.js";

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

export default function ArtPiecesPage() {
  const { data: artPieces, error, isLoading } = useSWR(URL, fetcher);

  if (isLoading) return <p>Loading gallery ... please wait a moment</p>;
  if (error)
    return (
      <p>
        Something went wrong while loading the gallery. Try refreshing the page.
      </p>
    );

  return <ArtList artPieces={artPieces} />;
}
