import "modern-css-reset";
import "@styles/globals.css";

import Container from "@components/Container";
import Navbar from "@components/Navbar";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Navbar />
      <Component {...pageProps} />
    </Container>
  );
}

export default MyApp;
