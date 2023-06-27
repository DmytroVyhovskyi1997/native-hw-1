import React from "react";
import { View, StyleSheet } from "react-native";
import { ProfileScreen } from "../main/ProfileScreen";

export const MapScreen = () => {
  return (
    <View style={styles.container}>
     <ProfileScreen/>
    </View>
  );
};

styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
