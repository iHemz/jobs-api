import Cookies from "js-cookie";

const addCookie = (name: string, value: string) => {
  Cookies.set(name, value, { expires: 1 });
};

const getCookie = (name: string) => Cookies.get(name);

const deleteCookie = (name: string) => {
  Cookies.remove(name);
};

const deleteCookies = (names: string[]) => {
  names.forEach((name) => {
    Cookies.remove(name);
  });
};

export { addCookie, deleteCookie, deleteCookies, getCookie };
