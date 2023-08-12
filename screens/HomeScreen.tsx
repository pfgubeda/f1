import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Text} from 'react-native';

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
    return <Text>Home Screen</Text>;
  }
}
