import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../store';

export const selectTamponState = (state: RootState) => state.tampon;

export const selectTamponValues = createSelector(
  [selectTamponState],
  tampon => ({
    mini: tampon.mini,
    standard: tampon.standard,
    super: tampon.super,
  }),
);
