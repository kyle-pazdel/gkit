import "./globals.css";
import "@mantine/core/styles.css";
import React from "react";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import Head from "next/head";

export const metadata = {
  title: "GKIT",
  description: "Geneva Karr is a drag queen that some find lovely, others do not. All is in good fun.",
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <Head>
        <ColorSchemeScript />
        <link rel="geneva-karr-icon" href="/favicon.svg" sizes="any" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no" />
      </Head>
      <body style={{ background: "black" }}>
        <MantineProvider forceColorScheme="light">{children}</MantineProvider>
      </body>
    </html>
  );
}
