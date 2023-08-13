import React, {Component} from 'react';
import {DriverStandingItem} from './DriverStandings';
import {Image, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {
  ALEXANDER_ALBON,
  CARLOS_SAINZ,
  CHARLES_LECLERC,
  DANIEL_RICCIARDO,
  ESTEBAN_OCON,
  FERNANDO_ALONSO,
  GEORGE_RUSSELL,
  KEVIN_MAGNUSSEN,
  LANCE_STROLL,
  LANDO_NORRIS,
  LEWIS_HAMILTON,
  LOGAN_SARGEANT,
  MAX_VERSTAPPEN,
  NICO_HULKENBERG,
  NYCK_DE_VRIES,
  OSCAR_PIASTRI,
  PIERRE_GASLY,
  SERGIO_PEREZ,
  VALTTERI_BOTTAS,
  YUKI_TSUNODA,
  ZHOU_GUANYU,
} from './Resources';

interface DriverRowProps {
  readonly onPress: () => void;
  readonly driver: DriverStandingItem;
}

export default class DriverRow extends Component<DriverRowProps> {
  render() {
    return (
      <TouchableHighlight onPress={this.props.onPress}>
        <View style={styles.driverCard}>
          <Text style={styles.positionNumber}>
            {this.props.driver.position}
          </Text>
          <View style={styles.driverNameAndConstructorBlock}>
            <Text style={styles.driverName}>
              {this.props.driver.Driver.givenName}{' '}
              <Text
                style={[
                  styles.driverFamilyName,
                  getConstructorStyleById(
                    this.props.driver.Constructors[0].constructorId,
                  ),
                ]}>
                {this.props.driver.Driver.familyName}
              </Text>
            </Text>
            <Text style={styles.constructorName}>
              {this.props.driver.Constructors[0].name}
            </Text>
          </View>
          <Text
            style={[
              styles.pointsText,
              getConstructorStyleById(
                this.props.driver.Constructors[0].constructorId,
              ),
            ]}>
            {this.props.driver.points}
          </Text>
          <Image
            style={styles.driverImage}
            source={getDriverImageById(this.props.driver.Driver.driverId)}
          />
        </View>
      </TouchableHighlight>
    );
  }
}

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
  return FERNANDO_ALONSO;
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
  driverCard: {
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
  driverNameAndConstructorBlock: {
    flex: 1,
    marginLeft: 16,
  },
  positionNumber: {
    fontSize: 20,
    fontFamily: 'Formula1-Display-Bold',
  },
  driverName: {
    fontSize: 20,
  },
  driverFamilyName: {
    fontFamily: 'Formula1-Display-Bold',
    textTransform: 'uppercase',
  },
  constructorName: {
    fontSize: 12,
    color: '#6A6C6D',
  },
  pointsText: {
    fontSize: 16,
    fontFamily: 'Formula1-Display-Bold',
    right: 50,
  },
  driverImage: {
    width: 70,
    height: 70,
    position: 'absolute',
    right: 5,
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
