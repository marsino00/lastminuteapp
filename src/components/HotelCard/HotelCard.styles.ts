import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 2, height: 2},
    shadowRadius: 5,
    elevation: 3,
    width: '90%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  imageContainer: {
    borderRadius: 10,
    width: '100%',
    height: 180,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  link: {
    color: '#007AFF',
    textDecorationLine: 'underline',
  },
  starContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  star: {
    marginRight: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  text: {
    marginLeft: 8,
    fontSize: 16,
  },
  price: {
    fontSize: 35,
    fontWeight: '900',
    color: '#F2007D',
  },
  ratingContainer: {
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 5,
  },
  checkTimeContainer: {
    marginVertical: 5,
  },
  ratingText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  ratingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
