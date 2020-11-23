import { Text, ScrollView, Image, StyleSheet, View, ImageBackground } from 'react-native';
import React, { Component } from "react";

export default class GaleriaScreen extends Component {
  static navigationOptions = {
    title: 'Kezdőlap',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <ImageBackground source={require('./kepek/hatter2.PNG')} style={styles.hatter} >
      <ScrollView>
        <View style={styles.container}>
          <Image
          style={styles.kep}
          source={require('./kepek/2.jpg')}
          />
        </View>
        <View style={styles.container}>
          <Image
          style={styles.kep}
          source={require('./kepek/3.jpg')}
          />
        </View>
        <View style={styles.container}>
          <Image
          style={styles.kep}
          source={require('./kepek/4.jpg')}
          />
        </View>
        <View style={styles.container}>
          <Image
          style={styles.kep}
          source={require('./kepek/5.jpg')}
          />
        </View>
        <View style={styles.container}>
          <Image
          style={styles.kep}
          source={require('./kepek/5b.jpg')}
          />
        </View>
        <View style={styles.container}>
          <Image
          style={styles.kep}
          source={require('./kepek/6.jpg')}
          />
        </View>
        <View style={styles.container}>
          <Image
          style={styles.kep}
          source={require('./kepek/7.jpg')}
          />
        </View>
        <View style={styles.container}>
          <Image
          style={styles.kep}
          source={require('./kepek/8.jpg')}
          />
        </View>
        <View style={styles.container}>
          <Image
          style={styles.kep}
          source={require('./kepek/9.jpg')}
          />
        </View>
        <View style={styles.container}>
          <Image
          style={styles.kep}
          source={require('./kepek/10.jpg')}
          />
        </View>
        <View style={styles.container}>
          <Image
          style={styles.kep}
          source={require('./kepek/11.jpg')}
          />
        </View>
        <View style={styles.container}>
          <Image
          style={styles.kep}
          source={require('./kepek/12.jpg')}
          />
        </View>
        <View style={styles.container}>
          <Image
          style={styles.kep}
          source={require('./kepek/13.jpg')}
          />
        </View>
        <View style={styles.container}>
          <Image
          style={styles.kep}
          source={require('./kepek/14.jpg')}
          />
        </View>
      </ScrollView>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  kep: {
    width: "100%",
    height: 300,
    padding: 5,
  },
  container: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
  },
  hatter: {
    width: "100%",
    height: "100%",
  },
});
