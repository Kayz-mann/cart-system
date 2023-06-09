import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { TailwindProvider } from 'tailwindcss-react-native';
import HomeScreen from './src/screens/HomeScreen';
import 'react-native-url-polyfill/auto';
import RestaurantScreen from './src/screens/RestaurantScreen';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import BasketScreen from './src/screens/BasketScreen';
import PreparingOrderScreen from './src/screens/PreparingOrderScreen';
import DeliveryScreen from './src/screens/DeliveryScreen';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <TailwindProvider>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Restaurant" component={RestaurantScreen} />
            <Stack.Screen name="Basket" component={BasketScreen}
              options={{ presentation: 'modal', headerShown: false }}
            />
            <Stack.Screen name="PreparingOrder" component={PreparingOrderScreen}
              options={{ presentation: 'fullScreenModal', headerShown: false }}
            />
            <Stack.Screen name="Delivery" component={DeliveryScreen}
              options={{ presentation: 'fullScreenModal', headerShown: false }}
            />
          </Stack.Navigator>
        </TailwindProvider>
        <StatusBar style="auto" />
      </NavigationContainer>
    </Provider>

  );
}


