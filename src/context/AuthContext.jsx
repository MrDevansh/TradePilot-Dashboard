import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

const VALID_USERS = [
  { username: "Admin", password: "admin123", role: "Admin" },
  { username: "Boss", password: "boss123", role: "Boss" },
];

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("user");
    return stored ? JSON.parse(stored) : null;
  });

  const login = (username, password) => {
    const found = VALID_USERS.find(
      (u) => u.username === username && u.password === password
    );

    if (found) {
      setUser(found);
      localStorage.setItem("user", JSON.stringify(found));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
