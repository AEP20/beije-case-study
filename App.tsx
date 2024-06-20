import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Provider, useSelector} from 'react-redux';
import store from './src/store/store';
import {TabNavigation} from './src/components';
import {SelectedItemsCard} from './src/components/SelectedItemsCard';
import {Colors} from './src/utils';
import {useLogic} from './src/hooks/useLogic';

const AppContent: React.FC = () => {
  const {
    tabs,
    pedItems,
    dailyPedItems,
    tamponItems,
    totalQuantity,
    totalPedQuantity,
    totalDailyPedQuantity,
    totalTamponQuantity,
  } = useLogic();

  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <TabNavigation tabs={tabs} />
      </View>
      <ScrollView style={styles.scrollViewContent}>
        {totalQuantity > 0 ? (
          <Text style={styles.title}>Seçilen Ürünler</Text>
        ) : (
          <Text style={styles.title}>Sepetinizde Ürün Yok</Text>
        )}

        <SelectedItemsCard items={pedItems} type="ped" title="Ped Paketleri" />
        <SelectedItemsCard
          items={dailyPedItems}
          type="dailyPed"
          title="Günlük Ped Paketleri"
        />
        <SelectedItemsCard
          items={tamponItems}
          type="tampon"
          title="Tampon Paketleri"
        />
      </ScrollView>
    </View>
  );
};

const App: React.FC = () => (
  <Provider store={store}>
    <AppContent />
  </Provider>
);

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flex: 1,
    backgroundColor: Colors.BackgroundColor,
    paddingTop: 50,
  },
  upperContainer: {
    height: '58%',
  },
  bottomContainer: {
    height: '42%',
  },
  scrollViewContent: {
    backgroundColor: Colors.red,
    paddingHorizontal: 16,
    paddingTop: 15,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  title: {
    fontSize: 26,
    color: Colors.White,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default App;
