import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageSourcePropType,
  Alert,
  TouchableOpacity,
} from 'react-native';

import * as Resources from './Resources';
import {Picker} from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';

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

    this.loadStoredData();

    props.navigation.setOptions({
      headerShown: true,
    });
  }

  async loadStoredData() {
    try {
      const selectedDriver1 = await AsyncStorage.getItem('selectedDriver1');
      const selectedDriver2 = await AsyncStorage.getItem('selectedDriver2');
      const selectedConstructor = await AsyncStorage.getItem(
        'selectedConstructor',
      );

      if (selectedDriver1 !== null) {
        this.setState({selectedDriver1});
      }
      if (selectedDriver2 !== null) {
        this.setState({selectedDriver2});
      }
      if (selectedConstructor !== null) {
        this.setState({selectedConstructor});
      }
    } catch (error) {
      console.error('Error al cargar datos desde AsyncStorage:', error);
    }
  }

  handleDriver1Change = (itemValue: string | null) => {
    if (itemValue !== null) {
      // Evitar seleccionar el mismo piloto en Driver1 y Driver2
      if (itemValue !== this.state.selectedDriver2) {
        this.setState({selectedDriver1: itemValue});
      } else {
        Alert.alert('Warning!', 'This driver has been already chosen');
      }
    }
  };

  handleDriver2Change = (itemValue: string | null) => {
    if (itemValue !== null) {
      // Evitar seleccionar el mismo piloto en Driver2 y Driver1
      if (itemValue !== this.state.selectedDriver1) {
        this.setState({selectedDriver2: itemValue});
      } else {
        Alert.alert('Warning!', 'This driver has been already chosen');
      }
    }
  };

  storeData = async () => {
    try {
      if (this.state.selectedDriver1) {
        await AsyncStorage.setItem(
          'selectedDriver1',
          this.state.selectedDriver1,
        );
      }
      if (this.state.selectedDriver2) {
        await AsyncStorage.setItem(
          'selectedDriver2',
          this.state.selectedDriver2,
        );
      }
      if (this.state.selectedConstructor) {
        await AsyncStorage.setItem(
          'selectedConstructor',
          this.state.selectedConstructor,
        );
      }
      Toast.show({
        type: 'success',
        text1: 'Dream Team saved 🏁',
        position: 'bottom',
      });
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'An error has occurred while saving your Dream Team',
      });
    }
  };

  clearData = async () => {
    try {
      await AsyncStorage.removeItem('selectedDriver1');
      await AsyncStorage.removeItem('selectedDriver2');
      await AsyncStorage.removeItem('selectedConstructor');
      this.setState({
        selectedDriver1: null,
        selectedDriver2: null,
        selectedConstructor: null,
      });
      Toast.show({
        type: 'success',
        text1: 'Dream Team cleared',
        position: 'bottom',
      });
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'An error has occurred while clearing your Dream Team',
      });
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
      'ZHOU_GUANYU',
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
              style={styles.pickerDriver}
              selectedValue={this.state.selectedDriver1}
              onValueChange={this.handleDriver1Change}
              numberOfLines={2}
              itemStyle={styles.pickerDriverItem}>
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
                source={
                  (Resources as Record<string, ImageSourcePropType>)[
                    this.state.selectedDriver1
                  ]
                }
                style={styles.image}
              />
            )}
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Driver 2</Text>
            <Picker
              style={styles.pickerDriver}
              selectedValue={this.state.selectedDriver2}
              onValueChange={this.handleDriver2Change}
              numberOfLines={2}
              itemStyle={styles.pickerDriverItem}>
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
                source={
                  (Resources as Record<string, ImageSourcePropType>)[
                    this.state.selectedDriver2
                  ]
                }
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
              style={styles.pickerConstructor}
              selectedValue={this.state.selectedConstructor}
              onValueChange={(itemValue: any) =>
                this.setState({selectedConstructor: itemValue})
              }
              itemStyle={styles.pickerConstructorItem}>
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
                source={
                  (Resources as Record<string, ImageSourcePropType>)[
                    this.state.selectedConstructor
                  ]
                }
                style={styles.image}
              />
            )}
          </View>
        </View>

        {/* Botón de guardar */}
        <TouchableOpacity style={styles.saveButton} onPress={this.storeData}>
          <Text style={styles.saveButtonText}>Save Dream Team</Text>
        </TouchableOpacity>
        {/* Botón de borrar */}
        <TouchableOpacity style={styles.deleteButton} onPress={this.clearData}>
          <Text style={styles.saveButtonText}>Clear Dream Team</Text>
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
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontFamily: 'Formula1-Display-Bold',
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
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    fontFamily: 'Formula1-Display-Regular',
    marginBottom: 8,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  pickerDriver: {
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    height: 100,
    width: '90%',
  },
  pickerConstructor: {
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    height: 150,
    width: '80%',
  },
  pickerConstructorItem: {
    fontSize: 20,
    height: 150,
    fontFamily: 'Formula1-Display-Bold',
  },
  pickerDriverItem: {
    fontSize: 14,
    fontFamily: 'Formula1-Display-Regular',
    height: 100,
  },
  saveButton: {
    backgroundColor: '#007BFF',
    borderRadius: 8,
    padding: 10,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Formula1-Display-Bold',
  },
  deleteButton: {
    backgroundColor: '#ff232b',
    borderRadius: 8,
    padding: 10,
    marginTop: 20,
  },
});
