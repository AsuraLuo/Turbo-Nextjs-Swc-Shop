declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test'
    NEXT_PUBLIC_HOST_URL: string
    NEXT_PUBLIC_API_URL: string
  }
}
