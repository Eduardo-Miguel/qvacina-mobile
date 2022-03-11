import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import Inicio from "./screens/Inicio";
import Vacinas from "./screens/Vacinas";
import Detalhe from "./screens/Detalhe";

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          contentStyle: {
            backgroundColor: "#f0f0f5",
          },
          headerShown: false,
        }}
      >
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="Vacinas" component={Vacinas} />
        <Stack.Screen name="Detalhe" component={Detalhe} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Routes;
