import { useFonts } from "expo-font";

import AppLoading from "expo-app-loading";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Main } from "./component/Main";

export default function App() {
  const [isReady, setIsReady] = useState(false);

  const loadApplication = async () => {
    await useFonts({
      "BebasNeue-Regular": require("./assets/fonts/BebasNeue-Regular.ttf"),
    });
    setIsReady(true);
  };

  useEffect(() => {
    loadApplication();
  }, []);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadApplication}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
