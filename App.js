
import { StyleSheet, View } from 'react-native';
import RegistrationScreen from "./Screens/auth/RegistrationScreen";
import  LoginScreen  from "./Screens/auth/LoginScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const AuthStack = createStackNavigator();
const MainStack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        <AuthStack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <AuthStack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}



