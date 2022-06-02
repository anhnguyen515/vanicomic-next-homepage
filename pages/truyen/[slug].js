import React from "react";
import axiosClient from "utility/axiosConfig";

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;
  const comic = await axiosClient
    .get(`comics/${slug}?_expand=user&_expand=genre`)
    .then((res) => res.data);

  return {
    props: {
      comic,
    },
    revalidate: 3600,
  };
}

export default function ComicDetail({ comic }) {
  return <>{comic.name}</>;
}
