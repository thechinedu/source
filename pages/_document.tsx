import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta
          name="google-site-verification"
          content="gwla10dzu4zSwleJ88E8MWMzanbeBG7Qx6cmSJ4fFvo"
        />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;700&family=Roboto:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <script
          src="https://kit.fontawesome.com/6ed135affd.js"
          crossOrigin="anonymous"
          defer
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
