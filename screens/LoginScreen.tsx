import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useAuth } from "../context/AuthContext";
import { COLORS } from "../styles/colors";
import { getUsers } from "../services/db";

export const LoginScreen: React.FC = ({ navigation }: any) => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const users = await getUsers();
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      login(user.role);
      navigation.replace(user.role === "master" ? "MasterScreen" : "UserScreen");
    } else {
      alert("Email ou senha incorretos!");
    }
  };

  return (
    <View style={styles.container}>
      <Text>Email:</Text>
      <TextInput style={styles.input} value={email} onChangeText={setEmail} />
      <Text>Senha:</Text>
      <TextInput style={styles.input} value={password} secureTextEntry onChangeText={setPassword} />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20, backgroundColor: COLORS.background },
  input: { borderWidth: 1, borderColor: "gray", marginBottom: 10, padding: 8 }
});