import axiosClient from "./axiosConfig";

export function getAllComics() {
  return axiosClient
    .get(`comics?_expand=user&_expand=genre`)
    .then((res) => res.data);
}

export function getAllGenres() {
  return axiosClient.get(`genres`).then((res) => res.data);
}

export function getComicDetail(slug) {
  return axiosClient
    .get(`comics/${slug}?_expand=user&_expand=genre`)
    .then((res) => res.data);
}

export function getComicChapters(slug, page = 1) {
  return axiosClient
    .get(
      `chapters?_expand=comic&comicId=${slug}&_page=${page}&_sort=chap_num&_order=desc`
    )
    .then((res) => res.data);
}
