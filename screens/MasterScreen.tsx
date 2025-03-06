import React, { useEffect, useState } from "react";
import { View, Text, Button, ScrollView } from "react-native";
import { useAuth } from "../context/AuthContext";
import { getAllAccessLogs } from "../services/db";

export const MasterScreen: React.FC = () => {
  const { logout } = useAuth();
  const [logs, setLogs] = useState<{ id: number; timestamp: string; email: string }[]>([]);

  useEffect(() => {
    getAllAccessLogs().then(setLogs);
  }, []);

  return (
    <ScrollView>
      <View>
        <Text>Todos os acionamentos:</Text>
        {logs.map(log => (
          <Text key={log.id}>
            {log.timestamp} - {log.email}
          </Text>
        ))}
        <Button title="Acionar Porta" onPress={() => alert("Porta Liberada!")} />
        <Button title="Logout" onPress={logout} />
      </View>
    </ScrollView>
  );
};
