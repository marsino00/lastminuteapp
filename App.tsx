import React from 'react';
import {StyleSheet, View} from 'react-native';
import HotelList from './src/components/HotelList/HotelList';
import {Provider} from 'react-redux';
import {store} from './src/store/store';

const App = () => {
  return (
    <View style={styles.sectionContainer}>
      <Provider store={store}>
        <HotelList />
      </Provider>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {},
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
