import "modern-css-reset";
import "@styles/globals.css";

import Container from "@components/Container";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Container>
  );
}

export default MyApp;
