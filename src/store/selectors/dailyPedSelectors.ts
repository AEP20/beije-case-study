import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../store';

export const selectDailyPedState = (state: RootState) => state.dailyPed;

export const selectDailyPedValues = createSelector(
  [selectDailyPedState],
  dailyPed => ({
    daily: dailyPed.daily,
    superDaily: dailyPed.superDaily,
  }),
);
