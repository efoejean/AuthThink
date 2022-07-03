// create a menu item type

export interface MenuItem {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

// utility function to create a menu item
export type NewMenuItemType = Omit<MenuItem, 'id'>;
export type MenuItemFilter =
  | Partial<MenuItem>
  | {
      // Todo explore MOngoDB indexing and querying
      price: object;
    };
