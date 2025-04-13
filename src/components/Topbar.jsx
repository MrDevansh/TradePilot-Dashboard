import React from "react";
import useThemeToggle from "../utils/useThemeToggle";
import { useAuth } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";
import { Moon, Sun, LogOut } from "lucide-react"; // Optional: prettier icons

export default function Topbar() {
  const { isDark, toggleTheme } = useThemeToggle();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/signin");
  };


  return (
    <div className="flex justify-between p-4 border-b bg-white dark:bg-gray-800">
    <h1 className="text-xl font-semibold dark:text-white">🛍️ Welcome To TradePilot </h1>
    {user && (
      <div className="flex items-center gap-4">
        <span className="text-sm dark:text-gray-200">
         {user.role}
        </span>
        <button
          onClick={handleLogout}
          className="text-red-500 hover:underline"
        >
          Logout
        </button>
      </div>
    )}
  </div>
  );
}
