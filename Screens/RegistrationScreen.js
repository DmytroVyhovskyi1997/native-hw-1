import React, { useState } from "react";
import {
  StyleSheet,
  Dimensions,
  ImageBackground,
  TextInput,
  View,
  Text,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from "react-native";

export const RegistrationScreen = () => {
  const [image, setImage] = useState(null);
    const [isShowKeyboard, setIsShowKeyboard] = useState(false);

    const keyboardHide = () => {
      setIsShowKeyboard(true);
      Keyboard.dismiss();
    };
  return (
    <ImageBackground
      source={require("../assets/image/photo-bg.jpg")}
      style={styles.image}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ ...styles.form }}
      >
        <View>
          <View style={styles.formAvatar}>
            <TouchableOpacity>
              <Image
                source={{ uri: image }}
                style={{ width: 120, height: 120, borderRadius: 16 }}
              />
              <Image
                source={require("../assets/image/add.jpg")}
                style={styles.add}
              />
            </TouchableOpacity>
          </View>

          <Text style={styles.inputTitle}>Реєстрація</Text>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Логін"
              placeholderTextColor="#BDBDBD"
              onFocus={() => setIsShowKeyboard(true)}
            />
          </View>

          <View>
            <TextInput
              style={styles.input}
              placeholder="Адреса електронної пошти"
              placeholderTextColor="#BDBDBD"
              onFocus={() => setIsShowKeyboard(true)}
            />
          </View>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Пароль"
              placeholderTextColor="#BDBDBD"
              secureTextEntry={true}
              onFocus={() => setIsShowKeyboard(true)}
            />
          </View>
          <TouchableOpacity
            style={styles.submitBtn}
            activeOpacity={0.8}
            onPress={keyboardHide}
          >
            <Text style={styles.submitTitle}>Зареєструватися</Text>
          </TouchableOpacity>
          <Text style={styles.logIn}>Вже є акаунт? Увійти</Text>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  form: {
    marginHorizontal: 40,
    width: "100%",
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  formAvatar: {
    top: -60,
    left: "26%",
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    zIndex: 999,
  },
  add: {
    position: "absolute",
    top: 81,
    right: -10,
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
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
    marginBottom: 78,
  },
});
