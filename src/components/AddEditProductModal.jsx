import React, { useState, useEffect } from "react";

export default function AddEditProductModal({
  isEdit,
  productToEdit,
  onClose,
  onAddProduct,
  onEditProduct,
}) {
  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
    image: null,
  });

  useEffect(() => {
    if (isEdit && productToEdit) {
      setForm({
        name: productToEdit.name,
        category: productToEdit.category,
        price: productToEdit.price,
        stock: productToEdit.stock,
        image: productToEdit.image,
      });
    }
  }, [isEdit, productToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setForm((prev) => ({ ...prev, image: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEdit) {
      onEditProduct({ ...productToEdit, ...form }); // Edit existing product
    } else {
      onAddProduct(form); // Add new product
    }
    onClose(); // Close the modal
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
          {isEdit ? "Edit Product" : "Add New Product"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Product Name"
            className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            required
          />

          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            required
          >
            <option value="" disabled>
              Select Category
            </option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            <option value="furniture">Furniture</option>
            <option value="beauty">Beauty</option>
            <option value="sports">Sports</option>
          </select>

          <input
            name="price"
            type="number"
            value={form.price}
            onChange={handleChange}
            placeholder="Price"
            min="0"
            step="0.01"
            className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            required
          />

          <input
            name="stock"
            type="number"
            value={form.stock}
            onChange={handleChange}
            placeholder="Stock"
            min="0"
            className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            required
          />

          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full text-gray-700 dark:text-gray-300"
          />

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 rounded-xl border border-gray-300 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800 dark:text-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 focus:ring-4 focus:ring-blue-400"
            >
              {isEdit ? "Update Product" : "Add Product"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
