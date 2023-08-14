import React, {Component} from 'react';
import {ConstructorStandingItem} from './ConstructorStandings';
import {Image, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {
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
} from '../Resources';

interface ConstructorRowProps {
  readonly onPress: () => void;
  readonly constructorI: ConstructorStandingItem;
}

export default class ConstructorRow extends Component<ConstructorRowProps> {
  render() {
    return (
      <TouchableHighlight onPress={this.props.onPress}>
        <View style={styles.constructorCard}>
          <Image
            style={styles.constructorCar}
            source={getConstructorCarById(
              this.props.constructorI.Constructor.constructorId,
            )}
          />
          <Text style={styles.positionNumber}>
            {this.props.constructorI.position}
          </Text>
          <View style={styles.constructorNameView}>
            <Text
              style={[
                styles.constructorName,
                getConstructorStyleById(
                  this.props.constructorI.Constructor.constructorId,
                ),
              ]}>
              {this.props.constructorI.Constructor.name}
            </Text>
            <Text
              style={[
                styles.constructorName,
                styles.abs,
                {textShadowOffset: {width: -2, height: -2}},
                getConstructorStyleById(
                  this.props.constructorI.Constructor.constructorId,
                ),
              ]}>
              {this.props.constructorI.Constructor.name}
            </Text>
            <Text
              style={[
                styles.constructorName,
                styles.abs,
                {textShadowOffset: {width: -2, height: -2}},
                getConstructorStyleById(
                  this.props.constructorI.Constructor.constructorId,
                ),
              ]}>
              {this.props.constructorI.Constructor.name}
            </Text>
            <Text
              style={[
                styles.constructorName,
                styles.abs,
                {textShadowOffset: {width: -2, height: -2}},
                getConstructorStyleById(
                  this.props.constructorI.Constructor.constructorId,
                ),
              ]}>
              {this.props.constructorI.Constructor.name}
            </Text>
            <Text style={styles.pointsText}>
              {this.props.constructorI.points}
            </Text>
          </View>
          <Image
            style={styles.costructorBackground}
            source={getConstructorLogoById(
              this.props.constructorI.Constructor.constructorId,
            )}
          />
        </View>
      </TouchableHighlight>
    );
  }
}

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

const styles = StyleSheet.create({
  constructorCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    padding: 16,
    marginBottom: 4,
    justifyContent: 'space-between',
    height: 65,
  },
  constructorNameView: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  constructorName: {
    flex: 1,
    marginLeft: 16,
    fontFamily: 'Formula1-Display-Bold',
    fontSize: 20,
    textShadowColor: 'white',
    textShadowRadius: 1,
    textShadowOffset: {
      width: 2,
      height: 2,
    },
  },
  positionNumber: {
    fontSize: 20,
    fontFamily: 'Formula1-Display-Bold',
  },
  constructorCar: {
    width: 260,
    height: 60,
    position: 'absolute',
    left: 28,
    opacity: 0.3,
  },
  pointsText: {
    fontSize: 16,
    fontFamily: 'Formula1-Display-Bold',
    marginRight: 150,
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
  costructorBackground: {
    flex: 1,
    width: 120,
    height: 65,
    position: 'absolute',
    right: 10,
  },
  abs: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
