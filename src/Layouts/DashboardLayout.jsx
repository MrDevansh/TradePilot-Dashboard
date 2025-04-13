// src/layouts/DashboardLayout.jsx
import { Routes, Route } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Dashboard from "../pages/Dashboard";
import Products from "../pages/Products";
import Orders from "../pages/Orders";
import Inventory from "../pages/Inventory";
import Customers from "../pages/Customers";

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <Topbar />

        {/* Main Content */}
        <main className="p-6 space-y-6 bg-gray-100 dark:bg-gray-900">
          <Routes>
            {/* Dashboard Page */}
            <Route path="/" element={<Dashboard />} />

            {/* Dashboard Sub-Pages */}
            <Route path="products" element={<Products />} />
            <Route path="orders" element={<Orders />} />
            <Route path="inventory" element={<Inventory />} />
            <Route path="customers" element={<Customers />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
