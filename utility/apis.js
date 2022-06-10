import axiosClient from "./axiosConfig";

export function getAllComics() {
  return axiosClient
    .get(`comics?_expand=user&_expand=genre`)
    .then((res) => res.data);
}

export function getAllGenres() {
  return axiosClient.get(`genres`).then((res) => res.data);
}

export function getComicsByGenre(genre_slug, page = 1) {
  return axiosClient
    .get(
      `comics?genreId=${genre_slug}&_expand=genre&_expand=user&_page=${page}&_limit=5`
    )
    .then((res) => res.data);
}

export function getGenreDetail(genre_slug) {
  return axiosClient.get(`genres/${genre_slug}`).then((res) => res.data);
}

export function getComicDetail(comic_slug) {
  return axiosClient
    .get(`comics/${comic_slug}?_expand=user&_expand=genre`)
    .then((res) => res.data);
}

export function getComicChapters(comic_slug, page = 1) {
  return axiosClient
    .get(
      `chapters?_expand=comic&comicId=${comic_slug}&_page=${page}&_sort=chap_num&_order=desc`
    )
    .then((res) => res.data);
}

export function getAllComicChapters(comic_slug) {
  return axiosClient
    .get(`chapters?comicId=${comic_slug}&_sort=chap_num&_order=desc`)
    .then((res) => res.data);
}

export function getChapterDetail(comic_slug, chap_num) {
  return axiosClient
    .get(`chapters?comicId=${comic_slug}&chap_num=${chap_num}&_expand=comic`)
    .then((res) => res.data);
}

export function getChapterComments(chapter_slug) {
  return axiosClient
    .get(`comments?chapterId=${chapter_slug}&_expand=user`)
    .then((res) => res.data);
}
