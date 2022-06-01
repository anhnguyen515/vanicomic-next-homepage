import Head from "next/head";
import React from "react";

export default function HeadPage({ title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Vanicomic" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
}
