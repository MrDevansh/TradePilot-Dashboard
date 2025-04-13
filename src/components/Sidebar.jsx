// src/components/Sidebar.jsx
import { Link, useLocation } from "react-router-dom";
import { Home, Package, ShoppingCart, Users, Layers } from "lucide-react";

const navItems = [
  { path: "/dashboard", label: "Dashboard", icon: <Home size={18} /> },
  { path: "/dashboard/products", label: "Products", icon: <Package size={18} /> },
  { path: "/dashboard/orders", label: "Orders", icon: <ShoppingCart size={18} /> },
  { path: "/dashboard/inventory", label: "Inventory", icon: <Layers size={18} /> },
  { path: "/dashboard/customers", label: "Customers", icon: <Users size={18} /> },
];

export default function Sidebar() {
  const { pathname } = useLocation();

  return (
    <aside className="w-60 bg-white shadow h-screen p-4">
      <h1 className="text-xl font-bold mb-6">👨‍💻 Vendor Base</h1>
      <nav className="space-y-2">
        {navItems.map((item) => (
          <Link
            to={item.path}
            key={item.path}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
              pathname === item.path
                ? "bg-blue-100 text-blue-600 font-semibold"
                : "hover:bg-gray-100 text-gray-700"
            }`}
          >
            {item.icon}
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
