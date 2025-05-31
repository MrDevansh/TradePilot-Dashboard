import React, { useState } from "react";
import { customers, orders } from "../data/dummyData";

export default function Customers() {
  const [search, setSearch] = useState("");
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const filtered = customers.filter((customer) =>
    customer.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleViewOrders = (customer) => {
    setSelectedCustomer(customer);
    setShowModal(true);
  };

  const getOrdersForCustomer = (name) =>
    orders.filter((order) => order.customer === name);

  return (
    <div className="p-6 bg-gradient-to-tr from-gray-50 to-blue-50 dark:from-[#0f0f0f] dark:to-[#1a1a1a] min-h-screen rounded-lg transition">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-extrabold text-gray-800 dark:text-white tracking-wide">
          🧾 Customer Records
        </h2>
        <input
          type="text"
          placeholder="Search customers..."
          className="px-4 py-2 w-64 rounded-lg bg-white/80 backdrop-blur-md shadow-md border dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="overflow-x-auto rounded-xl shadow-xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg border border-gray-200 dark:border-gray-700">
        <table className="w-full text-left table-auto">
          <thead className="bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-gray-700 dark:to-gray-800 text-gray-700 dark:text-gray-200 uppercase text-sm">
            <tr>
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Orders</th>
              <th className="p-4">Total Spent</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((c) => (
              <tr
                key={c.id}
                className="border-b border-gray-200 dark:border-gray-700 hover:bg-blue-50/50 dark:hover:bg-gray-700 transition"
              >
                <td className="p-4 font-medium text-gray-800 dark:text-white">
                  {c.name}
                </td>
                <td className="p-4 text-gray-600 dark:text-gray-300">{c.email}</td>
                <td className="p-4 text-center">{c.totalOrders}</td>
                <td className="p-4 text-green-600 font-semibold dark:text-green-400">
                  ₹{c.totalSpent.toFixed(2)}
                </td>
                <td className="p-4">
                  <button
                    onClick={() => handleViewOrders(c)}
                    className="text-sm px-4 py-1.5 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition"
                  >
                    View Orders
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && selectedCustomer && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-white dark:bg-[#111827] rounded-lg shadow-xl w-full max-w-lg p-6 relative">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
              📦 Orders for {selectedCustomer.name}
            </h3>
            <div className="max-h-64 overflow-y-auto pr-2 custom-scroll">
              {getOrdersForCustomer(selectedCustomer.name).map((order) => (
                <div
                  key={order.id}
                  className="border-b py-3 flex justify-between text-sm dark:border-gray-700"
                >
                  <span className="text-gray-700 dark:text-gray-300">
                    #{order.id} • {order.date}
                  </span>
                  <span className="text-gray-800 font-semibold dark:text-white">
                    ₹{order.total}
                  </span>
                  <span
                    className={`font-medium ${
                      order.status === "Pending"
                        ? "text-yellow-500"
                        : order.status === "Shipped"
                        ? "text-blue-400"
                        : "text-green-400"
                    }`}
                  >
                    {order.status}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-5 text-right">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-black text-white rounded hover:bg-gray-900 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
