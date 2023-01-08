/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_TMDB_IMAGE: string
  readonly VITE_TMDB_URL: string 
  readonly VITE_TMDB_VIDEO: string 
  readonly VITE_NODE_VERSION: string
  readonly VITE_SENTRY_DSN: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}