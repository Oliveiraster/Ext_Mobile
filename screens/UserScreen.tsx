import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import { useAuth } from "../context/AuthContext";
import { getAccessLogs, addAccessLog } from "../services/db";

export const UserScreen: React.FC = () => {
  const { logout } = useAuth();
  const [logs, setLogs] = useState<{ id: number; timestamp: string }[]>([]);

  useEffect(() => {
    getAccessLogs("user@example.com").then(setLogs);
  }, []);

  return (
    <View>
      <Text>Seus acionamentos:</Text>
      {logs.map(log => (
        <Text key={log.id}>{log.timestamp}</Text>
      ))}
      <Button title="Acionar Porta" onPress={() => alert("Porta Liberada!")} />
      <Button title="Logout" onPress={logout} />
    </View>
  );
};
