import { createStackNavigator } from "@react-navigation/stack";
import {useRoute} from '../helpers/useRoute'
const Stack = createStackNavigator();

export function Home() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={useRoute} />
    </Stack.Navigator>
  );
}

styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
