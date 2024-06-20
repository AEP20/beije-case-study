import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

interface TabNavigationProps {
  tabs: Array<{label: string; component: React.ReactNode}>;
}

const TabNavigation: React.FC<TabNavigationProps> = ({tabs}) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.tabBar}>
        {tabs.map((tab, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.tabButton, activeTab === index && styles.activeTab]}
            onPress={() => setActiveTab(index)}>
            <Text style={styles.tabLabel}>{tab.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.content}>{tabs[activeTab].component}</View>
    </View>
  );
};

export default TabNavigation;
