import React from "react";
import useThemeToggle from "../utils/useThemeToggle";
import { useAuth } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";
import { Moon, Sun, LogOut } from "lucide-react";

export default function Topbar() {
  const { isDark, toggleTheme } = useThemeToggle();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/signin");
  };

  return (
    <header className="w-full mx-4 px-6 py-4 bg-white dark:bg-[#111827] shadow-sm flex justify-between items-center border-b border-gray-200 dark:border-gray-700 z-50">
      {/* Logo / Brand */}
      <h1 className="text-2xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text tracking-wide">
        🛍️ TradePilot
      </h1>

      {/* Controls */}
      <div className="flex items-center space-x-4">
        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          {isDark ? (
            <Sun className="w-5 h-5 text-yellow-400" />
          ) : (
            <Moon className="w-5 h-5 text-gray-700" />
          )}
        </button>

        {/* Role + Logout */}
        {user && (
          <div className="flex items-center space-x-3">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
              {user.role}
            </span>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-1 text-sm bg-black text-white px-3 py-1.5 rounded hover:bg-gray-900 transition"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
