import type { AppProps } from "next/app";
import Head from "next/head";
import { MDXProvider } from "@mdx-js/react";
import MDXComponentMap from "@components/MDXComponentMap";
import "@styles/globals.css";
import { GlobalStyles } from "@styles/GlobalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{`Max Randle`}</title>
        <meta
          httpEquiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        ></meta>
      </Head>

      <GlobalStyles />
      <MDXProvider components={MDXComponentMap}>
        <Component {...pageProps} />
      </MDXProvider>
    </>
  );
}

export default MyApp;
