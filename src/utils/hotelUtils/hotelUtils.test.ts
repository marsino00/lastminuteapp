import {
  openMaps,
  callPhone,
  sendEmail,
  getRatingColor,
  filterAndSortHotels,
} from './hotelUtils';
import {Linking} from 'react-native';

jest.mock('react-native', () => ({
  Linking: {
    openURL: jest.fn().mockResolvedValue(true),
  },
  Platform: {
    select: jest.fn(({android}) => android),
  },
}));

describe('hotelUtils Functions', () => {
  describe('openMaps', () => {
    test('calls Linking.openURL with correct URL for maps', () => {
      const latitude = 40.7128;
      const longitude = -74.006;
      const address = '123 Main St';
      const city = 'New York';

      const expectedUrl = `geo:0,0?q=${latitude},${longitude}(${encodeURIComponent(
        `${address}, ${city}`,
      )})`;

      openMaps(latitude, longitude, address, city);

      expect(Linking.openURL).toHaveBeenCalledWith(expectedUrl);
    });
  });

  describe('callPhone', () => {
    test('calls Linking.openURL with tel URL', () => {
      callPhone('+123456789');
      expect(Linking.openURL).toHaveBeenCalledWith('tel:+123456789');
    });
  });

  describe('sendEmail', () => {
    test('calls Linking.openURL with mailto URL', () => {
      sendEmail('test@example.com');
      expect(Linking.openURL).toHaveBeenCalledWith('mailto:test@example.com');
    });
  });

  describe('getRatingColor', () => {
    test('returns correct colors for different ratings', () => {
      expect(getRatingColor(8)).toBe('#28a745');
      expect(getRatingColor(7)).toBe('#ffc107');
      expect(getRatingColor(5)).toBe('#dc3545');
    });
  });

  describe('filterAndSortHotels', () => {
    const mockHotels = [
      {id: 1, price: 100, userRating: 7.5},
      {id: 2, price: 200, userRating: 8.5},
      {id: 3, price: 50, userRating: 5.0},
    ];

    test('filters hotels by min and max price', () => {
      const result = filterAndSortHotels(mockHotels, '60', '150', 'priceAsc');
      expect(result).toEqual([{id: 1, price: 100, userRating: 7.5}]);
    });

    test('sorts hotels by price ascending', () => {
      const result = filterAndSortHotels(mockHotels, '', '', 'priceAsc');
      expect(result).toEqual([
        {id: 3, price: 50, userRating: 5.0},
        {id: 1, price: 100, userRating: 7.5},
        {id: 2, price: 200, userRating: 8.5},
      ]);
    });

    test('sorts hotels by rating descending', () => {
      const result = filterAndSortHotels(mockHotels, '', '', 'ratingDesc');
      expect(result).toEqual([
        {id: 2, price: 200, userRating: 8.5},
        {id: 1, price: 100, userRating: 7.5},
        {id: 3, price: 50, userRating: 5.0},
      ]);
    });
  });
});
