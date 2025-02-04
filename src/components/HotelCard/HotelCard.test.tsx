import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import HotelCard from './HotelCard';
import {Hotel} from 'src/store/hotelSlice/hotelSlice.types';
import {
  openMaps,
  callPhone,
  sendEmail,
  getRatingColor,
} from '../../utils/hotelUtils/hotelUtils';

jest.mock('../../utils/hotelUtils/hotelUtils', () => ({
  openMaps: jest.fn(),
  callPhone: jest.fn(),
  sendEmail: jest.fn(),
  getRatingColor: jest.fn().mockReturnValue('#28a745'),
}));

const mockHotel: Hotel = {
  id: 1,
  name: 'Test Hotel',
  location: {
    address: '123 Street',
    city: 'CityTest',
    latitude: 40.7128,
    longitude: -74.006,
  },
  stars: 4,
  checkIn: {from: '14:00', to: '22:00'},
  checkOut: {from: '07:00', to: '12:00'},
  contact: {phoneNumber: '+123456789', email: 'hotel@test.com'},
  gallery: ['https://example.com/image1.jpg', 'https://example.com/image2.jpg'],
  userRating: 8.5,
  price: 150,
  currency: 'EUR',
};

describe('HotelCard Component', () => {
  test('renders hotel name correctly', () => {
    const {getByText} = render(<HotelCard hotel={mockHotel} />);
    expect(getByText('Test Hotel')).toBeTruthy();
  });

  test('renders stars correctly', () => {
    const {getAllByTestId} = render(<HotelCard hotel={mockHotel} />);
    expect(getAllByTestId('star-icon').length).toBe(5);
  });

  test('renders phone number and email correctly', () => {
    const {getByText} = render(<HotelCard hotel={mockHotel} />);
    expect(getByText('+123456789')).toBeTruthy();
    expect(getByText('hotel@test.com')).toBeTruthy();
  });

  test('calls phone function on phone click', () => {
    const {getByText} = render(<HotelCard hotel={mockHotel} />);
    fireEvent.press(getByText('+123456789'));
    expect(callPhone).toHaveBeenCalledWith(mockHotel.contact.phoneNumber);
  });

  test('calls email function on email click', () => {
    const {getByText} = render(<HotelCard hotel={mockHotel} />);
    fireEvent.press(getByText('hotel@test.com'));
    expect(sendEmail).toHaveBeenCalledWith(mockHotel.contact.email);
  });

  test('renders address correctly and calls openMaps on press', () => {
    const {getByText} = render(<HotelCard hotel={mockHotel} />);
    const addressElement = getByText('123 Street, CityTest');
    expect(addressElement).toBeTruthy();

    fireEvent.press(addressElement);
    expect(openMaps).toHaveBeenCalledWith(
      mockHotel.location.latitude,
      mockHotel.location.longitude,
      mockHotel.location.address,
      mockHotel.location.city,
    );
  });

  test('renders user rating correctly with the appropriate color', () => {
    const {getByText} = render(<HotelCard hotel={mockHotel} />);
    const ratingElement = getByText(mockHotel.userRating.toString());
    expect(ratingElement).toBeTruthy();
    expect(getRatingColor).toHaveBeenCalledWith(mockHotel.userRating);
  });
});
