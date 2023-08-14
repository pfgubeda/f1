import React, {Component} from 'react';
import {Text} from 'react-native';

interface DreamTeamProps {
  readonly navigation: any;
}

interface DreamTeamState {}

export default class DreamTeam extends Component<
  DreamTeamProps,
  DreamTeamState
> {
  constructor(props: DreamTeamProps) {
    super(props);

    this.state = {};
    props.navigation.setOptions({
      headerShown: false,
    });
  }
  render() {
    return <Text> Dream Team aquí</Text>;
  }
}
