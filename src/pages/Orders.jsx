import { exportToCSV } from "../utils/exportCSV";
import { recentOrders } from "../data/dummyData";

<button
  onClick={() => exportToCSV(recentOrders, "orders.csv")}
  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
>
  Export Orders
</button>

import React, { useState } from "react";
import { orders as dummyOrders } from "../data/dummyData";

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
    <div className="p-6">
      <div className="flex justify-between mb-4">
        <input
          type="text"
          placeholder="Search Orders"
          className="border p-2 rounded-md w-1/2"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          onChange={(e) => setFilterStatus(e.target.value)}
          className="border p-2 rounded-md"
        >
          <option value="All">All</option>
          <option value="Pending">Pending</option>
          <option value="Shipped">Shipped</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200 text-left">
          <thead className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200">
            <tr>
              <th className="p-3">Order ID</th>
              <th className="p-3">Customer</th>
              <th className="p-3">Total</th>
              <th className="p-3">Status</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order) => (
              <tr key={order.id} className="border-b">
                <td className="p-3">{order.id}</td>
                <td className="p-3">{order.customer}</td>
                <td className="p-3">${order.total}</td>
                <td className="p-3">{order.status}</td>
                <td className="p-3">
                  <button
                    onClick={() =>
                      handleStatusChange(order.id, "Shipped")
                    }
                    className="text-blue-600 hover:underline"
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

