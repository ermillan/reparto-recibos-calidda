import React, { createContext, useContext, useMemo } from "react"

import { AuthRepositoryImpl } from "@/adapters/AuthRepositoryImpl"
import { AuthService } from "@/application/services/AuthService"

type AuthContextType = {
  authService: AuthService
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const authRepository = useMemo(() => new AuthRepositoryImpl(), [])
  const authService = useMemo(() => new AuthService(authRepository), [authRepository])

  const isAuthenticated = authService.isAuthenticated()

  return (
    <AuthContext.Provider value={{ authService, isAuthenticated }}>{children}</AuthContext.Provider>
  )
}

// Hook para usar context
export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
