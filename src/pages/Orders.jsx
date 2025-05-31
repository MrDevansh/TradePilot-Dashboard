import React, { useState } from "react";
import { orders as dummyOrders, recentOrders } from "../data/dummyData";
import { exportToCSV } from "../utils/exportCSV";

export default function Orders() {
  const [orders, setOrders] = useState(dummyOrders);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  const handleStatusChange = (orderId, newStatus) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
  };

  const filteredOrders = orders.filter((order) => {
    return (
      (filterStatus === "All" || order.status === filterStatus) &&
      (order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.id.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-[#121212] dark:to-[#1f1f1f] rounded-xl">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="🔍 Search orders..."
          className="px-4 py-2 w-full sm:w-1/2 rounded-lg bg-white/80 backdrop-blur border border-gray-300 shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          onChange={(e) => setFilterStatus(e.target.value)}
          className="px-4 py-2 rounded-lg bg-white/90 backdrop-blur border border-gray-300 shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          <option value="All">All</option>
          <option value="Pending">Pending</option>
          <option value="Shipped">Shipped</option>
          <option value="Completed">Completed</option>
        </select>

        <button
          onClick={() => exportToCSV(recentOrders, "orders.csv")}
          className="px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium shadow hover:bg-indigo-700 transition"
        >
          📤 Export Orders
        </button>
      </div>

      <div className="overflow-x-auto rounded-lg shadow-lg bg-white/60 dark:bg-gray-800/60 backdrop-blur-md border border-gray-200 dark:border-gray-700">
        <table className="w-full text-left">
          <thead className="text-gray-700 dark:text-gray-300 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-gray-700 dark:to-gray-800 uppercase text-sm">
            <tr>
              <th className="p-4">Order ID</th>
              <th className="p-4">Customer</th>
              <th className="p-4">Total</th>
              <th className="p-4">Status</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order) => (
              <tr
                key={order.id}
                className="border-b dark:border-gray-700 hover:bg-indigo-50 dark:hover:bg-gray-700 transition"
              >
                <td className="p-4 font-medium text-gray-900 dark:text-white">
                  #{order.id}
                </td>
                <td className="p-4 text-gray-700 dark:text-gray-300">
                  {order.customer}
                </td>
                <td className="p-4 text-green-600 dark:text-green-400 font-semibold">
                  ₹{order.total}
                </td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      order.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-700 dark:text-white animate-pulse"
                        : order.status === "Shipped"
                        ? "bg-blue-100 text-blue-700 dark:bg-blue-700 dark:text-white"
                        : "bg-green-100 text-green-700 dark:bg-green-700 dark:text-white"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="p-4">
                  <button
                    onClick={() => handleStatusChange(order.id, "Shipped")}
                    className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
                  >
                    Mark as Shipped
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
