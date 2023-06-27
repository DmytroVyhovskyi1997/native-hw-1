import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

export const DefaultScreen = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (route.params) {
      const { photo, photoName, photoLocation } = route.params;
      setPosts((prevState) => [
        ...prevState,
        { photo, photoName, photoLocation },
      ]);
    }
  }, [route.params]);

  const takeLocation = () => {
    navigation.navigate("Profile");
  };
  const takeComments = () => {
    navigation.navigate("CommentScreen");
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.postContainer}>
            <Image source={{ uri: item.photo }} style={styles.postImage} />
            <Text style={styles.postTitle}>{item.photoName}</Text>
            <View style={styles.postContent}>
              <EvilIcons
                name="comment"
                size={24}
                color="#BDBDBD"
                onPress={takeComments}
              />
              <View style={styles.locationBox}>
                <EvilIcons
                  style={styles.iconLocation}
                  name="location"
                  size={24}
                  color="#BDBDBD"
                  onPress={takeLocation}
                />
                <Text style={styles.postLocation}>{item.photoLocation}</Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  postContainer: {
    marginBottom: 10,
    marginTop: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  postImage: {
    width: 350,
    height: 200,
  },
  postContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  postTitle: {
    marginRight: 310,
    marginBottom: 8,
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  locationBox: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginLeft: 200,
    flex: 0.6,
  },
  postLocation: {
    fontSize: 14,
    color: "#212121",
    fontSize: 16,
    textDecorationLine: "underline",
  },
  iconLocation: {
    marginRight: 5,
  },
});
