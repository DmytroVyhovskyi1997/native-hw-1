import React, { useState } from "react";
import {
  StyleSheet,
  Dimensions,
  ImageBackground,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";

export const RegistrationScreen = () => {
  return (
    <ImageBackground
      source={require("../assets/image/photo-bg.jpg")}
      style={styles.image}
    >
      <View style={styles.form}>
        <KeyboardAvoidingView>
      

          <Text style={styles.inputTitle}>Увійти</Text>
      

          <View>
            <TextInput
              style={styles.input}
              placeholder="Адреса електронної пошти"
              placeholderTextColor="#BDBDBD"
            />
          </View>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Пароль"
              placeholderTextColor="#BDBDBD"
              secureTextEntry={true}
            />
          </View>
          <TouchableOpacity style={styles.submitBtn} activeOpacity={0.8}>
            <Text style={styles.submitTitle}>Увійти</Text>
          </TouchableOpacity>
          <Text style={styles.logIn}>Немає акаунту? Зареєструватися</Text>
        </KeyboardAvoidingView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  form: {
    marginHorizontal: 40,
    width: "100%",
    height: "85%",
    left: 0,
    top: 263,
    backgroundColor: "#FFFFFF",
    position: "relative",
    alignItems: "center",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
 
  image: {
    flex: 1,
    justifyContent: "center",
    resizeMode: "cover",
    alignItems: "center",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  submitBtn: {
    marginRight: 16,
    marginLeft: 16,
    height: 51,
    backgroundColor: "#FF6C00",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    marginBottom: 16,
    marginTop: 43,
  },
  submitTitle: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    color: "#FFFFFF",
    textAlign: "center",
  },
  inputTitle: {
    textAlign: "center",
    color: "#212121",
    paddingTop: 92,
    fontSize: 30,
  },
  input: {
    width: 343,
    height: 50,
    padding: 16,
    marginBottom: 16,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",
  },
  inputTitle: {
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 0.01,
    color: "#212121",
    marginBottom: 33,
  },
  logIn: {
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#1B4371",
  },
});
