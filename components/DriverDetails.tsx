import React, {Component} from 'react';
import {DriverStandingItem} from './DriverStandings';
import F1ApiClient from '../services/F1ApiClient';
import {View, Text} from 'react-native';

interface DriverProps {
  readonly navigation: any;
  readonly route: any;
}

interface DriverState {
  readonly driver: DriverStandingItem;
}

export default class DriverDetails extends Component<DriverProps, DriverState> {

  constructor(props: DriverProps) {
    super(props);
    this.state = {driver: this.props.route.params.driver};

    props.navigation.setOptions({
      title: `${this.state.driver.Driver.givenName} ${this.state.driver.Driver.familyName}`,
    });
  }
  render() {
    const driver = this.state.driver;
    return (
      <View>
        <Text>Position: {driver.position}</Text>
        <Text>Points: {driver.points}</Text>
        <Text>Given Name: {driver.Driver.givenName}</Text>
        <Text>Family Name: {driver.Driver.familyName}</Text>
        <Text>Date of Birth: {driver.Driver.dateOfBirth}</Text>
      </View>
    );
  }
}
