import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CurrentSchedule from '../components/CurrentSchedule';

interface ScheduleScreenProps {}
interface ScheduleScreenState {
  readonly ready: boolean;
}
const Stack = createStackNavigator();
export default class ScheduleScreen extends Component<
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
        <Stack.Screen name="Schedule" component={CurrentSchedule} />
      </Stack.Navigator>
    );
  }
}
