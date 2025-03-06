import React, { createContext, useState, useContext } from "react";

type UserRole = "user" | "master";
interface AuthContextType {
  userRole: UserRole | null ;
  login: (role: UserRole) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userRole, setUserRole] = useState<UserRole | null>(null);
 


  const login = (role: UserRole) => setUserRole(role);
  const logout = () => {
    setUserRole(null)
    window.location.href = '/login';
  };
 
  return (
    <AuthContext.Provider value={{ userRole, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};