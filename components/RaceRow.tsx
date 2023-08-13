import {StyleSheet, Text, TouchableHighlight} from 'react-native';
import React, {View} from 'react-native';
import {RaceItem} from './Schedule';
import {Component} from 'react';

interface RaceRowProps {
  readonly onPress: () => void;
  readonly race: RaceItem;
}

export default class RaceRow extends Component<RaceRowProps> {
  render() {
    const day = this.props.race.date.split('-')[2];
    const endDay = parseInt(day, 10) + 2;
    var endDayString = endDay.toString();
    if (endDay < 10) {
      endDayString = '0' + endDay.toString();
    }
    var dayToShow = day.toString() + '-' + endDayString;
    const monthToShow = getMonthName(
      parseInt(this.props.race.date.split('-')[1], 10),
    );
    return (
      <TouchableHighlight onPress={this.props.onPress}>
        <View style={styles.raceCard}>
          <View>
            <Text style={styles.dayView}>{dayToShow}</Text>
            <View style={styles.monthViewContainer}>
              <Text style={styles.monthView}>{monthToShow}</Text>
            </View>
          </View>
          <View style={styles.raceNameContainer}>
            <Text style={styles.roundView}>
              Round {this.props.race.round.toString()}
            </Text>
            <Text style={styles.circuitNameView}>
              {this.props.race.Circuit.Location.country}
            </Text>
            <Text style={styles.raceNameView}>{this.props.race.raceName}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

const getMonthName = (monthNumber: number) => {
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ];
  return monthNames[monthNumber];
};
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
    paddingHorizontal: 16,
    paddingBottom: 8,
    paddingTop: 16,
    marginBottom: 2,
    justifyContent: 'space-between',
  },
  dayView: {
    fontSize: 16,
    fontFamily: 'Formula1-Display-Regular',
    textAlign: 'center',
  },
  monthView: {
    fontFamily: 'Formula1-Display-Bold',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: 16,
    color: '#3B3D3E',
  },
  monthViewContainer: {
    borderRadius: 20,
    backgroundColor: '#C6C8CA',
    padding: 4,
  },
  raceNameContainer: {
    flex: 1,
    marginLeft: 16,
  },
  raceNameView: {
    fontSize: 10,
    fontFamily: 'Formula1-Display-Wide',
    color: '#6A6C6D',
  },
  circuitNameView: {
    fontSize: 20,
    fontFamily: 'Formula1-Display-Bold',
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  roundView: {
    fontSize: 12,
    fontFamily: 'Formula1-Display-Regular',
    color: 'red',
  },
});
