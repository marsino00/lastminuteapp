import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import {AppDispatch, RootState} from 'src/store/store';
import {fetchHotels} from '../../store/hotelSlice/hotelSlice';
import {styles} from './HotelList.styles';
import HotelCard from '../HotelCard/HotelCard';

const HotelList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {hotels, loading, error} = useSelector(
    (state: RootState) => state.hotels,
  );

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
      <FlatList
        data={hotels}
        contentContainerStyle={styles.list}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <HotelCard hotel={item} />}
      />
    </View>
  );
};

export default HotelList;
