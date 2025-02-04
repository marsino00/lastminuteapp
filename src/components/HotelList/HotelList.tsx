import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, FlatList, ActivityIndicator, TextInput} from 'react-native';
import {AppDispatch, RootState} from 'src/store/store';
import {fetchHotels} from '../../store/hotelSlice/hotelSlice';
import {styles} from './HotelList.styles';
import HotelCard from '../HotelCard/HotelCard';
import {Dropdown} from 'react-native-element-dropdown';

const HotelList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {hotels, loading, error} = useSelector(
    (state: RootState) => state.hotels,
  );
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const [sortOption, setSortOption] = useState<
    'priceAsc' | 'priceDesc' | 'ratingAsc' | 'ratingDesc'
  >('priceAsc');

  const sortOptions = [
    {label: 'Price ascendant', value: 'priceAsc'},
    {label: 'Price descending', value: 'priceDesc'},
    {label: 'Rating ascendant', value: 'ratingAsc'},
    {label: 'Rating descending', value: 'ratingDesc'},
  ];
  const filteredHotels = hotels
    .filter(hotel => {
      const price = hotel.price;
      const min = minPrice ? parseFloat(minPrice) : 0;
      const max = maxPrice ? parseFloat(maxPrice) : Infinity;
      return price >= min && price <= max;
    })
    .sort((a, b) => {
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
    });
  useEffect(() => {
    dispatch(fetchHotels());
  }, [dispatch]);

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.error}>Error: {error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.container}>
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
      <FlatList
        data={filteredHotels}
        contentContainerStyle={styles.list}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <HotelCard hotel={item} />}
      />
    </View>
  );
};

export default HotelList;
