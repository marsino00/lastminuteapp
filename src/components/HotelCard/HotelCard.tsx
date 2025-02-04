import React from 'react';
import {View, Text, Image, Dimensions, TouchableOpacity} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {Hotel} from 'src/store/hotelSlice/hotelSlice.types';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from './HotelCard.styles';
import {
  openMaps,
  callPhone,
  sendEmail,
  getRatingColor,
} from '../../utils/hotelUtils';
import StarRating from '../StarRating/StarRating';

const {width} = Dimensions.get('window');

const HotelCard: React.FC<{hotel: Hotel}> = ({hotel}) => {
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
      <StarRating stars={hotel.stars} />

      <TouchableOpacity
        onPress={() => callPhone(hotel.contact.phoneNumber)}
        style={styles.row}>
        <Icon name="phone" size={18} color="#17a2b8" />
        <Text style={[styles.text, styles.link]}>
          {hotel.contact.phoneNumber}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => sendEmail(hotel.contact.email)}
        style={styles.row}>
        <Icon name="envelope" size={18} color="#f39c12" />
        <Text style={[styles.text, styles.link]}>{hotel.contact.email}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          openMaps(
            hotel.location.latitude,
            hotel.location.longitude,
            hotel.location.address,
            hotel.location.city,
          )
        }
        style={styles.row}>
        <Icon name="map-marker" size={18} color="#d9534f" />
        <Text style={[styles.text, styles.link]}>
          {hotel.location.address}, {hotel.location.city}
        </Text>
      </TouchableOpacity>
      <View style={styles.checkTimeContainer}>
        <View style={styles.row}>
          <Icon name="sign-in" size={18} color="#28a745" />
          <Text style={styles.text}>
            Check-in: {hotel.checkIn.from} - {hotel.checkIn.to}
          </Text>
        </View>
        <View style={styles.row}>
          <Icon name="sign-out" size={18} color="#dc3545" />
          <Text style={styles.text}>
            Check-out: {hotel.checkOut.from} - {hotel.checkOut.to}
          </Text>
        </View>
      </View>
      <View style={styles.ratingRow}>
        <View style={styles.row}>
          <Text style={styles.price}>{hotel.price}</Text>
          <Text style={styles.text}>{hotel.currency}</Text>
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
