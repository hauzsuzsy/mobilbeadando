import { Text, SafeAreaView, ScrollView, View, StyleSheet, Button, ImageBackground } from 'react-native';
import React, { Component } from "react";

export default class KapcsolatScreen extends Component {
  static navigationOptions = {
    title: 'Kezdőlap',
  };
  state = {
    titleText: "Nyitvatartás",
    bodyText: "H-P: 7:00-17:00                                                                                                    Sz:   8:30-16:00                                                                                                   V:     zárva",
    titleText2: "Elérhetőség",
    bodyText2: "Telefon:   +36(20) 377 7351                                                                                        E-mail:     zsiflinger@gmail.com                                                                                   Közösségi média:                                                                                                   https://www.facebook.com/mozaikspecialtycoffee/                                                                    https://www.instagram.com/mozaikspecialtycoffe",
    titleText3: "Helyszín",
    bodyText3: "2085, Pilisvörösvár, Iskola u. 5",
  };
  
  render() {
    const {navigate} = this.props.navigation;
    return (
      <SafeAreaView>
      <ImageBackground source={require('./kepek/hatter2.PNG')} style={styles.hatter} >
        <ScrollView>
          <View style={styles.container}>
              <Text style={styles.titleText}>
                {this.state.titleText}
              </Text>
              <Text style={styles.bodyText}>
                {this.state.bodyText}
              </Text>
              <Text style={styles.titleText2}>
                {this.state.titleText2}
              </Text>
              <Text style={styles.bodyText2}>
                {this.state.bodyText2}
              </Text>
              <Text style={styles.titleText3}>
                {this.state.titleText3}
              </Text>
              <Text style={styles.bodyText3}>
                {this.state.bodyText3}
              </Text>
              <Button
                title="Megnézem térképen"
                color="darkblue"
                onPress={() => navigate('Map', { name: 'Map' })}
              />
          </View>
        </ScrollView>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  titleText2: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 25,
    color: 'black',
  },
  titleText3: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 25,
    color: 'black',
  },
  bodyText: {
    fontSize: 17,
    paddingTop: 10,
  },
  bodyText2: {
    fontSize: 17,
    paddingTop: 10,
  },
  bodyText3: {
    fontSize: 17,
    paddingTop: 10,
  },
  hatter: {
    width: "100%",
    height: "100%",
  },
});