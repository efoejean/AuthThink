import got from 'got';
import config from '../config';
import {
  MenuItem,
  MenuItemFilter,
  NewMenuItemType,
} from '../Types/menu-item.d';
import { makeValuesLowercase } from '../utils/utils';

interface deleteMenuItem {
  deletedCount: number;
}

const headers = { 'api-key': config.api.apiKey };
const dataMongoDB = {
  dataSource: config.db.dataSource,
  database: config.db.database,
  collection: config.db.collection,
};

export default {
  find(fliter: MenuItemFilter = {}): Promise<MenuItem[]> {
    return got
      .post(`${config.api.apiEndpoint}/action/find`, {
        headers,
        json: {
          ...dataMongoDB,
          filter: makeValuesLowercase(fliter),
        },
      })
      .json();
  },
  findOne(id: string): Promise<MenuItem> {
    return got
      .post(`${config.api.apiEndpoint}/action/findOne`, {
        headers,
        json: {
          ...dataMongoDB,
          filter: {
            _id: { $oid: id },
          },
        },
      })
      .json();
  },
  insert(newMenuItem: NewMenuItemType): Promise<MenuItem> {
    return got
      .post(`${config.api.apiEndpoint}/action/insertOne`, {
        headers,
        json: {
          ...dataMongoDB,
          document: { ...makeValuesLowercase(newMenuItem) },
        },
      })
      .json();
  },

  update(id: string, newMenuItem: NewMenuItemType): Promise<MenuItem> {
    return got
      .post(`${config.api.apiEndpoint}/action/updateOne`, {
        headers,
        json: {
          ...dataMongoDB,
          filter: { _id: { $oid: id } },
          update: { $set: newMenuItem },
        },
      })
      .json();
  },
  delete(id: string): Promise<deleteMenuItem> {
    console.log(id);
    return got
      .post(`${config.api.apiEndpoint}/action/delete`, {
        headers,
        json: {
          ...dataMongoDB,
          filter: { _id: { $oid: id } },
        },
      })
      .json();
  },
};
