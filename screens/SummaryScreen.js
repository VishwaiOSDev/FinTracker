import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SummaryScreen = ({ route }) => {
    
    const { transactions } = route.params;
    const totalTransactions = transactions.length;

    const totalExpense = transactions.reduce((sum, transaction) => sum + transaction.amount, 0);

    const highestExpense = Math.max(...transactions.map((t) => t.amount));
    const lowestExpense = Math.min(...transactions.map((t) => t.amount));
    const highestExpenseTransaction = transactions.find(
        (t) => t.amount === highestExpense
    );

    const lowestExpenseTransaction = transactions.find(
        (t) => t.amount === lowestExpense
    );r
    return (
        <View style={styles.container}>
            <View style={styles.stats}>
                <Text style={styles.statText}>Total Transactions: {totalTransactions}</Text>
                <Text style={styles.statText}>Balance: ${totalExpense.toFixed(2)}</Text>
            </View>
            <Text style={styles.sectionHeader}>High Spending</Text>
            <View style={styles.transaction}>
                <Text style={styles.transactionText}>{highestExpenseTransaction.name}</Text>
                <Text style={styles.transactionAmount}>${highestExpense.toFixed(2)}</Text>
            </View>
            <Text style={styles.sectionHeader}>Low Spending</Text>
            <View style={styles.transaction}>
                <Text style={styles.transactionText}>{lowestExpenseTransaction.name}</Text>
                <Text style={styles.transactionAmount}>${lowestExpense.toFixed(2)}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#F5F5F5', 
        flex: 1, 
    },
    stats: {
        marginBottom: 20,
    },
    statText: {
        marginBottom: 10,
        fontSize: 16,
        color: '#666666', 
    },
    sectionHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333333', 
    },
    transaction: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        backgroundColor: '#FFFFFF', 
        padding: 10,
        borderRadius: 8, 
        elevation: 2, 
    },
    transactionText: {
        flex: 1,
        color: '#333333', 
    },
    transactionAmount: {
        fontWeight: 'bold',
        backgroundColor: '#C2FFAD',
    },
});

export default SummaryScreen;
