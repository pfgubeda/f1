import React, {Component} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {ListRenderItemInfo, StyleSheet, View} from 'react-native';
import ConstructorRow from './ConstructorRow';
import F1ApiClient from '../services/F1ApiClient';

interface Constructor {
  readonly constructorId: string;
  readonly url: string;
  readonly name: string;
  readonly nationality: string;
}

export interface ConstructorStandingItem {
  readonly position: string;
  readonly points: string;
  readonly wins: string;
  readonly Constructor: Constructor;
}

export interface ConstructorStandingsProps {
  readonly navigation: any;
}

interface ConstructorStandingsState {
  readonly constructors: ConstructorStandingItem[];
}

export default class ConstructorStandings extends Component<
  ConstructorStandingsProps,
  ConstructorStandingsState
> {
  protected apiClient: F1ApiClient;

  constructor(props: ConstructorStandingsProps) {
    super(props);

    this.state = {constructors: []};
    this.apiClient = new F1ApiClient();
  }

  async componentDidMount() {
    try {
      const constructorStandings = await this.loadPage();
      this.setState({constructors: constructorStandings});
    } catch (error) {
      console.log(error);
    }
  }

  loadPage(): Promise<ConstructorStandingItem[]> {
    throw new Error('Method not implemented.');
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList<ConstructorStandingItem>
          data={this.state.constructors}
          renderItem={this.renderRow}
          style={styles.standingList}
        />
      </View>
    );
  }

  renderRow = (rowInfo: ListRenderItemInfo<ConstructorStandingItem>) => {
    const item = rowInfo.item;
    return (
      <ConstructorRow
        onPress={this.onConstructorPress.bind(this, item)}
        constructorI={item}
      />
    );
  };

  onConstructorPress = (constructor: ConstructorStandingItem) => {
    this.props.navigation.navigate('constructorDetails', {constructor});
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
