import React, {Component} from 'react';
import {ConstructorStandingItem} from './ConstructorStandings';
import {View, Text, StyleSheet, Animated} from 'react-native';
import {
  RED_BULL_CAR,
  MERCEDES_CAR,
  FERRARI_CAR,
  MCLAREN_CAR,
  ALPINE_CAR,
  ALFA_ROMEO_CAR,
  HAAS_CAR,
  WILLIAMS_CAR,
  ASTON_MARTIN_CAR,
  ALPHATAURI_CAR,
  RED_BULL,
  MERCEDES,
  FERRARI,
  MCLAREN,
  ALPINE,
  ALFA_ROMEO,
  HAAS,
  WILLIAMS,
  ASTON_MARTIN,
  ALPHATAURI,
} from '../Resources';

interface ConstructorProps {
  readonly navigation: any;
  readonly route: any;
}

interface ConstructorState {
  readonly constructor: ConstructorStandingItem;
}

export default class ConstructorDetails extends Component<
  ConstructorProps,
  ConstructorState
> {
  carImageScale: Animated.Value;
  flagImageOpacity: Animated.Value;
  constructorImageScale: Animated.Value;
  constructorImageOpacity: Animated.Value;

  constructor(props: ConstructorProps) {
    super(props);
    this.state = {constructor: this.props.route.params.constructor};

    this.carImageScale = new Animated.Value(0.5);
    this.flagImageOpacity = new Animated.Value(0);
    this.constructorImageScale = new Animated.Value(0.5);
    this.constructorImageOpacity = new Animated.Value(0);

    props.navigation.setOptions({
      title: `${this.state.constructor.Constructor.name}`.toLocaleUpperCase(),
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
      Animated.timing(this.carImageScale, {
        toValue: 1,
        duration: 4000,
        useNativeDriver: true,
      }),
      Animated.timing(this.flagImageOpacity, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(this.constructorImageScale, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(this.constructorImageOpacity, {
        toValue: 1,
        duration: 4000,
        useNativeDriver: true,
      }),
    ]).start();
    const constructor = this.state.constructor;
    return (
      <View style={styles.viewContainer}>
        <View style={styles.constructorHeader}>
          <View style={styles.constructorHeaderLogo}>
            <Animated.Image
              style={[
                styles.constructorLogo,
                {
                  opacity: this.constructorImageOpacity,
                  transform: [{scale: this.constructorImageScale}],
                },
              ]}
              source={getConstructorLogoById(
                constructor.Constructor.constructorId,
              )}
            />
          </View>
          <View
            style={[
              styles.verticalSectionDivisor,
              getConstructorBackgroundStyleById(
                constructor.Constructor.constructorId,
              ),
            ]}
          />
          <View style={styles.constructorHeaderName}>
            <Text style={styles.constructorName}>
              {constructor.Constructor.name}
            </Text>
          </View>
          <View style={styles.flagImageBlock}>
            <Animated.Image
              style={[styles.flagImage, {opacity: this.flagImageOpacity}]}
              source={{
                uri:
                  'https://flagsapi.com/' +
                  getFlagImageByNacionality(
                    constructor.Constructor.nationality,
                  ) +
                  '/flat/64.png',
              }}
            />
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>2023 Season</Text>
          <View style={styles.seasonDetails}>
            <Text style={styles.positionNumber}> {constructor.position}º</Text>
            <Text style={styles.driverPoints}> {constructor.points} PTS</Text>
          </View>
          <Animated.Image
            style={[
              styles.constructorCarImage,
              {transform: [{scale: this.carImageScale}]},
            ]}
            source={getConstructorCarById(
              constructor.Constructor.constructorId,
            )}
          />
        </View>
      </View>
    );
  }
}

const getFlagImageByNacionality = (nationality: string) => {
  if (nationality === 'British') {
    return 'GB';
  }
  if (nationality === 'German') {
    return 'DE';
  }
  if (nationality === 'Austrian') {
    return 'AT';
  }
  if (nationality === 'Italian') {
    return 'IT';
  }
  if (nationality === 'French') {
    return 'FR';
  }
  if (nationality === 'American') {
    return 'US';
  }
  if (nationality === 'Swiss') {
    return 'CH';
  }
  return null;
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

const getConstructorLogoById = (constructorId: string) => {
  if (constructorId === 'red_bull') {
    return RED_BULL;
  }
  if (constructorId === 'mercedes') {
    return MERCEDES;
  }
  if (constructorId === 'ferrari') {
    return FERRARI;
  }
  if (constructorId === 'mclaren') {
    return MCLAREN;
  }
  if (constructorId === 'alpine') {
    return ALPINE;
  }
  if (constructorId === 'alfa') {
    return ALFA_ROMEO;
  }
  if (constructorId === 'haas') {
    return HAAS;
  }
  if (constructorId === 'williams') {
    return WILLIAMS;
  }
  if (constructorId === 'aston_martin') {
    return ASTON_MARTIN;
  }
  if (constructorId === 'alphatauri') {
    return ALPHATAURI;
  }
};

const styles = StyleSheet.create({
  viewContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingTop: 10,
    paddingBottom: 10,
  },
  constructorHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  constructorHeaderLogo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  constructorHeaderName: {
    flex: 2,
  },
  constructorLogo: {
    width: 100,
    height: 100,
  },
  constructorName: {
    fontSize: 18,
    fontFamily: 'Formula1-Display-Bold',
  },
  flagImageBlock: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  flagImage: {
    width: 80,
    height: 50,
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
  verticalSectionDivisor: {
    width: 4,
    height: 50,
    marginRight: 10,
    borderRadius: 4,
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
});
