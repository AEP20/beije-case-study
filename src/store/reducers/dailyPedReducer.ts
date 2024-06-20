import {createReducer} from '@reduxjs/toolkit';
import {setDailyPed, setSuperDailyPed, clearDailyPedItems} from '../actions';
import {DailyPedState} from '../types';

const initialState: DailyPedState = {
  daily: 0,
  superDaily: 0,
};

const dailyPedReducer = createReducer(initialState, builder => {
  builder
    .addCase(setDailyPed, (state, action) => {
      state.daily = action.payload;
    })
    .addCase(setSuperDailyPed, (state, action) => {
      state.superDaily = action.payload;
    })
    .addCase(clearDailyPedItems, state => {
      state.daily = 0;
      state.superDaily = 0;
    });
});

export default dailyPedReducer;
