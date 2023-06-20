
import * as Font from "expo-font";

import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { useRoute } from './helpers/useRoute'
import AppLoading from "expo-app-loading";
import { useState } from "react";


export default function App() {
  const [isReady, setIsReady] = useState(false);
  
   const loadApplication = async () => {
     await Font.loadAsync({
       "BebasNeue-Regular": require("./assets/fonts/BebasNeue-Regular.ttf"),
     });
     setIsReady(true);
   };

   if (!isReady) {
     return (
       <AppLoading
         startAsync={loadApplication}
         onFinish={() => setIsReady(true)}
         onError={console.warn}
       />
     );
   }
  
 const isAuth = false; 

 const routing = useRoute(isAuth);
  return (
    <NavigationContainer>
    {routing}
    </NavigationContainer>
  );
}



