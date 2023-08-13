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
} from './Resources';

interface ConstructorRowProps {
  readonly onPress: () => void;
  readonly constructorI: ConstructorStandingItem;
}

export default class ConstructorRow extends Component<ConstructorRowProps> {
  render() {
    return (
      <TouchableHighlight onPress={this.props.onPress}>
        <View style={styles.constructorCard}>
          <Text style={styles.positionNumber}>
            {this.props.constructorI.position}
          </Text>
          <Text
            style={[
              styles.constructorName,
              getConstructorStyleById(
                this.props.constructorI.Constructor.constructorId,
              ),
            ]}>
            {this.props.constructorI.Constructor.name}
          </Text>
          <Image
            style={styles.constructorLogo}
            source={getConstructorLogoById(
              this.props.constructorI.Constructor.constructorId,
            )}
          />
          <Text style={styles.pointsText}>
            {this.props.constructorI.points}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
}

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
  if (constructorId === 'aston') {
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
    marginBottom: 2,
    justifyContent: 'space-between',
  },
  constructorName: {
    fontFamily: 'Formula1-Display-Bold',
    fontSize: 20,
  },
  positionNumber: {
    fontSize: 20,
    fontFamily: 'Formula1-Display-Bold',
  },
  constructorLogo: {
    width: 50,
    height: 50,
  },
  pointsText: {
    fontSize: 20,
    fontFamily: 'Formula1-Display-Bold',
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
});
