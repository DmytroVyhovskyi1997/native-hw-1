import React from "react";
import { moduleName } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { DefaultScreen } from "../nestedScreens/DefaultScreen";
import { CommentScreen } from '../nestedScreens/CommentScreen';
import { MapScreen } from '../nestedScreens/MapScreen';

const NestedScreens = createStackNavigator();

export const PostsScreen = () => {
  return (
    <NestedScreens.Navigator>
      <NestedScreens.Screen
        name="DefaultScreen"
        component={DefaultScreen}
        options={{ headerShown: false }}
      />
      <NestedScreens.Screen
        name="CommentScreen"
        component={CommentScreen}
        options={{ headerShown: false }}
      />
      <NestedScreens.Screen
        name="MapScreen"
        component={MapScreen}
        options={{ headerShown: false }}
      />
    </NestedScreens.Navigator>
  );
  
};
