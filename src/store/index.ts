import { configureStore } from '@reduxjs/toolkit'
import { cartReducer } from './cartSlice';
import { uiReducer } from './uiSlice';

/**
 * Using configureStore should not need any additional typings.
 * You will, however, want to extract the RootState type and the Dispatch type so that they can be referenced as needed.
 * Inferring these types from the store itself means that they correctly update as you add more state slices or modify
 * middleware settings.
 * Since those are types, it's safe to export them directly from your store setup file such as app/store.ts and import
 * them directly into other files.
 */

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    ui: uiReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch