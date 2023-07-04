import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { Camera } from "expo-camera";
import * as Location from "expo-location";
import { TouchableOpacity } from "react-native-gesture-handler";
import { db, storage } from "../../firebase/config";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";



export const CreatePostsScreen = ({ navigation }) => {
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [photoName, setPhotoName] = useState("");
  const [photoLocation, setPhotoLocation] = useState("");

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();
    setPhoto(photo.uri);
  };

  const sendPhoto = () => {
    uploadPhotoToServer();
    navigation.navigate("DefaultScreen", { photo, photoName, photoLocation });
  };

  const takeLocation = () => {
    navigation.navigate("Profile");
  };

  const uploadPhotoToServer = async() => {
       const response = await fetch(photo);
       const file = await response.blob();
       const uniquePostId = Date.now().toString();
       const storageImage = await ref(storage, `postImage/${uniquePostId}`);
       await uploadBytes(storageImage, file);
       const addedPhoto = await getDownloadURL(storageImage);
       return addedPhoto;
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
        <TextInput
          placeholder="Назва"
          style={styles.input}
          value={photoName}
          onChangeText={setPhotoName}
        />

        <TextInput
          placeholder="Місцевість"
          style={styles.inputTitle}
          value={photoLocation}
          onChangeText={setPhotoLocation}
        />

        <EvilIcons
          style={styles.iconLocation}
          name="location"
          size={24}
          color="#BDBDBD"
          onPress={takeLocation}
        />

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
    position: "relative",
    marginLeft: 44,
    marginTop: 29,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
  },
  iconLocation: {
    position: "absolute",
    bottom: 127,
    marginLeft: 14,
  },
});
