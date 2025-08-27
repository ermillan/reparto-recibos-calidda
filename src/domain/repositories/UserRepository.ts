import type { User } from "@/domain/entities/User"

export type UserRepository = {
  getUserById(id: string): Promise<User>
}
