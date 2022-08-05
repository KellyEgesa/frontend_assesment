import { apiUrl } from "./config";
import http from "./httpService";

let characterUrl = "characters";

export function getCharacters(parameters) {
  return http.get(apiUrl + characterUrl + parameters);
}
