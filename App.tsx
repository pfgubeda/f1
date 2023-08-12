import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FavouritesScreen from './screens/FavouritesScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerShown: false,
              tabBarLabel: 'Home',
              tabBarIcon: ({color, size}) => (
                <Ionicons name="home" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Favorites"
            component={FavouritesScreen}
            options={{
              headerShown: false,
              tabBarLabel: 'Favorites',
              tabBarIcon: ({color, size}) => (
                <Ionicons name="heart" size={size} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};
export default App;
