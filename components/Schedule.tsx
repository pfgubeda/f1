import {FlatList} from 'react-native-gesture-handler';
import F1ApiClient from '../services/F1ApiClient';
import React, {Component} from 'react';
import {ListRenderItemInfo, StyleSheet, View} from 'react-native';
import RaceRow from './RaceRow';

interface Location {
  readonly lat: string;
  readonly long: string;
  readonly locality: string;
  readonly country: string;
}

interface Circuit {
  readonly circuitId: string;
  readonly url: string;
  readonly circuitName: string;
  readonly Location: Location;
}

export interface RaceItem {
  readonly season: string;
  readonly round: string;
  readonly date: string;
  readonly time: string;
  readonly url: string;
  readonly raceName: string;
  readonly Circuit: Circuit;
}

export interface ScheduleProps {
  readonly navigation: any;
}

interface ScheduleState {
  readonly races: RaceItem[];
}

export default class Schedule extends Component<ScheduleProps, ScheduleState> {
  protected apiClient: F1ApiClient;

  constructor(props: ScheduleProps) {
    super(props);

    this.state = {races: []};
    this.apiClient = new F1ApiClient();
  }

  async componentDidMount() {
    try {
      const races = await this.loadPage();
      this.setState({races: races});
    } catch (error) {
      console.log(error);
    }
  }

  loadPage(): Promise<RaceItem[]> {
    throw new Error('Method not implemented.');
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList<RaceItem>
          data={this.state.races}
          renderItem={this.renderRow}
          style={styles.racesList}
        />
      </View>
    );
  }

  renderRow = (rowInfo: ListRenderItemInfo<RaceItem>) => {
    const item = rowInfo.item;
    return <RaceRow onPress={this.onRacePress.bind(this, item)} race={item} />;
  };

  onRacePress = (race: RaceItem) => {
    this.props.navigation.navigate('raceDetails', {race});
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C8CCCD',
  },
  racesList: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 10,
  },
});
