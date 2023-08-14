import React, {Component} from 'react';
import {ConstructorStandingItem} from './ConstructorStandings';
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
  constructor(props: ConstructorProps) {
    super(props);
    this.state = {constructor: this.props.route.params.constructor};

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
