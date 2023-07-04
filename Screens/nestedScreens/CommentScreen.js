import React, { useEffect, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { db } from "../../firebase/config";
import { useSelector } from "react-redux";
import {
  collection,
  query,
  where,
  onSnapshot,
  addDoc,
} from "firebase/firestore";

export const CommentScreen = ({ route }) => {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");

  const { nickName } = useSelector((state) => state.auth);
  const { postId, photo } = route.params;

  useEffect(() => {
    const commentsRef = query(
      collection(db, "comments"),
      where("postId", "==", postId)
    );
    const unsubscribe = onSnapshot(commentsRef, (snapshot) => {
      setComments(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });

    return () => unsubscribe();
  }, [postId]);

  const addComment = async () => {
    if (commentText.trim() === "") {
      return;
    }

    try {
      const commentData = {
        postId,
        comment: commentText,
        author: nickName,
        timestamp: new Date().toISOString(),
      };

      await addDoc(collection(db, "comments"), commentData);

      setCommentText("");
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: photo }} style={styles.photo} />
      <FlatList
        data={comments}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.commentPost}>
            <Text style={styles.comment}>{item.comment}</Text>
            <Text style={styles.comment}>{item.author}</Text>
          </View>
        )}
      />
      <View>
        <TextInput
          style={styles.inputTitle}
          placeholder="Коментувати..."
          value={commentText}
          onChangeText={setCommentText}
        />
      </View>
      <TouchableOpacity onPress={addComment} style={styles.upload}>
        <MaterialCommunityIcons
          name="progress-upload"
          size={34}
          color="#FF6C00"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "white",
  },
  photo: {
    width: 350,
    height: 200,
    marginLeft: "auto",
    marginRight: "auto",
  },
  upload: {
    position: "absolute",
    right: 55,
    bottom: 8,
  },
  inputTitle: {
    position: "relative",
    width: 343,
    marginLeft: "auto",
    marginRight: "auto",
    height: 50,
    flexShrink: 0,
    backgroundColor: "#F6F6F6",
    borderRadius: 50,
    borderBottomWidth: 3,
    borderBottomColor: "#E8E8E8",
    padding: 16,
  },
  commentPost: {
    padding: 16,
    marginLeft: 16,
    marginTop: 32,
    marginBottom: 24,
    width: 299,
    height: 103,
    flexShrink: 0,
    borderRadius: 6,
    backgroundColor: "#F6F6F6",
  },
  comment: {
    color: "#212121",
    fontSize: 13,
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: 18,
  },
});
