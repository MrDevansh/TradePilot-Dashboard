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
      { ...newProduct, id: Date.now().toString() },
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
    <div className="p-6">
      <button
        onClick={() => setShowAddProductModal(true)}
        className="bg-green-600 text-white px-4 py-2 rounded-md mb-4"
      >
        + Add Product
      </button>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200 text-left">
          <thead className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200">
            <tr>
              <th className="p-3">Product ID</th>
              <th className="p-3">Name</th>
              <th className="p-3">Category</th>
              <th className="p-3">Price</th>
              <th className="p-3">Stock</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-b">
                <td className="p-3">{product.id}</td>
                <td className="p-3">{product.name}</td>
                <td className="p-3">{product.category}</td>
                <td className="p-3">${product.price}</td>
                <td className="p-3">{product.stock}</td>
                <td className="p-3">
                  <button
                    onClick={() => handleEditClick(product)}
                    className="text-blue-600 hover:underline"
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
