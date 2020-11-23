import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import KezdolapScreen from "./src/KezdolapScreen";
import TermekekScreen from "./src/TermekekScreen";
import KapcsolatScreen from "./src/KapcsolatScreen";
import GaleriaScreen from "./src/GaleriaScreen";
import Map from "./src/Map";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer> 
      <Stack.Navigator>
        <>
          <Stack.Screen name="Mozaik Kávézó - Kezdőlap" component={KezdolapScreen} />
          <Stack.Screen name="Mozaik Kávézó - Termékek" component={TermekekScreen} />
          <Stack.Screen name="Mozaik Kávézó - Kapcsolat" component={KapcsolatScreen} />
          <Stack.Screen name="Mozaik Kávézó - Galéria" component={GaleriaScreen} />
          <Stack.Screen name="Map" component={Map} />
        </>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

