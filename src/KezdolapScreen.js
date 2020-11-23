import { Button, SafeAreaView, ScrollView, View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import React, { Component } from "react";

export default class KezdolapScreen extends Component {
  static navigationOptions = {
    title: 'Mozaik Kávézó - Kezdőlap',
  };
  state = {
    titleText: "Bemutatkozás",
    bodyText: "A Mozaik Specialty Coffee Bár 2020-ban nyitotta meg kapuit Pilisvörösvár szívében. Iflinger Zsolt vagyok, a tulajdonos. Az elmúlt években nagy álmom volt, hogy szülővárosomban egy specialty kávézót nyithassak, és bebizonyíthassam, hogy egy kisebb városban is megállja a helyét egy ilyesfajta, különleges kávézó. Ezen kis helyen lehetőségük van megismerkedni különleges Warda kávékkal és Zhao Zhou teákkal, de friss, házi limonádéval és finom ételekkel is szolgálunk. Fontosnak tartjuk, hogy bevonjuk a helyi termelőket is, ezért több termékünk a közeli városokból származik. Tematikus eseményeink alkalmával a hazai gasztronómia képviselőivel is találkozhatnak, például a Gentry Coffee-val, az Artizánnal, a Badass Coffee & Donuttal és az Igaziolivával. Nézzenek szét a képek között, és ha erre járnak, térjenek be hozzám egy frissitő italra!",
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <SafeAreaView>
        <Button
          title="Termékek"
          color="darkblue"
          onPress={() => navigate('Mozaik Kávézó - Termékek', { name: 'Termekek' })}
        />
        <Button
          title="Galéria"
          color="darkblue"
          onPress={() => navigate('Mozaik Kávézó - Galéria', { name: 'Galeria' })}
        />
        <Button
          title="Kapcsolat"
          color="darkblue"
          onPress={() => navigate('Mozaik Kávézó - Kapcsolat', { name: 'Kapcsolat' })}
        />
        <ScrollView>
          <ImageBackground source={require('./kepek/hatter2.PNG')} style={styles.hatter} >
            <View style={styles.container}>
                <Text style={styles.titleText}>
                  {this.state.titleText}
                </Text>
                <Text style={styles.bodyText}>
                  {this.state.bodyText}
                </Text>
                
            </View>
            <Image
            style={styles.kep2}
            source={require('./kepek/1b.PNG')}
            />
            <Image
            style={styles.kep1}
            source={require('./kepek/1a.jpg')}
            />
          </ImageBackground>
        </ScrollView>
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
    paddingTop: 10,
    color: 'black',
    textAlign: 'center',
  },
  bodyText: {
    fontSize: 18,
    paddingTop: 10,
    textAlign: 'justify',
  },
  kep1: {
    width: "100%",
    height: 550,
  },
  kep2: {
    width: "100%",
    height: 250,
  },
  hatter: {
    width: "100%",
    height: "100%",
  },
});


