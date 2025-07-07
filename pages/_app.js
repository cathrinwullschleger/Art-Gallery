import useSWR from "swr";
import GlobalStyle from "../styles";
import Layout from "@/Component/Layout/Layout";
import { useState } from "react";

//global fechting
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

export default function App({ Component, pageProps }) {
  const { data: artPieces, error, isLoading } = useSWR(URL, fetcher);

  // global isLike state to mark as favorite
  const [likedPieces, setLikedPieces] = useState([]);

  function toggleLike(slug) {
    // toggle through slug
    setLikedPieces((prevLikedPieces) =>
      prevLikedPieces.includes(slug) // is artPiece liked?
        ? prevLikedPieces.filter((item) => item !== slug) //when yes -> filter() remove slug (noLike)
        : [...prevLikedPieces, slug]
    ); //when no -> add to add slug (Like)
  }

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component
          {...pageProps}
          artPieces={artPieces}
          error={error}
          isLoading={isLoading}
          likedPieces={likedPieces}
          toggleLike={toggleLike}
        />
      </Layout>
    </>
  );
}
