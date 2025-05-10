import type { AuthenticatedUser } from "@/types/auth";
import { addCookie, deleteCookies, getCookie } from "@/utils/cookies";

function storeUser(user: Omit<AuthenticatedUser, "token">) {
  addCookie("user", JSON.stringify(user));
}

function fetchUser() {
  const user = getCookie("user");
  if (!user) return null;
  return JSON.parse(user);
}

function setAccessToken(token: string) {
  addCookie("accessToken", token);
}

function getAccessToken() {
  return getCookie("accessToken") || null;
}

function removeUser() {
  deleteCookies(["user", "accessToken"]);
}

export { fetchUser, getAccessToken, removeUser, setAccessToken, storeUser };
