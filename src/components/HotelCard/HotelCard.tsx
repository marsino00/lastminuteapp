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
} from '../../utils/hotelUtils/hotelUtils';
import StarRating from '../StarRating/StarRating';
import {useMemo} from 'react';
import {COLORS} from '../../utils/constants/colors';

const HotelCard: React.FC<{hotel: Hotel}> = ({hotel}) => {
  const {width} = Dimensions.get('window');
  const images = useMemo(() => hotel.gallery, [hotel.gallery]);

  return (
    <View style={styles.card}>
      <Carousel
        loop
        width={width - 55}
        height={width / 2}
        data={images}
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
        <Icon name="phone" size={18} color={COLORS.ACCENT_CYAN} />
        <Text style={[styles.text, styles.link]}>
          {hotel.contact.phoneNumber}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => sendEmail(hotel.contact.email)}
        style={styles.row}>
        <Icon name="envelope" size={18} color={COLORS.ACCENT_ORANGE} />
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
        <Icon name="map-marker" size={18} color={COLORS.ACCENT_DARK_RED} />
        <Text style={[styles.text, styles.link]}>
          {hotel.location.address}, {hotel.location.city}
        </Text>
      </TouchableOpacity>
      <View style={styles.checkTimeContainer}>
        <View style={styles.row}>
          <Icon name="sign-in" size={18} color={COLORS.PRIMARY_GREEN} />
          <Text style={styles.text}>
            Check-in: {hotel.checkIn.from} - {hotel.checkIn.to}
          </Text>
        </View>
        <View style={styles.row}>
          <Icon name="sign-out" size={18} color={COLORS.PRIMARY_RED} />
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
