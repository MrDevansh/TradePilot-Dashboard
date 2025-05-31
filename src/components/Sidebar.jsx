import { Link, useLocation } from "react-router-dom";
import { Home, Package, ShoppingCart, Users, Layers } from "lucide-react";
import cart from '../assets/cart.png';

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
    <aside className="w-64 h-screen bg-white dark:bg-[#111827] border-r border-gray-200 dark:border-gray-700 shadow-md p-6 font-[Poppins,sans-serif] transition-colors duration-300">
      <h1 className=" px-8 font-extrabold text-purple-600 mb-6 flex items-center gap-2">
        <img src={cart} alt="Cart" className="w-32 h-32" />
      </h1>

      <nav className="space-y-5 text-[16px]">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg font-medium transition ${
                isActive
                  ? "bg-blue-100 text-blue-700 dark:bg-blue-600/20 dark:text-blue-400"
                  : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
