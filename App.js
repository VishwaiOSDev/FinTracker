import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import TransactionsListScreen from './screens/TransactionsListScreen';
import TransactionDetailScreen from './screens/TransactionDetailScreen';
import SummaryScreen from './screens/SummaryScreen';
import { Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const App = () => {

    const transactions = [
      { id: 1, name: 'Groceries', amount: 50.00, date: '2024-03-25', location: 'Supermarket on Main St.' },
      { id: 2, name: 'iPhone 15 Pro Max', amount: 2000.00, date: '2024-03-20', location: 'Office' },
      { id: 3, name: 'Coffee Shop', amount: 10.50, date: '2024-03-24', location: 'Coffee Shop by the Park' },
      { id: 4, name: 'Restaurant', amount: 75.25, date: '2024-03-22', location: 'Italian Restaurant on Elm St.' },
      { id: 5, name: 'Movie Ticket', amount: 15.00, date: '2024-03-23', location: 'Cinemaplex' },
      { id: 6, name: 'Transportation', amount: 30.00, date: '2024-03-21', location: 'Bus Ticket' },
      { id: 7, name: 'Clothing', amount: 80.00, date: '2024-03-19', location: 'Department Store' },
      { id: 8, name: 'Gift', amount: 25.00, date: '2024-03-18', location: 'Gift Shop' },
      { id: 9, name: 'Online Purchase', amount: 42.75, date: '2024-03-17', location: 'Online Store' },
      { id: 10, name: 'Gym Membership', amount: 50.00, date: '2024-03-15', location: 'Fitness Center' },
      { id: 11, name: 'Utilities', amount: 120.00, date: '2024-03-14', location: 'Utility Company' },
      { id: 12, name: 'Rent', amount: 800.00, date: '2024-03-01', location: 'Apartment Complex' },
      { id: 13, name: 'Haircut', amount: 35.00, date: '2024-02-28', location: 'Barber Shop' },
      { id: 14, name: 'Doctor Appointment', amount: 75.00, date: '2024-02-25', location: 'Clinic' },
      { id: 15, name: 'Bookstore', amount: 20.00, date: '2024-02-20', location: 'University Bookstore' },
      { id: 16, name: 'Streaming Service', amount: 10.00, date: '2024-02-18', location: 'Online Streaming Platform' },
      { id: 17, name: 'Fast Food', amount: 12.00, date: '2024-02-16', location: 'Burger Joint' },
      { id: 18, name: 'Phone Bill', amount: 60.00, date: '2024-02-15', location: 'Telecom Provider' },
      { id: 19, name: 'Car Wash', amount: 20.00, date: '2024-02-10', location: 'Car Wash Service' },
      { id: 20, name: 'Internet Bill', amount: 75.00, date: '2024-02-01', location: 'Internet Provider' },
  ];

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
