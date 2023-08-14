import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PastSchedule from '../components/PastSchedule';
import RaceDetails from '../components/RaceDetails';

interface ScheduleScreenProps {}
interface ScheduleScreenState {
  readonly ready: boolean;
}
const Stack = createStackNavigator();
export default class PastScheduleScreen extends Component<
  ScheduleScreenProps,
  ScheduleScreenState
> {
  constructor(props: ScheduleScreenProps) {
    super(props);
    this.state = {ready: false};
  }

  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Schedule" component={PastSchedule} />
        <Stack.Screen name="raceDetails" component={RaceDetails} />
      </Stack.Navigator>
    );
  }
}
