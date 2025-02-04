import React from 'react';
import {View} from 'react-native';
import HotelList from './src/components/HotelList/HotelList';
import {Provider} from 'react-redux';
import {store} from './src/store/store';

const App = () => {
  return (
    <View>
      <Provider store={store}>
        <HotelList />
      </Provider>
    </View>
  );
};

export default App;
