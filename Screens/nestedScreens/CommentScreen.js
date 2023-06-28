import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

export const CommentScreen = ({ route }) => {
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
    navigation.navigate("MapScreen");
  };

  const renderPost = ({ item }) => (
    <View style={styles.postContainer}>
      {item.photo && (
        <Image source={{ uri: item.photo }} style={styles.postImage} />
      )}
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
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderPost}
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
  },
  postImage: {
    width: 100,
    height: 100,
  },
  postTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  postContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationBox: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  iconLocation: {
    marginRight: 5,
  },
  postLocation: {
    fontSize: 12,
  },
});
