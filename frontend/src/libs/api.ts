import axios from "axios"

export const api = axios.create({
  baseURL: import.meta.env.BASE_API_URL
})

api.interceptors.response.use((response) => {
  return response.data
})
