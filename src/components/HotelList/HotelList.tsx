import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import {AppDispatch, RootState} from 'src/store/store';
import {fetchHotels} from '../../store/hotelSlice/hotelSlice';
import {styles} from './HotelList.styles';
import HotelCard from '../HotelCard/HotelCard';
import HotelFilters from '../HotelFilters/HotelFilters';
import {filterAndSortHotels} from '../../utils/hotelUtils/hotelUtils';
import {COLORS} from '../../utils/constants/colors';

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

  const filteredHotels = filterAndSortHotels(
    hotels,
    minPrice,
    maxPrice,
    sortOption,
  );

  useEffect(() => {
    dispatch(fetchHotels());
  }, [dispatch]);

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={COLORS.ACCENT_PINK} />
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
      <HotelFilters
        sortOption={sortOption}
        setSortOption={setSortOption}
        minPrice={minPrice}
        setMinPrice={setMinPrice}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
      />
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
