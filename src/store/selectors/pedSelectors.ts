import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../store';

export const selectPedState = (state: RootState) => state.ped;

export const selectPedValues = createSelector([selectPedState], ped => ({
  standard: ped.standard,
  super: ped.super,
  superPlus: ped.superPlus,
}));
