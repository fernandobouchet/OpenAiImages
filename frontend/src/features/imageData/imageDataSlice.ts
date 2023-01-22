import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface imageDataSliceState {
  prompt: string;
  size: string;
}

const initialState: imageDataSliceState = {
  prompt: '',
  size: '',
};

export const imageDataSlice = createSlice({
  name: 'imageData',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<imageDataSliceState>) => {
      return {
        ...state,
        prompt: action.payload.prompt,
        size: action.payload.size,
      };
    },
    clearData: (state) => {
      state = initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setData, clearData } = imageDataSlice.actions;

export default imageDataSlice.reducer;
