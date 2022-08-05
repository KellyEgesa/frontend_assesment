import * as apiUrl from "./config";
import http from "./httpService";

let bookUrl = "books";

export function getBooks() {
  return http.get(apiUrl + bookUrl);
}

export function getSpecificBook(bookId) {
  return http.get(apiUrl + bookUrl + bookId);
}

export function getBookComments(bookId) {
  return http.get(apiUrl + bookUrl + bookId + "/comments");
}
