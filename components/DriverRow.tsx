import React, {Component} from 'react';
import {DriverStandingItem} from './DriverStandings';
import {Text, TouchableHighlight, View} from 'react-native';

interface DriverRowProps {
  readonly onPress: () => void;
  readonly driver: DriverStandingItem;
}

export default class DriverRow extends Component<DriverRowProps> {
  render() {
    return (
      <TouchableHighlight onPress={this.props.onPress}>
        <View>
          <Text>{this.props.driver.position}</Text>
          <Text>{this.props.driver.Driver.givenName}</Text>
          <Text>{this.props.driver.Driver.familyName}</Text>
          <Text>{this.props.driver.Constructors[0].name}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}
