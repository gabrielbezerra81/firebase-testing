import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import firebase from "firebase";
import { useNavigation, useRoute } from "@react-navigation/native";

interface User {
  user: {
    email: string;
    cpf: string;
    tipo: number;
  };
}

const Home = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const { user } = route.params as User;

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
        <Text>Usuario logado: {user.email}</Text>
        <Text>CPF: {user.cpf}</Text>
        <Text>Tipo: {user.tipo}</Text>
        <Text>Deslogar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
});

export default Home;
