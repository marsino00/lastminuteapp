import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {sortOptions} from '../../utils/hotelUtils';
import {styles} from './HotelFilters.styles';

interface FilterProps {
  sortOption: 'priceAsc' | 'priceDesc' | 'ratingAsc' | 'ratingDesc';
  setSortOption: (
    value: 'priceAsc' | 'priceDesc' | 'ratingAsc' | 'ratingDesc',
  ) => void;
  minPrice: string;
  setMinPrice: (value: string) => void;
  maxPrice: string;
  setMaxPrice: (value: string) => void;
}

const HotelFilters: React.FC<FilterProps> = ({
  sortOption,
  setSortOption,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
}) => {
  return (
    <View style={styles.filterContainer}>
      <View style={styles.sortControls}>
        <Text style={styles.text}>Order by:</Text>
        <Dropdown
          data={sortOptions}
          labelField="label"
          valueField="value"
          value={sortOption}
          onChange={item => setSortOption(item.value)}
          style={styles.dropdown}
          placeholder="Order by"
        />
      </View>
      <View style={styles.textInputContainer}>
        <View style={styles.inputCombo}>
          <Text style={styles.text}>Min Price:</Text>
          <TextInput
            style={styles.input}
            placeholder="0"
            keyboardType="numeric"
            value={minPrice}
            onChangeText={setMinPrice}
          />
        </View>
        <View style={styles.inputCombo}>
          <Text style={styles.text}>Max Price:</Text>
          <TextInput
            style={styles.input}
            placeholder="10000"
            keyboardType="numeric"
            value={maxPrice}
            onChangeText={setMaxPrice}
          />
        </View>
      </View>
    </View>
  );
};

export default HotelFilters;
