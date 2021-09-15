import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import mapsReducer from './maps/maps.reducer';
export const store = configureStore({
  reducer: {
    maps: mapsReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
