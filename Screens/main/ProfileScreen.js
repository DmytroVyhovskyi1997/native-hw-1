import React, { useEffect, useState } from "react";
import { Feather, Fontisto, EvilIcons } from "@expo/vector-icons";
import {
  View,
  StyleSheet,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from "react-native";
import { db } from "../../firebase/config";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { authSingOutUser } from "../../redux/auth/authOperation";
import { useDispatch, useSelector } from "react-redux";

export const ProfileScreen = () => {
  const [posts, setPosts] = useState([]);
  const dispatch = useDispatch();
  const { userId } = useSelector((state) => state.auth);

  useEffect(() => {
    const getUserPost = async () => {
      const postsRef = collection(db, "post");
      const queryRef = query(postsRef, where("userId", "==", userId));

      const unsubscribe = onSnapshot(queryRef, (snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPosts(data);
      });

      return () => unsubscribe();
    };

    getUserPost();
  }, [userId]);

  const singOut = () => {
    dispatch(authSingOutUser());
  };

  return (
    <ImageBackground
      source={require("../../assets/image/photo-bg.jpg")}
      style={styles.image}
    >
      <View style={styles.container}>
        <View style={styles.form}>
          <TouchableOpacity style={styles.logoutButton} onPress={singOut}>
            <Feather name="log-out" size={24} color="black" />
          </TouchableOpacity>
          <FlatList
            data={posts}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.postContainer}>
                <Image source={{ uri: item.photo }} style={styles.photo} />
                <Text style={styles.title}>{item.photoName}</Text>
                <Fontisto
                  style={styles.comment}
                  name="comment"
                  size={18}
                  color="#BDBDBD"
                />
                <View style={styles.locationBox}>
                  <EvilIcons
                    style={styles.iconLocation}
                    name="location"
                    size={24}
                    color="#BDBDBD"
                    onPress={() =>
                      navigation.navigate("MapScreen", {
                        location: item.location,
                      })
                    }
                  />
                  <Text style={styles.description}>{item.photoLocation}</Text>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 100,
  },
  form: {
    marginHorizontal: 40,
    width: 427,
    height: "100%",
    resizeMode: "cover",
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop:103,
  },
 
  image: {
    flex: 1,
    justifyContent: "flex-end",
    resizeMode: "cover",
    alignItems: "center",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  postContainer: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#E1E1E1",
    borderRadius: 10,
    padding: 10,
    marginTop: 60,
  },
  photo: {
    width: 343,
    height: 240,
  },
  locationBox: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginLeft: 200,
    flex: 0.6,
  },
  title: {
    marginRight: 310,
    marginBottom: 8,
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  description: {
    fontSize: 14,
    color: "#212121",
    fontSize: 16,
    textDecorationLine: "underline",
  },
  logoutButton: {
    position: "absolute",
    top: 0,
    right: 40,
    marginTop: 20,
  },
});
