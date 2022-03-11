import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Inicio from "./screens/Inicio";
import Vacinas from "./screens/Vacinas";
import Detalhe from "./screens/Detalhe";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="Vacinas" component={Vacinas} />
        <Stack.Screen name="Detalhe" component={Detalhe} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Routes;
