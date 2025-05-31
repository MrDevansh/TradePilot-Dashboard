import React, { useState } from "react";
import { products } from "../data/dummyData";

export default function Inventory() {
  const [search, setSearch] = useState("");

  const filtered = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 dark:from-[#0f0f0f] dark:to-[#1a1a1a] rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white tracking-wide">
          📦 Inventory Overview
        </h2>
        <input
          type="text"
          placeholder="Search products..."
          className="px-4 py-2 w-64 rounded-lg bg-white/80 backdrop-blur-md shadow-md border dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="overflow-x-auto rounded-xl shadow-lg backdrop-blur-md bg-white/60 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700">
        <table className="w-full text-left table-auto">
          <thead className="bg-gradient-to-r from-indigo-100 to-blue-100 dark:from-gray-700 dark:to-gray-800 text-gray-700 dark:text-gray-200 text-sm uppercase">
            <tr>
              <th className="p-4">Product</th>
              <th className="p-4">Category</th>
              <th className="p-4">Stock</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((product) => (
              <tr
                key={product.id}
                className="border-b border-gray-200 dark:border-gray-700 hover:bg-blue-50/50 dark:hover:bg-gray-700 transition"
              >
                <td className="p-4 font-medium text-gray-800 dark:text-white">
                  {product.name}
                </td>
                <td className="p-4 capitalize text-gray-600 dark:text-gray-300">
                  {product.category}
                </td>
                <td className="p-4">{product.stock}</td>
                <td className="p-4">
                  {product.stock < 10 ? (
                    <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold dark:bg-red-700 dark:text-white animate-pulse">
                      Low Stock
                    </span>
                  ) : (
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold dark:bg-green-700 dark:text-white">
                      In Stock
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
