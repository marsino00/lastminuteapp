import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import {HotelsState, Hotel} from './hotelSlice.types';

const initialState: HotelsState = {
  hotels: [],
  loading: false,
  error: null,
};

const hotelSlice = createSlice({
  name: 'hotels',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchHotels.pending, state => {
        state.loading = true;
      })
      .addCase(
        fetchHotels.fulfilled,
        (state, action: PayloadAction<Hotel[]>) => {
          state.loading = false;
          state.hotels = action.payload;
        },
      )
      .addCase(fetchHotels.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Error fetching hotels';
      });
  },
});

export const fetchHotels = createAsyncThunk<Hotel[], void>(
  'hotels/fetchHotels',
  async () => {
    const response = await fetch(
      'https://technology.lastminute.com/api/hotel.json',
    );
    return response.json();
  },
);

export default hotelSlice.reducer;
