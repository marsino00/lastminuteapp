import {Linking, Platform} from 'react-native';
import {Hotel} from 'src/store/hotelSlice/hotelSlice.types';
import {COLORS} from '../constants/colors';

/**
 * Opens the maps application with the given coordinates and address.
 * Supports both iOS and Android map schemes.
 */
export const openMaps = (
  latitude: number,
  longitude: number,
  address: string,
  city: string,
) => {
  const query = encodeURIComponent(`${address}, ${city}`);
  const coords = `${latitude},${longitude}`;

  const url = Platform.select({
    ios: `maps:0,0?q=${query}@${coords}`,
    android: `geo:0,0?q=${coords}(${query})`,
  });

  if (url) {
    Linking.openURL(url).catch(err =>
      console.error('Error at opening map', err),
    );
  }
};

/**
 * Initiates a phone call to the given phone number using the native dialer.
 */
export const callPhone = (phoneNumber: string) => {
  const phoneUrl = `tel:${phoneNumber}`;
  Linking.openURL(phoneUrl).catch(err =>
    console.error('Error at calling', err),
  );
};

/**
 * Opens the default email application with a prefilled recipient email address.
 */
export const sendEmail = (email: string) => {
  const emailUrl = `mailto:${email}`;
  Linking.openURL(emailUrl).catch(err =>
    console.error('Error at opening email', err),
  );
};

/**
 * Returns a color based on the given rating:
 * - Green for ratings >= 8
 * - Yellow for ratings >= 6
 * - Red for ratings < 6
 */
export const getRatingColor = (rating: number) => {
  if (rating >= 8) {
    return COLORS.PRIMARY_GREEN;
  }
  if (rating >= 6) {
    return COLORS.PRIMARY_YELLOW;
  }
  return COLORS.PRIMARY_RED;
};

export const sortOptions = [
  {label: 'Price ascendant', value: 'priceAsc'},
  {label: 'Price descending', value: 'priceDesc'},
  {label: 'Rating ascendant', value: 'ratingAsc'},
  {label: 'Rating descending', value: 'ratingDesc'},
];

/**
 * Filters and sorts a list of hotels based on the given price range and sorting option.
 * - Filters hotels within the specified min and max price.
 * - Sorts hotels based on price or user rating in ascending/descending order.
 */
export const filterAndSortHotels = (
  hotels: Hotel[],
  minPrice: string,
  maxPrice: string,
  sortOption: string,
) => {
  return hotels
    .filter((hotel: {price: number}) => {
      const price = hotel.price;
      const min = minPrice ? parseFloat(minPrice) : 0;
      const max = maxPrice ? parseFloat(maxPrice) : Infinity;
      return price >= min && price <= max;
    })
    .sort(
      (
        a: {price: number; userRating: number},
        b: {price: number; userRating: number},
      ) => {
        switch (sortOption) {
          case 'priceAsc':
            return a.price - b.price;
          case 'priceDesc':
            return b.price - a.price;
          case 'ratingAsc':
            return a.userRating - b.userRating;
          case 'ratingDesc':
            return b.userRating - a.userRating;
          default:
            return 0;
        }
      },
    );
};
