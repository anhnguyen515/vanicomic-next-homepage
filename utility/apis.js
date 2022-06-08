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

export function getAllComicChapters(slug) {
  return axiosClient
    .get(`chapters?comicId=${slug}&_sort=chap_num&_order=desc`)
    .then((res) => res.data);
}

export function getChapterDetail(slug) {
  return axiosClient
    .get(`chapters/${slug}?_expand=comic`)
    .then((res) => res.data);
}

export function getChapterComments(slug, page = 1) {
  return axiosClient
    .get(`comments?chapterId=${slug}&_expand=user`)
    .then((res) => res.data);
}