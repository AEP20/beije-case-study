import {createReducer} from '@reduxjs/toolkit';
import {
  setMiniTampon,
  setStandardTampon,
  setSuperTampon,
  clearTamponItems,
} from '../actions';
import {TamponState} from '../types';

const initialState: TamponState = {
  mini: 0,
  standard: 0,
  super: 0,
};

const tamponReducer = createReducer(initialState, builder => {
  builder
    .addCase(setMiniTampon, (state, action) => {
      state.mini = action.payload;
    })
    .addCase(setStandardTampon, (state, action) => {
      state.standard = action.payload;
    })
    .addCase(setSuperTampon, (state, action) => {
      state.super = action.payload;
    })
    .addCase(clearTamponItems, state => {
      state.mini = 0;
      state.standard = 0;
      state.super = 0;
    });
});

export default tamponReducer;
