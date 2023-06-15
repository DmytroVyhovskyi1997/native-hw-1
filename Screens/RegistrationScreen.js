import React from "react";
import { StyleSheet, Dimensions, ImageBackground, TextInput } from "react-native";

export const RegistrationScreen = () => {
  return (
    <ImageBackground
      source={require("../assets/image/photo-bg.jpg")}
      style={styles.image}
    >
      <TextInput style={styles.input} />
      <TextInput style={styles.input} />
      <TextInput style={styles.input} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
    resizeMode: "cover",
    alignItems: "center",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  input: {
    width: 343,
    height: 50,
    padding: 16,
    borderWidth: 1,

    backgroundColor: "#F6F6F6",
    borderRadius: 8,
  },
});
