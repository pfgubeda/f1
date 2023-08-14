import 'react-native-gesture-handler';
import React, {Fragment} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {createStackNavigator} from '@react-navigation/stack';
import DriverDetails from './components/driver/DriverDetails';
import CurrentDriverStandings from './components/driver/CurrentDriverStandings';
import CurrentConstructorStandings from './components/constructor/CurrentConstructorStandings';
import ConstructorDetails from './components/constructor/ConstructorDetails';
import RaceDetails from './components/schedule/RaceDetails';
import UpcomingSchedule from './components/schedule/UpcomingSchedule';
import PastSchedule from './components/schedule/PastSchedule';
import DreamTeam from './components/DreamTeam';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const Tab = createBottomTabNavigator();

const TopBar = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const StandingsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="StandingsScreen"
        component={StandingsScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="driverDetails" component={DriverDetails} />
      <Stack.Screen name="constructorDetails" component={ConstructorDetails} />
    </Stack.Navigator>
  );
};

const StandingsScreen = () => {
  return (
    <TopBar.Navigator
      screenOptions={{
        tabBarLabelStyle: {fontFamily: 'Formula1-Display-Bold'},
        tabBarStyle: {backgroundColor: '#ff232b'},
        tabBarActiveTintColor: '#fff',
        tabBarIndicatorStyle: {backgroundColor: '#fff'},
      }}>
      <TopBar.Screen name="Driver" component={CurrentDriverStandings} />
      <TopBar.Screen
        name="Constructor"
        component={CurrentConstructorStandings}
      />
    </TopBar.Navigator>
  );
};

const RacingStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Racing"
        component={RacingScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="raceDetails" component={RaceDetails} />
    </Stack.Navigator>
  );
};

const RacingScreen = () => {
  return (
    <TopBar.Navigator
      screenOptions={{
        tabBarLabelStyle: {fontFamily: 'Formula1-Display-Bold'},
        tabBarStyle: {backgroundColor: '#ff232b'},
        tabBarActiveTintColor: '#fff',
        tabBarIndicatorStyle: {backgroundColor: '#fff'},
      }}>
      <TopBar.Screen name="Upcoming" component={UpcomingSchedule} />
      <TopBar.Screen name="Past" component={PastSchedule} />
    </TopBar.Navigator>
  );
};

const App = () => {
  return (
    <Fragment>
      <SafeAreaView style={{flex: 0, backgroundColor: '#ff232b'}} />
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({}) => ({
              tabBarActiveTintColor: '#ff232b',
              tabBarInactiveTintColor: 'gray',
            })}>
            <Tab.Screen
              name="Races"
              component={RacingStack}
              options={{
                headerShown: true,
                title: 'Racing'.toLocaleUpperCase(),
                tabBarLabel: 'Racing',
                headerStyle: {
                  backgroundColor: '#ff232b',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontSize: 24,
                  fontFamily: 'Formula1-Display-Bold',
                },
                tabBarIcon: ({color}) => (
                  <FontAwesome5 name="flag-checkered" size={27} color={color} />
                ),
              }}
            />
            <Tab.Screen
              name="Dream Team"
              component={DreamTeam}
              options={{
                headerShown: true,
                title: 'Dream Team'.toLocaleUpperCase(),
                tabBarLabel: 'Dream Team',
                headerStyle: {
                  backgroundColor: '#ff232b',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontSize: 24,
                  fontFamily: 'Formula1-Display-Bold',
                },
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
              name="Standings"
              component={StandingsStack}
              options={{
                headerShown: true,
                title: 'Standings'.toLocaleUpperCase(),
                tabBarLabel: 'Standings',
                headerStyle: {
                  backgroundColor: '#ff232b',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontSize: 24,
                  fontFamily: 'Formula1-Display-Bold',
                },
                tabBarIcon: ({color}) => (
                  <FontAwesome5 name="list-ol" size={27} color={color} />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </Fragment>
  );
};
export default App;
