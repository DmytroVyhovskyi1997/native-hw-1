import React from "react";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import { DefaultScreen } from "../nestedScreens/DefaultScreen";
import { CommentScreen } from "../nestedScreens/CommentScreen";
import { MapScreen } from "../nestedScreens/MapScreen";

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
        options={({ navigation }) => ({
          headerTitle: "Коментарі",
          headerLeft: () => (
            <TouchableOpacity
              style={{
                marginLeft: 18,
              }}
              onPress={() => navigation.goBack()}
            >
              <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: "#fff",
          },
        })}
      />
      <NestedScreens.Screen
        name="MapScreen"
        component={MapScreen}
        options={{ headerShown: false }}
      />
    </NestedScreens.Navigator>
  );
};
