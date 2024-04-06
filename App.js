import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { collection, onSnapshot } from 'firebase/firestore';

import TransactionsListScreen from './screens/TransactionsListScreen';
import TransactionDetailScreen from './screens/TransactionDetailScreen';
import SummaryScreen from './screens/SummaryScreen';
import { Feather } from '@expo/vector-icons';
import db from './config';
import { ActivityIndicator } from 'react-native';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'transactions'), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setTransactions(data);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);
  
  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Transactions') {
              iconName = 'list';
            } else if (route.name === 'Summary') {
              iconName = 'bar-chart-2';
            }

            return <Feather name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#9DBEAA"
        })}
      >        
        <Tab.Screen name="Transactions" component={TransactionsStack} options={{ headerShown: false, tabBarLabel: 'Transactions' }} initialParams={{ transactions }} />
        <Tab.Screen name="Summary" options={{ headerShown: false, tabBarLabel: 'Summary' }} component={SummaryStack} initialParams={{ transactions }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const TransactionsStack = ({ route }) => {
  
  const { transactions } = route.params; 
  
  return (
    <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#C2FFAD',
        },
        headerTintColor: 'black', 
        headerTitleStyle: {
          fontWeight: 'bold',
        },
    }}>
      <Stack.Screen name="TransactionsList" component={TransactionsListScreen} options={{ title: 'Transactions' }} initialParams={{ transactions }} />
      <Stack.Screen
        name="Transaction Detail"
        component={TransactionDetailScreen}
        initialParams={{ transactions }}
      />
    </Stack.Navigator>
  );
};

const SummaryStack = ({ route }) => {
    
  const { transactions } = route.params; 
  
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#C2FFAD',
      },
      headerTintColor: 'black', 
      headerTitleStyle: {
        fontWeight: 'bold',
      },
  }}>
    <Stack.Screen name="SummaryScreen" component={SummaryScreen} options={{ title: 'Summary' }} initialParams={{ transactions }} />
  </Stack.Navigator>
  );
};

export default App;
