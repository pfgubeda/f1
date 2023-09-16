/* eslint-disable react/no-unstable-nested-components */
import React, {Component} from 'react';
import {RaceItem} from './Schedule';
import {
  Button,
  Image,
  Linking,
  NativeModules,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {
  AUSTRALIA,
  AUSTRIA,
  AZERBAIJAN,
  BAHRAIN,
  BELGIUM,
  BRAZIL,
  CANADA,
  GREAT_BRITAIN,
  HUNGARY,
  ITALY,
  JAPAN,
  MEXICO,
  MIAMI,
  MONACO,
  NETHERLANDS,
  QATAR,
  SAUDI_ARABIA,
  SINGAPORE,
  SPAIN,
  UNITED_ARAB_EMIRATES,
  UNITED_STATES,
  VEGAS,
} from '../Resources';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import Toast from 'react-native-toast-message';

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
      title: `${this.state.race.raceName}`.toLocaleUpperCase(),
      headerStyle: {
        backgroundColor: '#ff232b',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontSize: 18,
        fontFamily: 'Formula1-Display-Bold',
      },
      headerBackTitle: 'Racing',
      headerRight: () => (
        <TouchableHighlight onPress={this.addRaceToCalendar}>
          <FontAwesome5Icon style={styles.topBarIcon} name="calendar-plus" />
        </TouchableHighlight>
      ),
    });
  }

  addRaceToCalendar = async () => {
    const race = this.state.race;
    const CalendarManager = NativeModules.CalendarManager;

    const raceDate = new Date(race.date);
    const raceTime = race.time.split(':');
    raceDate.setUTCHours(+raceTime[0]);
    console.log(raceDate);

    var raceEndDate = new Date(race.date);
    raceEndDate.setUTCHours(+raceTime[0] + 2);

    try {
      await CalendarManager.addEvent(
        race.raceName,
        raceDate.toISOString(),
        raceEndDate.toISOString(),
        race.Circuit.Location.locality,
      );
      Toast.show({
        type: 'success',
        text1: 'Added to calendar 📆',
      });
    } catch (e) {
      Toast.show({
        type: 'error',
        text1: 'Error adding to calendar',
      });
    }
  };

  render() {
    const race = this.state.race;
    return (
      <View style={styles.mainView}>
        <View style={styles.viewContainer}>
          <View style={styles.trackDetailsView}>
            <Text style={styles.boldDetailsText}>Round {race.round}</Text>
            <Text style={styles.detailsText}>{race.Circuit.circuitName}</Text>
            <Text style={styles.detailsText}>
              {race.Circuit.Location.locality}, {race.Circuit.Location.country}
            </Text>
            <Text style={styles.boldDetailsText}>{race.date}</Text>
          </View>
          <View style={styles.trackImgView}>
            <Image
              style={styles.trackImg}
              source={getTrackImgByCircuitName(
                race.Circuit.circuitName.toLocaleLowerCase(),
              )}
            />
          </View>
        </View>
        <View style={styles.viewContainer}>
          <Button
            onPress={() => loadInBrowser(race.Circuit.url)}
            title="Learn More"
            color="#ff232b"
            accessibilityLabel="Learn more about this track"
          />
        </View>
      </View>
    );
  }
}

const loadInBrowser = (url: string) => {
  Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
};

const getTrackImgByCircuitName = (trackName: string) => {
  if (trackName === 'albert park grand prix circuit') {
    return AUSTRALIA;
  }
  if (trackName === 'red bull ring') {
    return AUSTRIA;
  }
  if (trackName === 'baku city circuit') {
    return AZERBAIJAN;
  }
  if (trackName === 'bahrain international circuit') {
    return BAHRAIN;
  }
  if (trackName === 'circuit de spa-francorchamps') {
    return BELGIUM;
  }
  if (trackName === 'autódromo josé carlos pace') {
    return BRAZIL;
  }
  if (trackName === 'circuit gilles villeneuve') {
    return CANADA;
  }
  if (trackName === 'silverstone circuit') {
    return GREAT_BRITAIN;
  }
  if (trackName === 'hungaroring') {
    return HUNGARY;
  }
  if (trackName === 'autodromo nazionale di monza') {
    return ITALY;
  }
  if (trackName === 'suzuka circuit') {
    return JAPAN;
  }
  if (trackName === 'autódromo hermanos rodríguez') {
    return MEXICO;
  }
  if (trackName === 'miami international autodrome') {
    return MIAMI;
  }
  if (trackName === 'circuit de monaco') {
    return MONACO;
  }
  if (trackName === 'circuit park zandvoort') {
    return NETHERLANDS;
  }
  if (trackName === 'losail international circuit') {
    return QATAR;
  }
  if (trackName === 'jeddah corniche circuit') {
    return SAUDI_ARABIA;
  }
  if (trackName === 'marina bay street circuit') {
    return SINGAPORE;
  }
  if (trackName === 'circuit de barcelona-catalunya') {
    return SPAIN;
  }
  if (trackName === 'yas marina circuit') {
    return UNITED_ARAB_EMIRATES;
  }
  if (trackName === 'circuit of the americas') {
    return UNITED_STATES;
  }
  if (trackName === 'las vegas strip street circuit') {
    return VEGAS;
  }
};

const styles = StyleSheet.create({
  mainView: {
    display: 'flex',
    padding: 10,
    backgroundColor: '#fff',
  },
  viewContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  trackImg: {
    width: '90%',
    height: '100%',
    backgroundColor: 'grey',
  },
  trackImgView: {
    flex: 1,
    height: 150,
    padding: 10,
  },
  trackDetailsView: {
    flex: 1,
    width: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  detailsText: {
    fontSize: 18,
    fontFamily: 'Formula1-Display-Regular',
    padding: 5,
  },
  boldDetailsText: {
    fontSize: 18,
    fontFamily: 'Formula1-Display-Bold',
    padding: 5,
  },
  topBarIcon: {
    fontSize: 20,
    color: '#fff',
    marginRight: 15,
  },
});
