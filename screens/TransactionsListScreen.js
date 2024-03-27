import React from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const TransactionsListScreen = ({ navigation, route }) => {

  const { transactions } = route.params
  
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Transaction Detail', item)}>
      <View style={styles.transactionItem}>
        <Text style={styles.transactionTitle}>{item.name}</Text>
        <View style={styles.costContainer}>
          <Text style={styles.transactionCost}>{item.amount.toFixed(2)}</Text>
          <Icon name="chevron-right" size={24} color="#808080" />
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={transactions}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  transactionItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between', 
  },
  transactionTitle: {
    flex: 1, 
    fontSize: 16,
  },
  costContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  transactionCost: {
    fontWeight: 'bold', 
    marginRight: 5,
    color: '#808080',
  },
});

export default TransactionsListScreen;
