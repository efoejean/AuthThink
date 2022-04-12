// create a menu item type

export interface MenuItem {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

export type newMenuItemType = Omit<MenuItem, 'id'>;
