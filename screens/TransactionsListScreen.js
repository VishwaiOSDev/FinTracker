import React, { useState } from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet, Modal, TextInput, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const TransactionsListScreen = ({ navigation, route }) => {
  const { transactions } = route.params;

  const [modalVisible, setModalVisible] = useState(false);
  const [newTransaction, setNewTransaction] = useState({
    name: '',
    amount: '',
    date: '',
    location: ''
  });

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

  const handleSubmit = () => {
    // Handle submission of new transaction
    console.log("New Transaction:", newTransaction);
    // Reset the form fields
    setNewTransaction({
      name: '',
      amount: '',
      date: '',
      location: ''
    });
    // Close the modal
    setModalVisible(false);
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={transactions}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.fab}
      >
        <Icon name="add" size={30} color="#fff" />
      </TouchableOpacity>

      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <TextInput
            placeholder="Name"
            style={styles.input}
            value={newTransaction.name}
            onChangeText={(text) => setNewTransaction({ ...newTransaction, name: text })}
          />
          <TextInput
            placeholder="Amount"
            style={styles.input}
            value={newTransaction.amount}
            onChangeText={(text) => setNewTransaction({ ...newTransaction, amount: text })}
            keyboardType="numeric"
          />
          <TextInput
            placeholder="Date"
            style={styles.input}
            value={newTransaction.date}
            onChangeText={(text) => setNewTransaction({ ...newTransaction, date: text })}
          />
          <TextInput
            placeholder="Location"
            style={styles.input}
            value={newTransaction.location}
            onChangeText={(text) => setNewTransaction({ ...newTransaction, location: text })}
          />
          <Button title="Submit" onPress={handleSubmit} />
        </View>
        </View>
      </Modal>

    </View>
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
  fab: {
    position: 'absolute',
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    bottom: 20,
    backgroundColor: '#9DBEAA',
    borderRadius: 30,
    elevation: 8,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    padding: 20,
    alignItems: 'center',
  },
  modalContainer: {
    width: "100%",
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    color: '#000',
    borderColor: '#ccc',
    borderRadius: 5,
  },
});

export default TransactionsListScreen;
