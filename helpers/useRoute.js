import React from "react";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import RegistrationScreen from "../Screens/auth/RegistrationScreen";
import LoginScreen from "../Screens/auth/LoginScreen";
import { PostsScreen } from "../Screens/main/PostsScreen";
import { CreatePostsScreen } from "../Screens/main/CreatePostsScreen";
import { ProfileScreen } from "../Screens/main/ProfileScreen";
import { View, TouchableOpacity } from "react-native";

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
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
    );
  }

  return (
    <MainTab.Navigator
      screenOptions={{
        tabBarStyle: {
          alignItems: "center",
          paddingHorizontal: 80,
          paddingTop: 20,
          height: 120,
        },
      }}
    >
      <MainTab.Screen
        name="Post"
        component={PostsScreen}
        options={{
          title: "Публікації",
          headerTitleStyle: {
            fontWeight: 500,
            fontSize: 17,
            lineHeight: 22,
            letterSpacing: -0.408,
          },
          headerRight: () => {
            return (
              <TouchableOpacity
                style={{
                  marginRight: 18,
                }}
              >
                <Ionicons name="log-out-outline" size={24} color="black" />
              </TouchableOpacity>
            );
          },
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  backgroundColor: focused ? "#FF6C00" : "transparent",
                  borderRadius: 20,
                  paddingLeft: 28,
                  paddingRight: 28,
                  paddingBottom: 13,
                  paddingTop: 13,
                }}
              >
                <Feather
                  name="grid"
                  size={24}
                  color={focused ? "white" : "#212121"}
                />
              </View>
            );
          },
        }}
      />

      <MainTab.Screen
        name="Create"
        component={CreatePostsScreen}
        options={{
          title: "Створити публікацію",
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  backgroundColor: focused ? "#FF6C00" : "transparent",
                  borderRadius: 20,
                  paddingLeft: 28,
                  paddingRight: 28,
                  paddingBottom: 13,
                  paddingTop: 13,
                }}
              >
                <Feather
                  name="plus"
                  size={24}
                  color={focused ? "white" : "#212121"}
                />
              </View>
            );
          },
        }}
      />
      <MainTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  backgroundColor: focused ? "#FF6C00" : "transparent",
                  borderRadius: 20,
                  paddingLeft: 28,
                  paddingRight: 28,
                  paddingBottom: 13,
                  paddingTop: 13,
                }}
              >
                <Feather
                  name="user"
                  size={24}
                  color={focused ? "white" : "#212121"}
                />
              </View>
            );
          },
        }}
      />
    </MainTab.Navigator>
  );
};
