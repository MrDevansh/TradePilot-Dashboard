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
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Customers</h2>
        <input
          type="text"
          placeholder="Search customers"
          className="border p-2 rounded-md w-64 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200 text-left dark:border-gray-700">
          <thead className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Orders</th>
              <th className="p-3">Total Spent</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((c) => (
              <tr key={c.id} className="border-b dark:border-gray-700">
                <td className="p-3">{c.name}</td>
                <td className="p-3">{c.email}</td>
                <td className="p-3">{c.totalOrders}</td>
                <td className="p-3 text-green-600">${c.totalSpent.toFixed(2)}</td>
                <td className="p-3">
                  <button
                    className="text-blue-600 hover:underline"
                    onClick={() => handleViewOrders(c)}
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
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg w-full max-w-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
              Orders for {selectedCustomer.name}
            </h3>
            <div className="max-h-64 overflow-y-auto">
              {getOrdersForCustomer(selectedCustomer.name).map((order) => (
                <div
                  key={order.id}
                  className="border-b py-2 flex justify-between text-sm dark:border-gray-700"
                >
                  <span className="text-gray-700 dark:text-gray-200">
                    Order #{order.id} • {order.date}
                  </span>
                  <span className="text-gray-800 font-medium dark:text-white">
                    ${order.total}
                  </span>
                  <span
                    className={`${
                      order.status === "Pending"
                        ? "text-yellow-500"
                        : order.status === "Shipped"
                        ? "text-blue-500"
                        : "text-green-500"
                    }`}
                  >
                    {order.status}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-4 text-right">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 dark:bg-gray-800 dark:text-white"
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
