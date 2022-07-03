import { MenuItemFilter } from '../Types/menu-item';

export const makeValuesLowercase = (filter: MenuItemFilter = {}) =>
  Object.fromEntries(
    Object.entries(filter).map((entry) => {
      const [key, value] = entry;
      return typeof value === 'string' ? [key, value.toLowerCase()] : entry;
    }),
  );
