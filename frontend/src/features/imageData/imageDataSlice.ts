import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import imageDataService from './imageDataService';

export interface imageDataSliceState {
  data: string;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: string;
}

const initialState: imageDataSliceState = {
  data: '',
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

export const generateImage = createAsyncThunk(
  'api/generateImage',
  async (imageData: { prompt: string; size: string }, thunkAPI) => {
    try {
      return await imageDataService.generateImage(imageData);
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.error &&
          error.response.data.error.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const imageDataSlice = createSlice({
  name: 'imageData',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(generateImage.pending, (state) => {
        state.isLoading = true;
        state.message = 'Loading';
      })
      .addCase(generateImage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload.status;
        state.data = action.payload.data;
      })
      .addCase(generateImage.rejected, (state, action: any) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

// Action creators are generated for each case reducer function
export const { reset } = imageDataSlice.actions;

export default imageDataSlice.reducer;
