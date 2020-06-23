import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import firebase from "firebase";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const [email, setEmail] = useState("gabrielbezerra81@gmail.com");
  const [password, setPassword] = useState("1234567");

  const navigation = useNavigation();

  // firebase auth tem a propriedade currentUser que mostra o usuario logado atualmente,
  // então nao precisa passar o email como routeParam pra outras telas
  // console.log(firebase.auth().currentUser);

  function handleResetPassword() {
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(function () {
        alert("foi enviado um email para resetar a sua senha");
      })
      .catch(function (error) {
        // An error happened.
      });
  }

  function handleUserLogin() {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        const { user } = response;
        // buscar dados do database utilizando o email
        console.log(user?.email);
        alert("usuario autenticado com sucesso");

        navigation.navigate("Home");
      })
      .catch((error) => {
        // mostrar algum alerta de erro
        alert("erro ao fazer login");
        console.log(error);
      });
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder="seu email"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.textInput}
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholder="sua senha"
          secureTextEntry
        />

        <TouchableOpacity onPress={handleUserLogin}>
          <Text>Logar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleResetPassword}>
          <Text>Resetar senha</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    width: 250,
    height: 120,
    justifyContent: "space-around",
  },
  textInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 5,
  },
});

// Objeto retornado pelo login do firebase
const loginReturn = {
  additionalUserInfo: {
    isNewUser: false,
    providerId: "password",
  },
  credential: null,
  operationType: "signIn",
  user: {
    apiKey: "AIzaSyBKZJdQ2GpuD7Zi3BMJDvB1eUDIiHp6i8g",
    appName: ["DEFAULT"],
    authDomain: "test-app-1ecdc.firebaseapp.com",
    createdAt: "1592937491683",
    displayName: null,
    email: "gabriel@gmail.com",
    emailVerified: false,
    isAnonymous: false,
    lastLoginAt: "1592937531165",
    phoneNumber: null,
    photoURL: null,
    providerData: [
      {
        displayName: null,
        email: "gabriel@gmail.com",
        phoneNumber: null,
        photoURL: null,
        providerId: "password",
        uid: "gabriel@gmail.com",
      },
    ],
    redirectEventId: null,
    stsTokenManager: {
      accessToken:
        "eyJhbGciOiJSUzI1NiIsImtpZCI6ImMzZjI3NjU0MmJmZmU0NWU5OGMyMGQ2MDNlYmUyYmExMTc2ZWRhMzMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdGVzdC1hcHAtMWVjZGMiLCJhdWQiOiJ0ZXN0LWFwcC0xZWNkYyIsImF1dGhfdGltZSI6MTU5MjkzNzUzMSwidXNlcl9pZCI6IlJGQk5NV2dQdGtaT0RTcmtEV1N2d0hnYThnMTMiLCJzdWIiOiJSRkJOTVdnUHRrWk9EU3JrRFdTdndIZ2E4ZzEzIiwiaWF0IjoxNTkyOTM3NTMxLCJleHAiOjE1OTI5NDExMzEsImVtYWlsIjoiZ2FicmllbEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiZ2FicmllbEBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.TsxNS27kE3n4tWfp-Mqyrlf4aFS2brTffzZdVu3u82z0hRNYE-byamfUePvM3V_MobzOVfGC9PMMPkKo29_cetAFDV6tqLz2RiIwySAIctUM3BDZPWA1vO8XyH9koZClFcnO0sL1WrcfIbD4yZgtQNHp1Tb0NRgqVACc_A_zTkrUQ5aDXF8aXBbpan-GJwANkL1_eZBvNbhhjArqqxkPQw6ReA4Zj9-Bh-H0EvIbY99hJ_0P-1LqGrc07oI8mn3eqGZDMo9u55fsdnGQHiHsbTJdb_dYyOyGXXCZ05CmT7CDAlqbu3VVGUuz-xdQ83sKEfuYlwSeekix9a4ouCraJQ",
      apiKey: "AIzaSyBKZJdQ2GpuD7Zi3BMJDvB1eUDIiHp6i8g",
      expirationTime: 1592941131324,
      refreshToken:
        "AE0u-NdqHnpYj6GZlFIAjuX64D-vmbUItK6121wW3bESuMlyn3XFBS8DJZ3yuW1uKCddLFjrFeTREQa-6Kk_dxYpObSpoPMRGm8wpNA-mucuMqT3OpOZs1SXR5qaNJ7LOGCOi-tVxUf5IO-08pqjUPZ1xirrVRM0anzG-QMa9FnCtbYds_tb2QEmQOFDoLNsEpXKsqJqY6W9JI5sCXc32OLSz2uW2tapdQ",
    },
    tenantId: null,
    uid: "RFBNMWgPtkZODSrkDWSvwHga8g13",
  },
};
