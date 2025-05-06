import { addCookie, getCookie } from "@/utils/cookies";

function setAccessToken(token: string) {
  addCookie("accessToken", token);
}

function getAccessToken() {
  return getCookie("accessToken") || null;
}

export { getAccessToken, setAccessToken };
