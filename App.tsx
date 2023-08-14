import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import CurrentDriverStandingsScreen from './screens/DriverStandingsScreen';
import CurrentConstructorStandingsScreen from './screens/ConstructorStandingsScreen';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import DreamTeamScreen from './screens/DreamTeamScreen';
import UpcomingScheduleScreen from './screens/UpcomingScheduleScreen';
import PastScheduleScreen from './screens/PastScheduleScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const Tab = createBottomTabNavigator();

const TopBar = createMaterialTopTabNavigator();

const StandingsScreen = () => {
  return (
    <TopBar.Navigator>
      <TopBar.Screen name="Driver" component={CurrentDriverStandingsScreen} />
      <TopBar.Screen
        name="Constructor"
        component={CurrentConstructorStandingsScreen}
      />
    </TopBar.Navigator>
  );
};

const RacingScreen = () => {
  return (
    <TopBar.Navigator>
      <TopBar.Screen name="Upcoming" component={UpcomingScheduleScreen} />
      <TopBar.Screen name="Past" component={PastScheduleScreen} />
    </TopBar.Navigator>
  );
};

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{headerShown: false}}>
          <Tab.Screen
            name="Races"
            component={RacingScreen}
            options={{
              headerShown: false,
              tabBarLabel: 'Racing',
              tabBarIcon: ({color}) => (
                <FontAwesome5 name="flag-checkered" size={27} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Dream Team"
            component={DreamTeamScreen}
            options={{
              headerShown: false,
              tabBarLabel: 'Dream Team',
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
            component={StandingsScreen}
            options={{
              headerShown: false,
              tabBarLabel: 'Standings',
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
