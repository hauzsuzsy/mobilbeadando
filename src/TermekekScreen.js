import { Text, ImageBackground, StyleSheet, View, SafeAreaView, SectionList } from 'react-native';
import React, { Component } from "react";
import Constants from "expo-constants";

const DATA = [
  {
    title: "Kávék",
    data: ["Americano", "Filter kávé", "batch brew", "hand brew", "Espresso", "Dupla Espresso", "Cortado", "Flat white", "Cappuccino", "Latte"]
  },
  {
    title: "Teák",
    data: ["Chai latte", "Matcha"]
  },
  {
    title: "Egyéb italok",
    data: ["Forró csokoládé", "Limonádé", "Üdítő", "Víz"]
  },
  {
    title: "Kézműves pékáruk, édességek",
    data: ["Narancs tarte", "Citrom tarte", "Olíviás ciabatta szendvics", "Sonkás-tarjás szendvics", "Vajas croissant", "Nutellás croissant", "Málnás-fehércsokis croissant", "Kakaós csiga", "Kókusztejes sajttorta", "Zabkása", "Egyéb szezonális ételek"]
  }
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default class TermekekScreen extends Component {
  static navigationOptions = {
    title: 'Kezdőlap',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <ImageBackground source={require('./kepek/hatter2.PNG')} style={styles.hatter} >
        <SafeAreaView style={styles.container}>
          <SectionList
            sections={DATA}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => <Item title={item} />}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={styles.header}>{title}</Text>
            )}
          />
        </SafeAreaView>
      </ImageBackground>
 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 40,
  },
  item: {
    backgroundColor: "#00b8e6",
    padding: 5,
    marginVertical: 5
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold',
    padding: 15,
    backgroundColor: "#404040",
    color: "white",
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: "white",
  },
  
  hatter: {
    width: "100%",
    height: "100%",
  },
});
