import Cookies from "js-cookie";

const addCookie = (name: string, value: string) => {
  Cookies.set(name, value, { expires: 7 });
};

const getCookie = (name: string) => Cookies.get(name);

const deleteCookie = (name: string) => {
  Cookies.remove(name);
};

export { addCookie, deleteCookie, getCookie };
