import React, {Component} from 'react';
import {ConstructorStandingItem} from './ConstructorStandings';
import F1ApiClient from '../services/F1ApiClient';
import {View, Text} from 'react-native';

interface ConstructorProps {
  readonly navigation: any;
  readonly route: any;
}

interface ConstructorState {
  readonly constructor: ConstructorStandingItem;
}

export default class ConstructorDetails extends Component<
  ConstructorProps,
  ConstructorState
> {
  private apiClient: F1ApiClient;

  constructor(props: ConstructorProps) {
    super(props);
    this.state = {constructor: this.props.route.params.constructor};
    this.apiClient = new F1ApiClient();

    props.navigation.setOptions({
      title: `${this.state.constructor.Constructor.name}`,
    });
  }
  render() {
    const constructor = this.state.constructor;
    return (
      <View>
        <Text>Position: {constructor.position}</Text>
        <Text>Points: {constructor.points}</Text>
        <Text>Given Name: {constructor.Constructor.name}</Text>
      </View>
    );
  }
}
