import React, { useContext, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { AuthBackground } from "../../../components/AuthBackground";
import { Title } from "../../../components/Title";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import {
  Button,
  TextInput,
  ActivityIndicator,
  Colors,
} from "react-native-paper";
import { colors } from "../../../utils/colors";
import { space } from "../../../utils/spacing";

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const [password, setPassword] = useState("");
  const { error, onRegister, isLoading } = useContext(AuthenticationContext);

  return (
    <AuthBackground>
      <Title />
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          label="Email"
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={(val) => setEmail(val)}
        />
        <TextInput
          style={styles.input}
          label="Password"
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          value={password}
          onChangeText={(val) => setPassword(val)}
        />
        <TextInput
          style={styles.input}
          label="Retype Password"
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          value={repeatedPassword}
          onChangeText={(val) => setRepeatedPassword(val)}
        />
        {error && <Text style={styles.error}>{error}</Text>}
        {!isLoading ? (
          <Button
            style={styles.button}
            icon="email"
            color={colors.brand.primary}
            mode="contained"
            onPress={() => onRegister(email, password, repeatedPassword)}
          >
            Create Account
          </Button>
        ) : (
          <ActivityIndicator animating={true} color={Colors.blue300} />
        )}
      </View>
      <Button
        style={styles.button}
        color={colors.brand.primary}
        mode="contained"
        onPress={() => navigation.goBack()}
      >
        Back
      </Button>
    </AuthBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: space.lg,
    width: "90%",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
  },
  input: {
    marginTop: space.lg,
  },
  button: {
    padding: space.md,
    margin: space.lg,
  },
  error: {
    color: colors.text.error,
    fontWeight: "bold",
    marginTop: space.md,
    textAlign: "center",
  },
});
