import React, {Component} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {ListRenderItemInfo, StyleSheet, View} from 'react-native';
import DriverRow from './DriverRow';
import F1ApiClient from '../services/F1ApiClient';

interface Driver {
  readonly driverId: string;
  readonly permanentNumber: string;
  readonly code: string;
  readonly url: string;
  readonly givenName: string;
  readonly familyName: string;
  readonly dateOfBirth: string;
  readonly nationality: string;
}
interface Constructor {
  readonly constructorId: string;
  readonly url: string;
  readonly name: string;
}

export interface DriverStandingItem {
  readonly position: string;
  readonly points: string;
  readonly Driver: Driver;
  readonly Constructors: Constructor[];
}

export interface DriverStandingsProps {
  readonly navigation: any;
}

interface DriverStandingsState {
  readonly drivers: DriverStandingItem[];
}

export default class DriverStandings extends Component<
  DriverStandingsProps,
  DriverStandingsState
> {
  protected apiClient: F1ApiClient;

  constructor(props: DriverStandingsProps) {
    super(props);

    this.state = {drivers: []};
    this.apiClient = new F1ApiClient();
  }

  async componentDidMount() {
    try {
      const driverStandings = await this.loadPage();
      this.setState({drivers: driverStandings});
    } catch (error) {
      console.log(error);
    }
  }

  loadPage(): Promise<DriverStandingItem[]> {
    throw new Error('Method not implemented.');
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList<DriverStandingItem>
          data={this.state.drivers}
          renderItem={this.renderRow}
          style={styles.standingList}
        />
      </View>
    );
  }

  renderRow = (rowInfo: ListRenderItemInfo<DriverStandingItem>) => {
    const item = rowInfo.item;

    return (
      <DriverRow onPress={this.onDriverPress.bind(this, item)} driver={item} />
    );
  };

  onDriverPress = (driver: DriverStandingItem) => {
    this.props.navigation.navigate('driverDetails', {driver});
  };
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C8CCCD',
  },
  standingList: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 10,
  },
});
