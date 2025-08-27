import Cookies from "js-cookie"

export class CookieStorage {
  static getToken() {
    return Cookies.get("authToken")
  }

  static saveToken(token: string) {
    Cookies.set("authToken", token, { expires: 7 })
  }

  static removeToken() {
    Cookies.remove("authToken")
  }
}
