export interface config {
  api: {
    apiEndpoint: string;
    apiKey: string;
  };
  db: {
    dataSource: string;
    database: string;
    collection: string;
  };
  port: number;
}
