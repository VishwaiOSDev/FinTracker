import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TransactionDetailScreen = ({ route }) => {
  const { name, amount, date, location } = route.params;
  
  const transactionDate = new Date(date);
  const month = transactionDate.toLocaleString('default', { month: 'long' });

  return (
    <View style={styles.container}>
      <View style={styles.locationContainer}>
        <View style={styles.costContainer}>
          <Text style={styles.costText}>${amount}</Text>
        </View>
        <Text style={styles.nameText}>{name}</Text>
        <Text style={styles.nameText}>{location}</Text>
      </View>
      <View style={styles.dateContainer}>
        <Text style={styles.dateLabelText}>Transaction Date</Text>
        <Text style={styles.dateText}>{month} {transactionDate.getDate()}, {transactionDate.getFullYear()}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
  costContainer: {
    alignItems: 'center',
    padding: 10,
  },
  costText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  locationContainer: {
    backgroundColor: '#C2FFAD',
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  dateLabelText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  dateText: {
    fontSize: 16,
    marginLeft: 10,
  },
  nameText: {
    fontSize: 16,
  },
});

export default TransactionDetailScreen;
