import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker }  from 'react-native-maps';
               
                
export default class TextScreen extends Component {
  static navigationOptions = {
    title: 'Kapcsolat',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
          <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: 47.618700,
            longitude: 18.906000,
            latitudeDelta: 0.006,
            longitudeDelta: 0.006,
          }}>
            <Marker 
              title="Mozaik Specialty Coffee Bar"
              coordinate={{
                latitude: 47.618700, 
                longitude: 18.906000,
              }}
              anchor={{ x: 0.8, y: 0.6 }} />
          </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
   justifyContent: 'flex-end',
   alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  }
});