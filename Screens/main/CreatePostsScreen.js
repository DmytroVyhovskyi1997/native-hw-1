import { View, Text, StyleSheet } from "react-native";

export const CreatePostsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>CreatePostsScreen</Text>
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
