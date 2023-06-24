import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { routeComponent } from "./helpers/useRoute";
import AppLoading from "expo-app-loading";
import { useState } from "react";

export default function App() {
  const [isReady, setIsReady] = useState(false);

  const loadApplication = async () => {
    await useFonts({
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

  const isAuth = true;

  const routing = routeComponent(isAuth);
  return <NavigationContainer>{routing}</NavigationContainer>;
}
