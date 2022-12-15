import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import hotelsService from "./hotelService";

export const hotel = createAsyncThunk("hotels/hotel", async (_, thunkAPI) => {
    try {
        return hotelsService.getHotel();
    } catch (err) {
        console.log("err", err);
    }
});

export const hotels = createAsyncThunk("hotels/all", async (_, thunkAPI) => {
    try {
        return hotelsService.getHotels();
    } catch (err) {
        console.log("err", err);
    }
});

export const createhotel = createAsyncThunk("hotels/all", async (hotel, thunkAPI) => {
    try {
        return hotelsService.createHotel(hotel);
    } catch (err) {
        console.log("err", err);
    }
});

const initialState = {
    hotels: [],
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: ""
};

const hotelSlice = createSlice({
  name: "hotel",
  initialState,
  reducers: {
    reset: (state) => {
        state.isError = false;
        state.isSuccess = false;
        state.message = ""
    }
  },
  extraReducers: (builder) => {
    builder
        .addCase(hotel.pending, (state, action: PayloadAction<any>) => {})
        .addCase(hotel.rejected, (state, action: PayloadAction<any>) => {})
        .addCase(hotel.fulfilled, (state, action: PayloadAction<any>) => {})
  },
});

export const { reset } = hotelSlice.actions;

export default hotelSlice.reducer;
