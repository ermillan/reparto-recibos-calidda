import { api } from "@/adapters/api/AxiosAdapter"
import { CookieStorage } from "@/adapters/storage/CookieStorage"
import { AuthRepository } from "@/domain/repositories/AuthRepository"

export class AuthRepositoryImpl extends AuthRepository {
  async login(username: string, password: string) {
    const response = await api.post("/login", { username, password })
    return response.data
  }

  getToken() {
    return CookieStorage.getToken()
  }

  saveToken(token: string) {
    CookieStorage.saveToken(token)
  }

  removeToken() {
    CookieStorage.removeToken()
  }
}
