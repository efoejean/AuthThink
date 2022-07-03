import { MenuItemFilter } from '../Types/menu-item';
import { makeValuesLowercase } from '../utils/utils';

describe('makeValuesLowercase', () => {
  it('should return an object with all values lowercase', () => {
    const filter: MenuItemFilter = {
      name: 'TEST',
      description: 'TEST',
    };
    const expected: MenuItemFilter = {
      name: 'test',
      description: 'test',
    };
    expect(makeValuesLowercase(filter)).toEqual(expected);
  });

  it("shouldn't change values that aren't strings", () => {
    const filter: MenuItemFilter = {
      name: 'TEST',
      description: 'TEST',
      price: 10,
    };

    const expected: MenuItemFilter = {
      name: 'test',
      description: 'test',
      price: 10,
    };

    expect(makeValuesLowercase(filter)).toEqual(expected);
  });
});
