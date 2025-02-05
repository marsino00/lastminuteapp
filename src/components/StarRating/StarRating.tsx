import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from '../HotelCard/HotelCard.styles';

interface StarRatingProps {
  stars: number;
  maxStars?: number;
  size?: number;
}

const StarRating: React.FC<StarRatingProps> = ({
  stars,
  maxStars = 5,
  size = 16,
}) => {
  return (
    <View style={styles.starContainer}>
      {Array.from({length: maxStars}, (_, index) => (
        <Icon
          testID="star-icon"
          key={`star-${stars}-${index}`}
          name={index < stars ? 'star' : 'star-o'}
          size={size}
          color={index < stars ? '#FFD700' : '#C0C0C0'}
          style={styles.star}
        />
      ))}
    </View>
  );
};

export default StarRating;
