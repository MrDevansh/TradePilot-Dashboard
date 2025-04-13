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
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg w-[90%] max-w-lg">
        <h2 className="text-xl font-bold mb-4">{isEdit ? "Edit Product" : "Add New Product"}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Product Name"
            className="w-full px-4 py-2 border rounded"
            required
          />
          
          {/* Category Dropdown */}
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
            required
          >
            <option value="" disabled>Select Category</option>
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
            className="w-full px-4 py-2 border rounded"
            required
          />
          <input
            name="stock"
            type="number"
            value={form.stock}
            onChange={handleChange}
            placeholder="Stock"
            className="w-full px-4 py-2 border rounded"
            required
          />
          <input
            type="file"
            onChange={handleImageChange}
            className="w-full px-4 py-2 border rounded"
          />
          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              {isEdit ? "Update Product" : "Add Product"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
