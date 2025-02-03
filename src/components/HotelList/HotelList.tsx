import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  View,
  Text,
  FlatList,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {Hotel} from 'src/store/hotelSlice/hotelSlice.types';
import {AppDispatch, RootState} from 'src/store/store';
import {fetchHotels} from '../../store/hotelSlice/hotelSlice';
import {styles} from './HotelList.styles';

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
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <HotelCard hotel={item} />}
      />
    </View>
  );
};

const HotelCard: React.FC<{hotel: Hotel}> = ({hotel}) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Text style={styles.title}>{hotel.name}</Text>
      <Image source={{uri: hotel.gallery[0]}} style={styles.image} />
      <Text>📍 {hotel.location.city}</Text>
      <Text>⭐ {hotel.stars} stars</Text>
      <Text>
        💰 {hotel.price} {hotel.currency}
      </Text>
      <Text>🔝 {hotel.userRating}/10</Text>
    </TouchableOpacity>
  );
};

export default HotelList;
