declare namespace NodeJS {
  interface ProcessEnv {
    API_ENDPOINT: string;
    API_KEY: string;
    collection: string;
    database: string;
    dataSource: string;
    NODE_ENV?: 'development' | 'production';
    PORT?: string;
  }
}
