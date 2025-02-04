import React from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {Hotel} from 'src/store/hotelSlice/hotelSlice.types';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from './HotelCard.styles';

const {width} = Dimensions.get('window');

const HotelCard: React.FC<{hotel: Hotel}> = ({hotel}) => {
  const renderStars = (stars: number) => {
    return (
      <View style={styles.starContainer}>
        {Array.from({length: 5}, (_, index) => (
          <Icon
            key={index}
            name={index < stars ? 'star' : 'star-o'}
            size={20}
            color={index < stars ? '#FFD700' : '#C0C0C0'}
            style={styles.star}
          />
        ))}
      </View>
    );
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

      <View style={styles.row}>
        <Icon name="map-marker" size={18} color="#d9534f" />
        <Text style={styles.text}>{hotel.location.city}</Text>
      </View>

      {renderStars(hotel.stars)}

      <View style={styles.row}>
        <Icon name="money" size={18} color="#28a745" />
        <Text style={styles.text}>
          {hotel.price} {hotel.currency}
        </Text>
      </View>

      <View style={styles.row}>
        <Icon name="thumbs-up" size={18} color="#007bff" />
        <Text style={styles.text}>{hotel.userRating}/10</Text>
      </View>
    </View>
  );
};

export default HotelCard;
