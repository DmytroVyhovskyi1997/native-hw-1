import  { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";

import { routeComponent } from "../helpers/useRoute";

import { authStateChangeUser } from "../redux/auth/authOperation";

export const Main = () => {
  const { stateChange } = useSelector((state) => state.auth);
  console.log({ stateChange });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authStateChangeUser());
  }, []);

 
  const routing = routeComponent(stateChange);

    return (<NavigationContainer>{routing}</NavigationContainer>);
};
