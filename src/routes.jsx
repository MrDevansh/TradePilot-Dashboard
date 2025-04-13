import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Orders from "./pages/Orders"; // Import Orders page
import Inventory from "./pages/Inventory";
import Customers from "./pages/Customers";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/products" element={<Products />} />
      <Route path="/orders" element={<Orders />} /> {/* Add route for Orders */}
      <Route path="/inventory" element={<Inventory />} />
      <Route path="/customers" element={<Customers />} />
    </Routes>
  );
}
