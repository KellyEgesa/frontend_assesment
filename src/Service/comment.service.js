import { apiUrl } from "./config";
import http from "./httpService";

let commentUrl = "comments";

export function getAllComments() {
  return http.get(apiUrl + commentUrl);
}

export function saveComment(comment) {
  return http.post(apiUrl + commentUrl, comment);
}
