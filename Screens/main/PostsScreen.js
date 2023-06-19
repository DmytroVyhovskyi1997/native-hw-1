import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>PostsScreen</Text>
    </View>
  );
};

styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
