import got from 'got';
import config from '../config';
import {
  deletemenuitem,
  MenuItem,
  MenuItemFilter,
  newMenuItemType,
} from '../Types/menu-item.d';

const headers = { 'api-key': config.api.apiKey };
const dataMongoDB = {
  dataSource: config.db.dataSource,
  dataBase: config.db.dataBase,
  collection: config.db.collection,
};

export default {
  find(fliter: MenuItemFilter = {}): Promise<MenuItem[]> {
    return got
      .post(`${config.api.apiEndpoint}/action/find`, {
        headers,
        json: {
          ...dataMongoDB,
          filter: fliter,
        },
      })
      .json();
  },
  insert(MenuItem: newMenuItemType): Promise<MenuItem> {
    return got
      .post(`${config.api.apiEndpoint}/action/insertOne`, {
        headers,
        json: {
          ...dataMongoDB,
          MenuItem,
        },
      })
      .json();
  },
  update(id: string, MenuItem: newMenuItemType): Promise<MenuItem> {
    return got
      .post(`${config.api.apiEndpoint}/action/updateOne`, {
        headers,
        json: {
          ...dataMongoDB,
          filter: { _id: { $oid: id } },
          update: { $set: MenuItem },
        },
      })
      .json();
  },
  delete(id: string): Promise<deletemenuitem> {
    return got
      .post(`${config.api.apiEndpoint}/action/deleteOne`, {
        headers,
        json: {
          ...dataMongoDB,
          filter: { _id: { $oid: id } },
        },
      })
      .json();
  },
};
