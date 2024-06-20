import {createAction} from '@reduxjs/toolkit';

export const setStandardPed = createAction<number>('SET_STANDARD_PED');
export const setSuperPed = createAction<number>('SET_SUPER_PED');
export const setSuperPlusPed = createAction<number>('SET_SUPER_PLUS_PED');

export const setDailyPed = createAction<number>('SET_DAILY_PED');
export const setSuperDailyPed = createAction<number>('SET_SUPER_DAILY_PED');

export const setMiniTampon = createAction<number>('SET_MINI_TAMPON');
export const setStandardTampon = createAction<number>('SET_STANDARD_TAMPON');
export const setSuperTampon = createAction<number>('SET_SUPER_TAMPON');

export const clearPedItems = createAction('CLEAR_PED_ITEMS');
export const clearDailyPedItems = createAction('CLEAR_DAILYPED_ITEMS');
export const clearTamponItems = createAction('CLEAR_TAMPON_ITEMS');
