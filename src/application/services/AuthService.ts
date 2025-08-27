/* eslint-disable @typescript-eslint/no-explicit-any */
import { User } from "@/domain/entities/User"
import { AuthRepository } from "@/domain/repositories/AuthRepository"

export class AuthService {
  [x: string]: any
  constructor(authRepository: any) {
    if (!(authRepository instanceof AuthRepository)) {
      throw new Error("AuthRepository required")
    }
    this.authRepository = authRepository
  }

  async login(username: any, password: any) {
    const { token } = await this.authRepository.login(username, password)
    this.authRepository.saveToken(token)
    return new User(username, token)
  }

  isAuthenticated() {
    const token = this.authRepository.getToken()
    return !!token && token.length > 0
  }

  logout() {
    this.authRepository.removeToken()
  }

  getToken() {
    return this.authRepository.getToken()
  }
}
