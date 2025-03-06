import AsyncStorage from "@react-native-async-storage/async-storage";

const USERS = [
  { email: "master@example.com", password: "123456", role: "master" },
  { email: "user@example.com", password: "123456", role: "user" }
];

const ACCESS_LOGS: Record<string, { id: number; timestamp: string }[]> = {
  "master@example.com": [
    { id: 1, timestamp: "2024-03-01 10:00" },
    { id: 2, timestamp: "2024-03-02 11:30" },
    { id: 3, timestamp: "2024-03-03 14:15" },
    { id: 4, timestamp: "2024-03-04 16:45" },
    { id: 5, timestamp: "2024-03-05 19:20" }
  ],
  "user@example.com": [
    { id: 6, timestamp: "2024-03-01 09:10" },
    { id: 7, timestamp: "2024-03-02 12:20" },
    { id: 8, timestamp: "2024-03-03 15:40" },
    { id: 9, timestamp: "2024-03-04 17:50" },
    { id: 10, timestamp: "2024-03-05 20:10" }
  ]
};


export const getUsers = async () => USERS;

export const getAccessLogs = async (email: string) => ACCESS_LOGS[email] || [];

export const getAllAccessLogs = async () => {
  return Object.entries(ACCESS_LOGS).flatMap(([email, logs]) =>
    logs.map(log => ({ ...log, email }))
  );
};


export const addAccessLog = async (email: string) => {
  const newLog = { id: Date.now(), timestamp: new Date().toISOString() };
  ACCESS_LOGS[email] = [...(ACCESS_LOGS[email] || []), newLog];
  await AsyncStorage.setItem("ACCESS_LOGS", JSON.stringify(ACCESS_LOGS));
};