import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DreamTeam from '../components/DreamTeam';

interface DreamTeamScreenProps {}
interface DreamTeamScreenState {
  readonly ready: boolean;
}
const Stack = createStackNavigator();

export default class DreamTeamScreen extends Component<
  DreamTeamScreenProps,
  DreamTeamScreenState
> {
  constructor(props: DreamTeamScreenProps) {
    super(props);
    this.state = {ready: false};
  }

  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Dream Team" component={DreamTeam} />
      </Stack.Navigator>
    );
  }
}
