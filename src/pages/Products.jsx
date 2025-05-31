import React, { useState } from "react";
import { products as dummyProducts } from "../data/dummyData";
import AddEditProductModal from "../components/AddEditProductModal";

export default function Products() {
  const [products, setProducts] = useState(dummyProducts);
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [showEditProductModal, setShowEditProductModal] = useState(false);
  const [productToEdit, setProductToEdit] = useState(null);

  const handleAddProduct = (newProduct) => {
    setProducts((prev) => [
      ...prev,
      { ...newProduct, id: "p" + Math.floor(Math.random() * 1000) },
    ]);
  };

  const handleEditProduct = (updatedProduct) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
  };

  const handleEditClick = (product) => {
    setProductToEdit(product);
    setShowEditProductModal(true);
  };

  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-pink-50 to-purple-100 dark:from-[#111827] dark:to-[#1f2937] rounded-xl">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">📦 Products</h2>
        <button
          onClick={() => setShowAddProductModal(true)}
          className="px-5 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition"
        >
          + Add Product
        </button>
      </div>

      <div className="overflow-x-auto rounded-lg bg-white/70 dark:bg-gray-800/80 shadow-lg backdrop-blur border border-gray-200 dark:border-gray-700">
        <table className="w-full text-left">
          <thead className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 uppercase text-sm">
            <tr>
              <th className="p-4">Product ID</th>
              <th className="p-4">Name</th>
              <th className="p-4">Category</th>
              <th className="p-4">Price</th>
              <th className="p-4">Stock</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr
                key={product.id}
                className="border-b dark:border-gray-700 hover:bg-purple-50 dark:hover:bg-gray-700 transition"
              >
                <td className="p-4 font-medium text-gray-900 dark:text-white">{product.id}</td>
                <td className="p-4 text-gray-800 dark:text-gray-200">{product.name}</td>
                <td className="p-4">
                  <span className="px-2 py-1 bg-indigo-100 text-indigo-700 dark:bg-indigo-700 dark:text-white rounded-full text-xs font-semibold capitalize">
                    {product.category}
                  </span>
                </td>
                <td className="p-4 text-green-600 dark:text-green-400 font-semibold">
                  ₹{product.price}
                </td>
                <td className="p-4 text-gray-700 dark:text-gray-300">{product.stock}</td>
                <td className="p-4">
                  <button
                    onClick={() => handleEditClick(product)}
                    className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Product Modal */}
      {showAddProductModal && (
        <AddEditProductModal
          isEdit={false}
          onClose={() => setShowAddProductModal(false)}
          onAddProduct={handleAddProduct}
        />
      )}

      {/* Edit Product Modal */}
      {showEditProductModal && (
        <AddEditProductModal
          isEdit={true}
          productToEdit={productToEdit}
          onClose={() => setShowEditProductModal(false)}
          onEditProduct={handleEditProduct}
        />
      )}
    </div>
  );
}
