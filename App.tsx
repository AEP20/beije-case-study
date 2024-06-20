import React, {Fragment} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  StatusBar,
} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/store/store';
import {TabNavigation} from './src/components';
import {SelectedItemsCard} from './src/components/SelectedItemsCard';
import {Colors} from './src/utils';
import {useLogic} from './src/hooks/useLogic';

const AppContent: React.FC = () => {
  const {tabs, pedItems, dailyPedItems, tamponItems, totalQuantity} =
    useLogic();

  return (
    <>
  
      <SafeAreaView style={{flex: 1, backgroundColor: Colors.BackgroundColor}}>
        <StatusBar barStyle="light-content" />
        <View style={styles.mainContainer}>
          <View style={styles.upperContainer}>
            <TabNavigation tabs={tabs} />
          </View>
          <View style={styles.bottomContainer}>
            {totalQuantity > 0 ? (
              <Text style={styles.subTitle}>Özel Paketin</Text>
            ) : (
              <Text style={styles.subTitle}>Sepetinizde Ürün Yok</Text>
            )}
            <ScrollView style={styles.scrollViewContent}>
              <SelectedItemsCard
                items={pedItems}
                type="ped"
                title="Ped Paketleri"
              />
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
        </View>
      </SafeAreaView>
    </>
  );
};

const App: React.FC = () => (
  <Provider store={store}>
    <AppContent />
  </Provider>
);

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    height: '100%',
  },
  upperContainer: {
    height: '52%',
    backgroundColor: Colors.BackgroundColor,
  },
  bottomContainer: {
    height: '48%',
    backgroundColor: Colors.BackgroundColor,
  },
  scrollViewContent: {
    backgroundColor: Colors.BackgroundColor,
    paddingHorizontal: 20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  subTitle: {
    fontSize: 24,
    color: Colors.Black,
    textAlign: 'center',
    marginBottom: 12,
  },
});

export default App;
