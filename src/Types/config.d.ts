export interface Config {
  api: {
    apiEndpoint: string;
    apiKey: string;
  };
  db: {
    dataSource: string;
    dataBase: string;
    collection: string;
  };
  port: number;
}
