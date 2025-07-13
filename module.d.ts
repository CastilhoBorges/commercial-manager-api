declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: string;
    PORT: number;
    PIPEDRIVE_BASE_URL_V1: string;
    PIPEDRIVE_BASE_URL_V2: string;
    PIPEDRIVE_API_KEY: string;
  }
}
