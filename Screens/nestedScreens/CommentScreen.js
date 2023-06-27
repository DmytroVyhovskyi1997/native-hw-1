import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const CommentScreen = ({ route }) => {
  return (
    <View style={styles.container}>
      <Text>CommentScreen</Text>
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
