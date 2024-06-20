import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {SelectedItemsCardProps} from './type';
import {useLogic} from '../../hooks/useLogic';

const SelectedItemsCard: React.FC<SelectedItemsCardProps> = ({
  items,
  type,
  title,
}) => {
  const {handleClearItems} = useLogic();

  const filteredItems = items.filter(item => item.quantity > 0);

  if (filteredItems.length === 0) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={() => handleClearItems(type)}>
          <Text style={styles.clearButton}>Paketten Çıkart</Text>
        </TouchableOpacity>
      </View>
      {filteredItems.map((item, index) => (
        <Text key={index} style={styles.item}>
          {item.name}: {item.quantity}
        </Text>
      ))}
    </View>
  );
};

export default SelectedItemsCard;
