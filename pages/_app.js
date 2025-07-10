"use client";
import useSWR from "swr";
import GlobalStyle from "../styles";
import Layout from "@/Component/Layout/Layout";
import { useState, useEffect } from "react";

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

  // global state for favorite items (liked pieces) using the useLocalStorageState hook
  // const [likedPieces, setLikesPieces] = useLocalStorageState("likedPieces", {defaultValue: []});

  // global state for favorite items using useState and localStorage
  // here, useState receives a function as the initial value —
  // react will call this function only once on the first render and use its return value as the initial state
  const [likedPieces, setLikedPieces] = useState(() => {
    if (typeof window === "undefined") return [];
    const saved = localStorage.getItem("likedPieces");
    // if data exists in localStorage, parse it as an array
    // otherwise, start with an empty array
    return saved ? JSON.parse(saved) : []; // is there something in likedPieces? take it, if not start with empty array
  });

  useEffect(() => {
    // save the current likedPieces state as a JSON string in localStorage
    // this effect runs every time likedPieces changes
    localStorage.setItem("likedPieces", JSON.stringify(likedPieces));
  }, [likedPieces]); // dependency: effect runs only when likedPieces changes

  // useLocalStorageState hook: const [comments, setComments] = useLocalStorageState("comments", {defaultValue: []});
  //global state to add comment
  //initialize likedPieces state by reading from localStorage (only on first render)
  const [comments, setComments] = useState(() => {
    if (typeof window === "undefined") return [];
    const saved = localStorage.getItem("comments");
    return saved ? JSON.parse(saved) : [];
  });
  // whenever "comments" changes, save the new state back to localStorage

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  // add random id for key
  function handleAddComment(slug, text) {
    const newComment = { slug, text, timestamp: new Date() };
    setComments((prevComments) => [...prevComments, newComment]);
  }

  function toggleLike(slug) {
    // toggle through slug
    setLikedPieces((prevLikedPieces) =>
      prevLikedPieces.includes(slug) // is artPiece liked?
        ? prevLikedPieces.filter((likedPiece) => likedPiece !== slug) //when yes -> filter() remove slug (noLike)
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
          handleAddComment={handleAddComment}
          comments={comments}
        />
      </Layout>
    </>
  );
}
