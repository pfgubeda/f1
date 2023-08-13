import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ConstructorDetails from '../components/ConstructorDetails';
import CurrentConstructorStandings from '../components/CurrentConstructorStandings';

interface CurrentConstructorStandingsScreenProps {}
interface CurrentConstructorStandingsScreenState {
  readonly ready: boolean;
}
const Stack = createStackNavigator();
export default class CurrentConstructorStandingsScreen extends Component<
  CurrentConstructorStandingsScreenProps,
  CurrentConstructorStandingsScreenState
> {
  constructor(props: CurrentConstructorStandingsScreenProps) {
    super(props);
    this.state = {ready: false};
  }

  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Current Constructor Standings"
          component={CurrentConstructorStandings}
        />
        <Stack.Screen
          name="constructorDetails"
          component={ConstructorDetails}
        />
      </Stack.Navigator>
    );
  }
}
