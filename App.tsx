import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FavouritesScreen from './screens/FavouritesScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

interface AppProps {}

interface AppState {
  readonly ready: boolean;
}
export default class App extends Component<AppProps, AppState> {
  private homeStack!: () => any;
  private favouritesStack!: () => any;
  private mainTab!: () => any;
  private navigationContainer!: () => any;

  constructor(props: AppProps) {
    super(props);

    this.state = {
      ready: false,
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('lastSelectedTab').then(lastSelectedTab => {
      this.createMainNavigation(lastSelectedTab ?? undefined);
    });
  }

  createMainNavigation(lastSelectedTab?: string) {
    this.homeStack = () => (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    );
    this.favouritesStack = () => {
      return (
        <Stack.Navigator>
          <Stack.Screen name="Favourites" component={FavouritesScreen} />
        </Stack.Navigator>
      );
    };
    this.mainTab = () => {
      function tabBarOnPress(tabName: string) {
        return () => {
          AsyncStorage.setItem('lastSelectedTab', tabName);
        };
      }
      return (
        <Tab.Navigator initialRouteName={lastSelectedTab}>
          <Tab.Screen
            name="Home"
            component={this.homeStack}
            listeners={{tabPress: tabBarOnPress('Home')}}
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
            component={this.favouritesStack}
            listeners={{tabPress: tabBarOnPress('Favorites')}}
            options={{
              headerShown: false,
              tabBarLabel: 'Favorites',
              tabBarIcon: ({color, size}) => (
                <Ionicons name="heart" size={size} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      );
    };

    this.navigationContainer = () => {
      return (
        <NavigationContainer>
          <SafeAreaView style={styles.container}>{this.mainTab()}</SafeAreaView>
        </NavigationContainer>
      );
    };

    this.setState({ready: true});
  }

  render() {
    return this.state.ready ? <this.navigationContainer /> : <View />;
  }
}
