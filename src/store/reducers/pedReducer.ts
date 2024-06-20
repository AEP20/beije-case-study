import {createReducer} from '@reduxjs/toolkit';
import {
  setStandardPed,
  setSuperPed,
  setSuperPlusPed,
  clearPedItems,
} from '../actions';
import {PedState} from '../types';

const initialState: PedState = {
  standard: 0,
  super: 0,
  superPlus: 0,
};

const pedReducer = createReducer(initialState, builder => {
  builder
    .addCase(setStandardPed, (state, action) => {
      state.standard = action.payload;
    })
    .addCase(setSuperPed, (state, action) => {
      state.super = action.payload;
    })
    .addCase(setSuperPlusPed, (state, action) => {
      state.superPlus = action.payload;
    })
    .addCase(clearPedItems, state => {
      state.standard = 0;
      state.super = 0;
      state.superPlus = 0;
    });
});

export default pedReducer;
