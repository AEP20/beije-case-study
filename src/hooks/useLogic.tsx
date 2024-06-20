import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {Provider, useSelector} from 'react-redux';
import store from '../store/store';
import {
  TabNavigation,
  TabScreenOne,
  TabScreenTwo,
  TabScreenThree,
} from '../components';
import {SelectedItemsCard} from '../components';
import {
  selectPedValues,
  selectDailyPedValues,
  selectTamponValues,
} from '../store/selectors';
import {Colors} from '../utils';
import {
  clearPedItems,
  clearDailyPedItems,
  clearTamponItems,
} from '../store/actions';
import {useDispatch} from 'react-redux';

export const useLogic = () => {
  const dispatch = useDispatch();

  const tabs = [
    {label: 'beije Ped', component: <TabScreenOne />},
    {label: 'beije Günlük Ped', component: <TabScreenTwo />},
    {label: 'beije Tampon', component: <TabScreenThree />},
  ];

  const pedValues = useSelector(selectPedValues);
  const dailyPedValues = useSelector(selectDailyPedValues);
  const tamponValues = useSelector(selectTamponValues);

  const pedItems = [
    {name: 'Standart Ped', quantity: pedValues.standard},
    {name: 'Süper Ped', quantity: pedValues.super},
    {name: 'Süper+ Ped', quantity: pedValues.superPlus},
  ];

  const dailyPedItems = [
    {name: 'Günlük Ped', quantity: dailyPedValues.daily},
    {name: 'Süper Günlük Ped', quantity: dailyPedValues.superDaily},
  ];

  const tamponItems = [
    {name: 'Mini Tampon', quantity: tamponValues.mini},
    {name: 'Standart Tampon', quantity: tamponValues.standard},
    {name: 'Süper Tampon', quantity: tamponValues.super},
  ];

  const totalPedQuantity = pedItems.reduce((total, item) => total + item.quantity, 0);
  const totalDailyPedQuantity = dailyPedItems.reduce((total, item) => total + item.quantity, 0);
  const totalTamponQuantity = tamponItems.reduce((total, item) => total + item.quantity, 0);

  const totalQuantity = totalPedQuantity + totalDailyPedQuantity + totalTamponQuantity;

  const handleClearItems = (type: 'ped' | 'dailyPed' | 'tampon') => {
    if (type === 'ped') {
      dispatch(clearPedItems());
    } else if (type === 'dailyPed') {
      dispatch(clearDailyPedItems());
    } else if (type === 'tampon') {
      dispatch(clearTamponItems());
    }
  };

  return {
    tabs,
    pedItems,
    dailyPedItems,
    tamponItems,
    handleClearItems,
    totalQuantity,
    totalPedQuantity,
    totalDailyPedQuantity,
    totalTamponQuantity,
  };
};
