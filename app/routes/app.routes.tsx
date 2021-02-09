import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Header from '../components/Header';
import Home from '../screens/Home';
import Account from '../screens/Account';

const App = createStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <App.Navigator
      screenOptions={{
        header: () => <Header />,
      }}
    >
      <App.Screen name="Home" component={Home} />
      <App.Screen name="Account" component={Account} />
    </App.Navigator>
  );
};

export default AppRoutes;
