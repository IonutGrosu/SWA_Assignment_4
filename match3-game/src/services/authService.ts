// import { getAuthHeader } from "../utils/auth-header";
import { Credentials } from "../model/Models";

const SERVER_URL = "http://localhost:9090/";

export async function register(credentials: Credentials) {
  return fetch(SERVER_URL + "users", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    method: "post",
    body: JSON.stringify(credentials),
  });
}

export function login(credentials: Credentials) {
  return fetch(SERVER_URL + "login", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    method: "post",
    body: JSON.stringify(credentials),
  });
}

export function logout() {}
