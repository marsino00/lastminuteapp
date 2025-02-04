import {Linking, Platform} from 'react-native';

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

export const callPhone = (phoneNumber: string) => {
  const phoneUrl = `tel:${phoneNumber}`;
  Linking.openURL(phoneUrl).catch(err =>
    console.error('Error at calling', err),
  );
};

export const sendEmail = (email: string) => {
  const emailUrl = `mailto:${email}`;
  Linking.openURL(emailUrl).catch(err =>
    console.error('Error at opening email', err),
  );
};

export const getRatingColor = (rating: number) => {
  if (rating >= 8) {
    return '#28a745';
  }
  if (rating >= 6) {
    return '#ffc107';
  }
  return '#dc3545';
};

export const sortOptions = [
  {label: 'Price ascendant', value: 'priceAsc'},
  {label: 'Price descending', value: 'priceDesc'},
  {label: 'Rating ascendant', value: 'ratingAsc'},
  {label: 'Rating descending', value: 'ratingDesc'},
];

export const filterAndSortHotels = (
  hotels: any[],
  minPrice: string,
  maxPrice: string,
  sortOption: any,
) => {
  return hotels
    .filter((hotel: {price: any}) => {
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
