import useSWR from "swr";
import GlobalStyle from "../styles";
import Layout from "@/Component/Layout/Layout";

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
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component
          {...pageProps}
          artPieces={artPieces}
          error={error}
          isLoading={isLoading}
        />
      </Layout>
    </>
  );
}
