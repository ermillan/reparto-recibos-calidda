import axios from "axios"

import { CookieStorage } from "@/adapters/storage/CookieStorage"

const api = axios.create({
  baseURL: "https://your-backend-api.com",
})

api.interceptors.request.use((config) => {
  const token = CookieStorage.getToken()
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export { api }
