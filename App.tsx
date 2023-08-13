import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import CurrentDriverStandingsScreen from './screens/DriverStandingsScreen';
import CurrentConstructorStandingsScreen from './screens/ConstructorStandingsScreen';

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
              tabBarLabel: '',
              tabBarIcon: ({color}) => (
                <Ionicons name="home" size={27} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Driver Standings"
            component={CurrentDriverStandingsScreen}
            options={{
              headerShown: false,
              tabBarLabel: '',
              tabBarIcon: ({color}) => (
                <MaterialCommunityIcons
                  name="racing-helmet"
                  size={27}
                  color={color}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Constructor Standings"
            component={CurrentConstructorStandingsScreen}
            options={{
              headerShown: false,
              tabBarLabel: '',
              tabBarIcon: ({color}) => (
                <FontAwesome5 name="list-ol" size={27} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};
export default App;
