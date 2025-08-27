// import React, { useState } from "react"
// import { useNavigate } from "react-router-dom"

import logoCalidda from "@/assets/logo_calidda.png"
// import { useAuth } from "@/presentation/context/AuthContext"

const Login = () => {
  // const { authService } = useAuth()
  // const [username, setUsername] = useState("")
  // const [password, setPassword] = useState("")
  // const navigate = useNavigate()

  // const handleLogin = async (e: React.FormEvent) => {
  //   e.preventDefault()
  //   try {
  //     await authService.login(username, password)
  //     navigate("/dashboard")
  //   } catch (error: unknown) {
  //     // eslint-disable-next-line no-alert
  //     alert(`${error}`)
  //   }
  // }

  return (
    <main className="bg-background relative overflow-hidden antialiased">
      <div className="absolute inset-0 bg-primary-500 [clip-path:polygon(0_0,100%_0,100%_-40%,0_150%)] z-0"></div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-sm">
          <div className="flex justify-center items-center mb-4 flex-col">
            <img src={logoCalidda} alt="logo de calidda" className="h-11 w-auto object-cover" />
          </div>
          <h2 className="text-center text-gray-700 text-md font-semibold mb-2">
            Sistema de Reparto de Recibos
          </h2>
          <h3 className="text-center mb-6 text-primary-500 text-3xl font-extrabold">
            Iniciar Sesión
          </h3>

          <form>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Usuario"
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                placeholder="Contraseña"
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary-500 text-white py-2 rounded-md font-semibold text-sm hover:bg-primary-600 transition-colors"
            >
              Ingresar
            </button>
          </form>

          <p className="text-center mt-4 text-primary-600 text-xs hover:underline cursor-pointer underline">
            ¿Olvidaste tu contraseña?
          </p>
        </div>
      </div>
    </main>
  )
}

export default Login
