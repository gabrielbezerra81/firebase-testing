import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import firebase from "firebase";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();

  function handleSignOut() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        navigation.goBack();
      })
      .catch();
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleSignOut}>
        <Text>Deslogar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
});

export default Home;
