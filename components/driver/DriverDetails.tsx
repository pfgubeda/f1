import React, {Component} from 'react';
import {DriverStandingItem} from './DriverStandings';
import {View, Text, StyleSheet, Animated} from 'react-native';
import {
  ALEXANDER_ALBON,
  ALFA_ROMEO_CAR,
  ALPHATAURI_CAR,
  ALPINE_CAR,
  ASTON_MARTIN_CAR,
  CARLOS_SAINZ,
  CHARLES_LECLERC,
  DANIEL_RICCIARDO,
  ESTEBAN_OCON,
  FERNANDO_ALONSO,
  FERRARI_CAR,
  GEORGE_RUSSELL,
  HAAS_CAR,
  KEVIN_MAGNUSSEN,
  LANCE_STROLL,
  LANDO_NORRIS,
  LEWIS_HAMILTON,
  LIAM_LAWSON,
  LOGAN_SARGEANT,
  MAX_VERSTAPPEN,
  MCLAREN_CAR,
  MERCEDES_CAR,
  NICO_HULKENBERG,
  NYCK_DE_VRIES,
  OSCAR_PIASTRI,
  PIERRE_GASLY,
  RED_BULL_CAR,
  SERGIO_PEREZ,
  VALTTERI_BOTTAS,
  WILLIAMS_CAR,
  YUKI_TSUNODA,
  ZHOU_GUANYU,
} from '../Resources';

interface DriverProps {
  readonly navigation: any;
  readonly route: any;
}

interface DriverState {
  readonly driver: DriverStandingItem;
}

