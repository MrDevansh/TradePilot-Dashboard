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
    <div className="flex">
      {/* Fixed Sidebar */}
      <div className="fixed top-0 left-0 bottom-0 w-60 z-40">
        <Sidebar />
      </div>

      {/* Main Area (left margin = sidebar width) */}
      <div className="ml-60 flex-1 flex flex-col h-screen overflow-hidden">
        {/* Topbar */}
        <Topbar />

        {/* Scrollable Main Content */}
        <main className="flex-1 overflow-y-auto p-6 space-y-6 bg-gray-100 dark:bg-gray-900">
          <Routes>
            <Route path="/" element={<Dashboard />} />
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
