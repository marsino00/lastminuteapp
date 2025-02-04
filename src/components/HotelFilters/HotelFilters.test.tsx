import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import HotelFilters from './HotelFilters';

describe('HotelFilters Component', () => {
  let mockSetSortOption: jest.Mock;
  let mockSetMinPrice: jest.Mock;
  let mockSetMaxPrice: jest.Mock;

  beforeEach(() => {
    mockSetSortOption = jest.fn();
    mockSetMinPrice = jest.fn();
    mockSetMaxPrice = jest.fn();
  });

  test('renders all filters correctly', () => {
    const {getByText, getByPlaceholderText} = render(
      <HotelFilters
        sortOption="priceAsc"
        setSortOption={mockSetSortOption}
        minPrice=""
        setMinPrice={mockSetMinPrice}
        maxPrice=""
        setMaxPrice={mockSetMaxPrice}
      />,
    );

    expect(getByText('Order by:')).toBeTruthy();
    expect(getByPlaceholderText('0')).toBeTruthy();
    expect(getByPlaceholderText('10000')).toBeTruthy();
  });

  test('updates min price when typed', () => {
    const {getByPlaceholderText} = render(
      <HotelFilters
        sortOption="priceAsc"
        setSortOption={mockSetSortOption}
        minPrice=""
        setMinPrice={mockSetMinPrice}
        maxPrice=""
        setMaxPrice={mockSetMaxPrice}
      />,
    );

    fireEvent.changeText(getByPlaceholderText('0'), '100');

    expect(mockSetMinPrice).toHaveBeenCalledWith('100');
  });

  test('updates max price when typed', () => {
    const {getByPlaceholderText} = render(
      <HotelFilters
        sortOption="priceAsc"
        setSortOption={mockSetSortOption}
        minPrice=""
        setMinPrice={mockSetMinPrice}
        maxPrice=""
        setMaxPrice={mockSetMaxPrice}
      />,
    );

    fireEvent.changeText(getByPlaceholderText('10000'), '500');

    expect(mockSetMaxPrice).toHaveBeenCalledWith('500');
  });
});
