import React, { useState } from "react";
import { products } from "../data/dummyData";

export default function Inventory() {
  const [search, setSearch] = useState("");

  const filtered = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Inventory</h2>
        <input
          type="text"
          placeholder="Search products"
          className="border p-2 rounded-md w-64 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200 text-left dark:border-gray-700">
          <thead className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200">
            <tr>
              <th className="p-3">Product</th>
              <th className="p-3">Category</th>
              <th className="p-3">Stock</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((product) => (
              <tr key={product.id} className="border-b dark:border-gray-700">
                <td className="p-3">{product.name}</td>
                <td className="p-3 capitalize">{product.category}</td>
                <td className="p-3">{product.stock}</td>
                <td className="p-3">
                  {product.stock < 10 ? (
                    <span className="text-red-500 font-semibold">Low Stock</span>
                  ) : (
                    <span className="text-green-600">In Stock</span>
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
