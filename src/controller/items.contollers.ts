import got from 'got';
import config from '../config';
import { MenuItem, MenuItemFilter } from '../Types/menu-item.d';

export default {
  find(fliter: MenuItemFilter = {}): Promise<MenuItem[]> {
    return got
      .post(`${config.api.apiEndpoint}/action/find`, {
        headers: {
          'api-key': config.api.apiKey,
        },
        json: {
          dataSource: config.db.dataSource,
          dataBase: config.db.dataBase,
          collection: config.db.collection,
          filter: fliter,
        },
      })
      .json();
  },
};
