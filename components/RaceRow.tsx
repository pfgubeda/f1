import {StyleSheet, Text, TouchableHighlight} from 'react-native';
import {View} from 'react-native';
import {RaceItem} from './Schedule';
import {Component} from 'react';

interface RaceRowProps {
  readonly onPress: () => void;
  readonly race: RaceItem;
}

export default class RaceRow extends Component<RaceRowProps> {
  render() {
    console.log(this.props.race.raceName);
    return (
      <TouchableHighlight onPress={this.props.onPress}>
        <View style={styles.raceCard}>
          <Text>{this.props.race.raceName}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}
const styles = StyleSheet.create({
  raceCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    padding: 16,
    marginBottom: 2,
    justifyContent: 'space-between',
  },
});
