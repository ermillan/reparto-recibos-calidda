import type { User } from "@/domain/entities/User";

export interface UserRepository {
  getUserById(id: string): Promise<User>;
}