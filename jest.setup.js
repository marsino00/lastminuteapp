/* eslint-disable no-undef */
import 'react-native-gesture-handler/jestSetup';

global.jest = require('jest-mock');

jest.mock('react-native-reanimated', () =>
  require('react-native-reanimated/mock'),
);

jest.mock('react-native-gesture-handler', () => ({
  GestureHandlerRootView: jest.fn(),
  ScrollView: jest.fn(),
  Slider: jest.fn(),
  Switch: jest.fn(),
  TextInput: jest.fn(),
  ToolbarAndroid: jest.fn(),
  ViewPagerAndroid: jest.fn(),
  DrawerLayoutAndroid: jest.fn(),
  WebView: jest.fn(),
  NativeViewGestureHandler: jest.fn(),
  TapGestureHandler: jest.fn(),
  FlingGestureHandler: jest.fn(),
  ForceTouchGestureHandler: jest.fn(),
  LongPressGestureHandler: jest.fn(),
  PanGestureHandler: jest.fn(),
  PinchGestureHandler: jest.fn(),
  RotationGestureHandler: jest.fn(),
  NativeViewGestureHandlerContext: jest.fn(),
  State: {},
  Directions: {},
}));

// jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
