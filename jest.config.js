module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native' +
      '|@react-native' +
      '|react-navigation' +
      '|react-native-reanimated' +
      '|react-native-gesture-handler' +
      '|react-native-vector-icons' +
      '|react-native-element-dropdown' +
      '|react-redux' +
      ')/)',
  ],
  moduleNameMapper: {
    '\\.svg': '<rootDir>/__mocks__/svgMock.js',
  },
  globals: {
    __DEV__: true,
  },
};
