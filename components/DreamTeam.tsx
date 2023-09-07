import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ImageSourcePropType } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import * as Resources from './Resources';

interface DreamTeamProps {
  readonly navigation: any;
}

interface DreamTeamState {
  selectedDriver: string | null;
  selectedConstructor: string | null;
}

export default class DreamTeam extends Component<
  DreamTeamProps,
  DreamTeamState
> {
  constructor(props: DreamTeamProps) {
    super(props);

    this.state = {
      selectedDriver: null,
      selectedConstructor: null,
    };

    props.navigation.setOptions({
      headerShown: true,
    });
  }

  render() {
    const driverOptions = [
      'ALEXANDER_ALBON',
      'CARLOS_SAINZ',
      'CHARLES_LECLERC',
      'DANIEL_RICCIARDO',
      'ESTEBAN_OCON',
      'FERNANDO_ALONSO',
      'GEORGE_RUSSELL',
      'KEVIN_MAGNUSSEN',
      'LANCE_STROLL',
      'LANDO_NORRIS',
      'LEWIS_HAMILTON',
      'LIAM_LAWSON',
      'LOGAN_SARGEANT',
      'MAX_VERSTAPPEN',
      'NICO_HULKENBERG',
      'NYCK_DE_VRIES',
      'OSCAR_PIASTRI',
      'PIERRE_GASLY',
      'SERGIO_PEREZ',
      'VALTTERI_BOTTAS',
      'YUKI_TSUNODA',
      'ZHOU_GUANYU'
    ];
    
    const constructorOptions = [
      'RED_BULL',
      'MERCEDES',
      'FERRARI',
      'MCLAREN',
      'ALPINE',
      'ALFA_ROMEO',
      'HAAS',
      'WILLIAMS',
      'ASTON_MARTIN',
      'ALPHATAURI',
    ];
    
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Choose your favorites</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Driver</Text>
          <Picker
          style={styles.picker}
            selectedValue={this.state.selectedDriver}
            onValueChange={(itemValue) =>
              this.setState({ selectedDriver: itemValue })
            }
          >
            <Picker.Item label="Select Driver" value={null} />
            {driverOptions.map((driver, index) => (
              <Picker.Item
                key={index}
                label={driver.replace(/_/g, ' ')}
                value={driver}
              />
            ))}
          </Picker>
          {this.state.selectedDriver && (
            <Image
              source={(Resources as Record<string, ImageSourcePropType>)[
                this.state.selectedDriver
              ]}
              style={styles.image}
            />
          )}
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Constructor</Text>
          <Picker
          style={styles.picker}
            selectedValue={this.state.selectedConstructor}
            onValueChange={(itemValue) =>
              this.setState({ selectedConstructor: itemValue })
            }
          >
            <Picker.Item label="Select Constructor" value={null} />
            {constructorOptions.map((constructor, index) => (
              <Picker.Item
                key={index}
                label={constructor.replace(/_/g, ' ')}
                value={constructor}
              />
            ))}
          </Picker>
          {this.state.selectedConstructor && (
            <Image
              source={(Resources as Record<string, ImageSourcePropType>)[
                this.state.selectedConstructor
              ]}
              style={styles.image}
            />
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  picker: {
    backgroundColor: '#e0e0e0', 
    borderRadius: 8, 
    borderWidth: 1, 
    borderColor: '#ccc', 
    paddingHorizontal: 10,
    paddingVertical: 5, 
  }
});
