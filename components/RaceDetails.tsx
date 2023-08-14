import React, {Component} from 'react';
import {RaceItem} from './Schedule';
import {Text, View} from 'react-native';

interface RaceProps {
  readonly navigation: any;
  readonly route: any;
}

interface RaceState {
  readonly race: RaceItem;
}

export default class RaceDetails extends Component<RaceProps, RaceState> {
  constructor(props: RaceProps) {
    super(props);
    this.state = {race: this.props.route.params.race};

    props.navigation.setOptions({
      title: `${this.state.race.raceName}`,
    });
  }
  render() {
    const race = this.state.race;
    return (
      <View>
        <Text>{race.Circuit.circuitName}</Text>
      </View>
    );
  }
}
