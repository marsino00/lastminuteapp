# LastMinuteApp

## Overview
LastMinuteApp is a React Native application designed to help users find hotels efficiently. The app features hotel listings, filtering and sorting options, and allows users to make calls, send emails, and open map locations directly from the app.

## Features
- Display hotel listings with details like price, rating, location, and contact information.
- Filter hotels based on price range.
- Sort hotels by price or user rating.
- Open hotel locations in Google Maps or Apple Maps.
- Linking to make direct phone calls and send emails to hotels.
- Smooth UI with a carousel for hotel images.

## Tech Stack
- **React Native** 0.77
- **Redux Toolkit** for state management
- **Redux Thunk** for async data fetching
- **React Native Reanimated Carousel** for hotel image display
- **React Native Vector Icons** for enhanced UI
- **Jest & React Testing Library** for testing

## Installation

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn
- React Native CLI

### Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/lastminuteapp.git
   cd lastminuteapp
   ```

2. Install dependencies:
   ```sh
   npm install
   ```
   or
   ```sh
   yarn install
   ```

3. Link dependencies (if needed):
   ```sh
   npx react-native link
   ```

4. Run the application:
   ```sh
   npx react-native run-android
   ```
   or
   ```sh
   npx react-native run-ios
   ```

## Testing
This project uses Jest and React Native Testing Library for unit and integration tests.

Run tests with:
```sh
npm test
```

## API Endpoints
Hotels data is fetched from:
```
https://technology.lastminute.com/api/hotel.json
```

## License
This project is licensed under the MIT License.

---

For any questions or issues, feel free to open an issue on GitHub or contact me via email: rogermarsino@gmail.com

