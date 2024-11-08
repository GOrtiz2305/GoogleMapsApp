import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

function App(): React.JSX.Element {
  const [latitude, setLatitude] = useState(48.86948);
  const [longitude, setLongitude] = useState(2.78137);
  const [region, setRegion] = useState({
    latitude: 48.86948,
    longitude: 2.78137,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const newLocation = () => {
    setRegion({
      ...region,
      latitude: latitude,
      longitude: longitude,
    });
  };

  return (
    <View>
      <MapView style={styles.map} region={region}>
        <Marker coordinate={{ latitude: latitude, longitude: longitude }} />
      </MapView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={latitude.toString()}
          onChangeText={(text) => {
            // Permite sólo números, punto y el signo negativo al principio
            const formattedText = text.replace(/[^0-9.-]/g, '');
            setLatitude(parseFloat(formattedText));
          }}
          placeholder="Latitud"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          value={longitude.toString()}
          onChangeText={(text) => {
            const formattedText = text.replace(/[^0-9.-]/g, '');
            setLongitude(parseFloat(formattedText));
          }}
          placeholder="Longitud"
          keyboardType="numeric"
        />
        <Button title="Buscar" onPress={newLocation} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '90%',
  },
  inputContainer: {
    padding: 10,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    width: '40%',
    marginRight: 5,
  },
});

export default App;