export default class DriverDetails extends Component<DriverProps, DriverState> {
  driverImageScale: Animated.Value;
  driverImageOpacity: Animated.Value;
  constructorImageScale: Animated.Value;
  constructorImageOpacity: Animated.Value;
  constructor(props: DriverProps) {
    super(props);
    this.state = {driver: this.props.route.params.driver};

    this.driverImageScale = new Animated.Value(0.5);
    this.driverImageOpacity = new Animated.Value(0);
    this.constructorImageScale = new Animated.Value(0.5);
    this.constructorImageOpacity = new Animated.Value(0);

    props.navigation.setOptions({
      title: `${this.state.driver.Driver.familyName}`.toLocaleUpperCase(),
      headerStyle: {
        backgroundColor: '#ff232b',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontSize: 18,
        fontFamily: 'Formula1-Display-Bold',
      },
      headerBackTitle: 'Standings',
    });
  }
  render() {
    Animated.parallel([
      Animated.timing(this.driverImageScale, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(this.driverImageOpacity, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(this.constructorImageScale, {
        toValue: 1,
        duration: 4000,
        useNativeDriver: true,
      }),
      Animated.timing(this.constructorImageOpacity, {
        toValue: 1,
        duration: 4000,
        useNativeDriver: true,
      }),
    ]).start();
    const driver = this.state.driver;
    return (
      <View style={styles.viewContainer}>
        <View style={styles.driverHeader}>
          <View
            style={[
              styles.circlePermanentNumber,
              getConstructorBackgroundStyleById(
                driver.Constructors[0].constructorId,
              ),
            ]}>
            <Text style={styles.driverPermanentNumber}>
              {driver.Driver.permanentNumber}
            </Text>
          </View>
          <View
            style={[
              styles.verticalSectionDivisor,
              getConstructorBackgroundStyleById(
                driver.Constructors[0].constructorId,
              ),
            ]}
          />
          <View style={styles.driverNameBlock}>
            <Text style={styles.driverName}>{driver.Driver.givenName}</Text>
            <Text
              style={[
                styles.driverFamilyName,
                getConstructorStyleById(driver.Constructors[0].constructorId),
              ]}>
              {driver.Driver.familyName.toLocaleUpperCase()}
            </Text>
            <Text style={styles.constructorName}>
              {driver.Constructors[0].name}
            </Text>
          </View>
          <Animated.Image
            style={[
              styles.driverImage,
              {
                opacity: this.driverImageOpacity,
                transform: [{scale: this.constructorImageScale}],
              },
            ]}
            source={getDriverImageById(driver.Driver.driverId)}
          />
        </View>
        <View
          style={[
            styles.sectionDivisor,
            getConstructorBackgroundStyleById(
              driver.Constructors[0].constructorId,
            ),
          ]}
        />
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>2023 Season</Text>
          <View style={styles.seasonDetails}>
            <Text style={styles.positionNumber}> {driver.position}º</Text>
            <Text style={styles.driverPoints}> {driver.points} PTS</Text>
          </View>
          <Animated.Image
            style={[
              styles.constructorCarImage,
              {
                opacity: this.constructorImageOpacity,
                transform: [{scale: this.constructorImageScale}],
              },
            ]}
            source={getConstructorCarById(driver.Constructors[0].constructorId)}
          />
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>BIO</Text>
          <View style={styles.seasonDetails}>
            <Animated.Image
              style={[
                styles.countryFlag,
                {
                  opacity: this.constructorImageOpacity,
                  transform: [{scale: this.constructorImageScale}],
                },
              ]}
              source={{
                uri:
                  'https://flagsapi.com/' +
                  getDriverNationalityImageByNationality(
                    driver.Driver.nationality,
                  ) +
                  '/flat/64.png',
              }}
            />
            <Text style={styles.dateText}>
              {getDateFromAmericanFormatDate(driver.Driver.dateOfBirth)}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const getDateFromAmericanFormatDate = (date: string) => {
  const dateArray = date.split('-');
  return `${dateArray[2]}/${dateArray[1]}/${dateArray[0]}`;
};

const getDriverImageById = (driverId: string) => {
  if (driverId === 'albon') {
    return ALEXANDER_ALBON;
  }
  if (driverId === 'sainz') {
    return CARLOS_SAINZ;
  }
  if (driverId === 'leclerc') {
    return CHARLES_LECLERC;
  }
  if (driverId === 'ricciardo') {
    return DANIEL_RICCIARDO;
  }
  if (driverId === 'ocon') {
    return ESTEBAN_OCON;
  }
  if (driverId === 'alonso') {
    return FERNANDO_ALONSO;
  }
  if (driverId === 'russell') {
    return GEORGE_RUSSELL;
  }
  if (driverId === 'kevin_magnussen') {
    return KEVIN_MAGNUSSEN;
  }
  if (driverId === 'stroll') {
    return LANCE_STROLL;
  }
  if (driverId === 'norris') {
    return LANDO_NORRIS;
  }
  if (driverId === 'hamilton') {
    return LEWIS_HAMILTON;
  }
  if (driverId === 'sargeant') {
    return LOGAN_SARGEANT;
  }
  if (driverId === 'max_verstappen') {
    return MAX_VERSTAPPEN;
  }
  if (driverId === 'hulkenberg') {
    return NICO_HULKENBERG;
  }
  if (driverId === 'de_vries') {
    return NYCK_DE_VRIES;
  }
  if (driverId === 'piastri') {
    return OSCAR_PIASTRI;
  }
  if (driverId === 'gasly') {
    return PIERRE_GASLY;
  }
  if (driverId === 'perez') {
    return SERGIO_PEREZ;
  }
  if (driverId === 'bottas') {
    return VALTTERI_BOTTAS;
  }
  if (driverId === 'tsunoda') {
    return YUKI_TSUNODA;
  }
  if (driverId === 'zhou') {
    return ZHOU_GUANYU;
  }
  if (driverId === 'lawson') {
    return LIAM_LAWSON;
  }
  return null;
};

const getConstructorCarById = (constructorId: string) => {
  if (constructorId === 'red_bull') {
    return RED_BULL_CAR;
  }
  if (constructorId === 'mercedes') {
    return MERCEDES_CAR;
  }
  if (constructorId === 'ferrari') {
    return FERRARI_CAR;
  }
  if (constructorId === 'mclaren') {
    return MCLAREN_CAR;
  }
  if (constructorId === 'alpine') {
    return ALPINE_CAR;
  }
  if (constructorId === 'alfa') {
    return ALFA_ROMEO_CAR;
  }
  if (constructorId === 'haas') {
    return HAAS_CAR;
  }
  if (constructorId === 'williams') {
    return WILLIAMS_CAR;
  }
  if (constructorId === 'aston_martin') {
    return ASTON_MARTIN_CAR;
  }
  if (constructorId === 'alphatauri') {
    return ALPHATAURI_CAR;
  }
};

const getConstructorBackgroundStyleById = (constructorId: string) => {
  if (constructorId === 'red_bull') {
    return styles.red_bull_racing_bg;
  }
  if (constructorId === 'mercedes') {
    return styles.mercedes_bg;
  }
  if (constructorId === 'ferrari') {
    return styles.ferrari_bg;
  }
  if (constructorId === 'mclaren') {
    return styles.mclaren_bg;
  }
  if (constructorId === 'aston_martin') {
    return styles.aston_martin_bg;
  }
  if (constructorId === 'alpine') {
    return styles.alpine_bg;
  }
  if (constructorId === 'alphatauri') {
    return styles.alpha_tauri_bg;
  }
  if (constructorId === 'alfa') {
    return styles.alfa_bg;
  }
  if (constructorId === 'haas') {
    return styles.haas_bg;
  }
  if (constructorId === 'williams') {
    return styles.williams_bg;
  }
  return styles.williams_bg;
};

const getConstructorStyleById = (constructorId: string) => {
  if (constructorId === 'red_bull') {
    return styles.red_bull_racing;
  }
  if (constructorId === 'mercedes') {
    return styles.mercedes;
  }
  if (constructorId === 'ferrari') {
    return styles.ferrari;
  }
  if (constructorId === 'mclaren') {
    return styles.mclaren;
  }
  if (constructorId === 'aston_martin') {
    return styles.aston_martin;
  }
  if (constructorId === 'alpine') {
    return styles.alpine;
  }
  if (constructorId === 'alphatauri') {
    return styles.alpha_tauri;
  }
  if (constructorId === 'alfa') {
    return styles.alfa;
  }
  if (constructorId === 'haas') {
    return styles.haas;
  }
  if (constructorId === 'williams') {
    return styles.williams;
  }
  return styles.williams;
};

const getDriverNationalityImageByNationality = (nationality: string) => {
  if (nationality === 'Dutch') {
    return 'NL';
  }
  if (nationality === 'Mexican') {
    return 'MX';
  }
  if (nationality === 'Spanish') {
    return 'ES';
  }
  if (nationality === 'British') {
    return 'GB';
  }
  if (nationality === 'Monegasque') {
    return 'MC';
  }
  if (nationality === 'French') {
    return 'FR';
  }
  if (nationality === 'Canadian') {
    return 'CA';
  }
  if (nationality === 'Australian') {
    return 'AU';
  }
  if (nationality === 'Thai') {
    return 'TH';
  }
  if (nationality === 'German') {
    return 'DE';
  }
  if (nationality === 'Finnish') {
    return 'FI';
  }
  if (nationality === 'Chinese') {
    return 'CN';
  }
  if (nationality === 'Japanese') {
    return 'JP';
  }
  if (nationality === 'Danish') {
    return 'DK';
  }
  if (nationality === 'American') {
    return 'US';
  }
  if (nationality === 'New Zealander') {
    return 'NZ';
  }
};

const styles = StyleSheet.create({
  viewContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  sectionDivisor: {
    width: '100%',
    height: 10,
  },
  driverPermanentNumber: {
    fontSize: 20,
    fontFamily: 'Formula1-Display-Bold',
    color: '#fff',
  },
  driverHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    marginLeft: 20,
  },
  circlePermanentNumber: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    marginRight: 20,
  },
  driverName: {
    fontSize: 20,
    fontFamily: 'Formula1-Display-Regular',
  },
  constructorName: {
    fontSize: 16,
    color: '#6A6C6D',
  },
  driverFamilyName: {
    fontSize: 20,
    fontFamily: 'Formula1-Display-Bold',
  },
  verticalSectionDivisor: {
    width: 4,
    height: 50,
    marginRight: 10,
    borderRadius: 4,
  },
  driverImage: {
    width: 180,
    height: 180,
  },
  driverNameBlock: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  red_bull_racing_bg: {
    backgroundColor: '#0600ef',
  },
  mercedes_bg: {
    backgroundColor: '#00d2be',
  },
  ferrari_bg: {
    backgroundColor: '#dc0000',
  },
  mclaren_bg: {
    backgroundColor: '#ff8700',
  },
  aston_martin_bg: {
    backgroundColor: '#006f62',
  },
  alpine_bg: {
    backgroundColor: '#0090ff',
  },
  alpha_tauri_bg: {
    backgroundColor: '#2b4562',
  },
  alfa_bg: {
    backgroundColor: '#900000',
  },
  haas_bg: {
    backgroundColor: '#787878',
  },
  williams_bg: {
    backgroundColor: '#005aff',
  },
  red_bull_racing: {
    color: '#0600ef',
  },
  mercedes: {
    color: '#00d2be',
  },
  ferrari: {
    color: '#dc0000',
  },
  mclaren: {
    color: '#ff8700',
  },
  aston_martin: {
    color: '#006f62',
  },
  alpine: {
    color: '#0090ff',
  },
  alpha_tauri: {
    color: '#2b4562',
  },
  alfa: {
    color: '#900000',
  },
  haas: {
    color: '#787878',
  },
  williams: {
    color: '#005aff',
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    padding: 10,
  },
  sectionTitle: {
    fontSize: 24,
    fontFamily: 'Formula1-Display-Bold',
    color: '#6A6C6D',
    left: 20,
  },
  seasonDetails: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  positionNumber: {
    fontSize: 40,
    right: 50,
    fontFamily: 'Formula1-Display-Bold',
  },
  driverPoints: {
    fontSize: 20,
    fontFamily: 'Formula1-Display-Bold',
  },
  constructorCarImage: {
    width: 400,
    height: 80,
    left: 15,
  },
  countryFlag: {
    width: 70,
    height: 40,
    marginRight: 10,
  },
  dateText: {
    fontSize: 18,
    fontFamily: 'Formula1-Display-Regular',
  },
});
