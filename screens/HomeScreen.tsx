import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DriverDetails from '../components/DriverDetails';
import CurrentDriverStandings from '../components/CurrentDriverStandings';

interface HomeScreenProps {}
interface HomeScreenState {
  readonly ready: boolean;
}
const Stack = createStackNavigator();
export default class HomeScreen extends Component<
  HomeScreenProps,
  HomeScreenState
> {
  constructor(props: HomeScreenProps) {
    super(props);
    this.state = {ready: false};
  }

  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Current Driver Standings"
          component={CurrentDriverStandings}
        />
        <Stack.Screen name="driverDetails" component={DriverDetails} />
      </Stack.Navigator>
    );
  }
}
