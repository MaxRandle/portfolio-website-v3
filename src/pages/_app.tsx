import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { MDXProvider } from "@mdx-js/react";
import MDXComponentMap from "@/components/MDXComponentMap";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider components={MDXComponentMap}>
      <Component {...pageProps} />
    </MDXProvider>
  );
}

export default MyApp;
