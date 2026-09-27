import { boot } from 'quasar/wrappers'
import axios from 'axios'

// Uses Vite's dev server proxy in development (Docker or local).
// The proxy forwards /api/* requests to the backend (nginx:8000 in Docker,
// or localhost:8000 locally).
// In production, set VITE_API_BASE_URL to the full backend URL.
const baseURL = import.meta.env.VITE_API_BASE_URL || '/api'

const api = axios.create({ baseURL })

export default boot(({ app }) => {
  app.config.globalProperties.$axios = axios
  app.config.globalProperties.$api = api
})

export { api }
