import { configureStore } from '@reduxjs/toolkit';
import imageDataReducer from './features/imageData/imageDataSlice';

export const store = configureStore({
  reducer: { imageData: imageDataReducer },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
