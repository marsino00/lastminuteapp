import React from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  Linking,
  Platform,
} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {Hotel} from 'src/store/hotelSlice/hotelSlice.types';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from './HotelCard.styles';

const {width} = Dimensions.get('window');

const HotelCard: React.FC<{hotel: Hotel}> = ({hotel}) => {
  const openMaps = () => {
    const {latitude, longitude, address, city} = hotel.location;
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

  const renderStars = (stars: number) => (
    <View style={styles.starContainer}>
      {Array.from({length: 5}, (_, index) => (
        <Icon
          key={index}
          name={index < stars ? 'star' : 'star-o'}
          size={16}
          color={index < stars ? '#FFD700' : '#C0C0C0'}
          style={styles.star}
        />
      ))}
    </View>
  );

  const getRatingColor = (rating: number) => {
    if (rating >= 8) {
      return '#28a745';
    } else if (rating >= 6) {
      return '#ffc107';
    } else {
      return '#dc3545';
    }
  };

  return (
    <View style={styles.card}>
      <Carousel
        loop
        width={width - 55}
        height={width / 2}
        data={hotel.gallery}
        panGestureHandlerProps={{
          activeOffsetX: [-10, 10],
        }}
        renderItem={({item}) => (
          <View style={styles.imageContainer}>
            <Image
              source={{uri: item}}
              resizeMode="cover"
              style={styles.image}
            />
          </View>
        )}
      />
      <Text style={styles.title}>{hotel.name}</Text>
      <TouchableOpacity onPress={openMaps} style={styles.row}>
        <Icon name="map-marker" size={18} color="#d9534f" />
        <Text style={[styles.text, styles.link]}>
          {hotel.location.address}, {hotel.location.city}
        </Text>
      </TouchableOpacity>

      {renderStars(hotel.stars)}

      <View style={styles.ratingRow}>
        <View style={styles.row}>
          <Icon name="money" size={18} color="#28a745" />
          <Text style={styles.text}>
            {hotel.price} {hotel.currency}
          </Text>
        </View>
        <View
          style={[
            styles.ratingContainer,
            {backgroundColor: getRatingColor(hotel.userRating)},
          ]}>
          <Text style={styles.ratingText}>{hotel.userRating}</Text>
        </View>
      </View>
    </View>
  );
};

export default HotelCard;
