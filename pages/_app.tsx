import "modern-css-reset";
import "@/styles/globals.css";

import type { AppProps } from "next/app";

import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

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
