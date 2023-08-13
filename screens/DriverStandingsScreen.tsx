import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DriverDetails from '../components/DriverDetails';
import CurrentDriverStandings from '../components/CurrentDriverStandings';

interface CurrentDriverStandingsScreenProps {}
interface CurrentDriverStandingsScreenState {
  readonly ready: boolean;
}
const Stack = createStackNavigator();
export default class CurrentDriverStandingsScreen extends Component<
  CurrentDriverStandingsScreenProps,
  CurrentDriverStandingsScreenState
> {
  constructor(props: CurrentDriverStandingsScreenProps) {
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
