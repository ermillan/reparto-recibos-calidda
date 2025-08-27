import axios from "axios"

import type { User } from "@/domain/entities/User"
import type { UserRepository } from "@/domain/repositories/UserRepository"

export class UserApi implements UserRepository {
  private api = axios.create({
    baseURL:
      import.meta.env.MODE === "development"
        ? import.meta.env.VITE_BASE_URL_DEV
        : import.meta.env.VITE_BASE_URL_PRD,
  })

  async getUserById(id: string): Promise<User> {
    const response = await this.api.get(`/users/${id}`)
    return response.data
  }
}
