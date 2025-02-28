import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import Modal from "@/components/Modals/Modal";
import { useState } from "react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    // Auth deactivation
    // <SessionProvider session={session}>
      <Component {...pageProps} />
    // </SessionProvider>
  );
}
