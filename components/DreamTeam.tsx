import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ImageSourcePropType, Alert, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import * as Resources from './Resources';

interface DreamTeamProps {
  readonly navigation: any;
}

interface DreamTeamState {
  selectedDriver1: string | null;
  selectedDriver2: string | null;
  selectedConstructor: string | null;
}

export default class DreamTeam extends Component<
  DreamTeamProps,
  DreamTeamState
> {
  constructor(props: DreamTeamProps) {
    super(props);

    this.state = {
      selectedDriver1: null,
      selectedDriver2: null,
      selectedConstructor: null,
    };

    props.navigation.setOptions({
      headerShown: true,
    });
  }

  handleDriver1Change = (itemValue: string | null) => {
    // Evitar seleccionar el mismo piloto en Driver1 y Driver2
    if (itemValue !== this.state.selectedDriver2) {
      this.setState({ selectedDriver1: itemValue });
    }else {
      Alert.alert('Warning!', 'This driver has been already chosen');
    }
  };

  handleDriver2Change = (itemValue: string | null) => {
    // Evitar seleccionar el mismo piloto en Driver2 y Driver1
    if (itemValue !== this.state.selectedDriver1) {
      this.setState({ selectedDriver2: itemValue });
    }else {
      Alert.alert('Warning!', 'This driver has been already chosen');
    }
  };

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

        {/* Fila conductores */}
        <View style={styles.row}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Driver 1</Text>
            <Picker
              style={styles.picker}
              selectedValue={this.state.selectedDriver1}
              onValueChange={this.handleDriver1Change}
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
            {this.state.selectedDriver1 && (
              <Image
                source={(Resources as Record<string, ImageSourcePropType>)[
                  this.state.selectedDriver1
                ]}
                style={styles.image}
              />
            )}
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Driver 2</Text>
            <Picker
              style={styles.picker}
              selectedValue={this.state.selectedDriver2}
              onValueChange={this.handleDriver2Change}
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
            {this.state.selectedDriver2 && (
              <Image
                source={(Resources as Record<string, ImageSourcePropType>)[
                  this.state.selectedDriver2
                ]}
                style={styles.image}
              />
            )}
          </View>
        </View>

        {/* Fila constructor */}
        <View style={styles.row}>
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

        {/* Botón de guardar */}
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save Dream Team</Text>
        </TouchableOpacity>
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  inputContainer: {
    flex: 1,
    marginRight: 10,
    marginLeft: 10,
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
  },
  saveButton: {
    backgroundColor: '#007BFF',
    borderRadius: 8,
    padding: 10,
    marginTop: 20,
  },
  saveButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
