import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons"; 
import { Camera } from "expo-camera";
import {  TouchableOpacity } from "react-native-gesture-handler";
import { useState, useEffect } from "react";

export const CreatePostsScreen = ({navigation}) => {
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState(null);




  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();
    setPhoto(photo.uri);
  };

  const sendPhoto = () => {
    navigation.navigate("Post", {photo})
  }
  

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} ref={setCamera}>
        <View style={styles.takePhotoContainer}>
          {photo && (
            <Image source={{ uri: photo }} style={styles.previewImage} />
          )}
        </View>
        <TouchableOpacity style={styles.iconCamera} onPress={takePhoto}>
          <Ionicons name="camera" size={24} color="white" />
        </TouchableOpacity>
      </Camera>
      <Text style={styles.title}>Завантажте фото</Text>
      <View>
        <TextInput placeholder="Назва" style={styles.input} />
        <TextInput placeholder="Місцевість" style={styles.inputTitle} />
        <TouchableOpacity
          style={styles.submitBtn}
          activeOpacity={0.8}
          onPress={sendPhoto}
        >
          <Text style={styles.submitTitle}>Опубліковати</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    height: 240,
    marginTop: 32,
    marginLeft: 16,
    marginRight: 20,
  },
  iconCamera: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 90,
    borderRadius: 50,
    backgroundColor: "#FFFFFF4D",
    width: 60,
    height: 60,
    alignSelf: "center",
  },
  takePhotoContainer: {
    position: "absolute",
    height: 240,
    borderColor: "#fff",
    borderWidth: 2,
  },
  previewImage: {
    flex: 1,
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
    fontFamily: "Arial",
    paddingHorizontal: 32,
    color: "#FFFFFF",
    textAlign: "center",
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    marginLeft: 16,
    marginRight: 16,
    marginTop: 32,
    paddingTop: 16,
    paddingBottom: 15,
    fontSize: 16,
  },
  title: {
    marginLeft: 16,
    marginTop: 8,
    fontSize: 16,
    color: "#BDBDBD",
  },
  inputTitle: {
    color: "#BDBDBD",
    marginLeft: 16,
    marginTop: 29,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
  },
});